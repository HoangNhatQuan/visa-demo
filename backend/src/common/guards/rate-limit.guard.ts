import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { Request } from 'express';
import {
  RATE_LIMIT_KEY,
  type RateLimitOptions,
} from '../decorators/rate-limit.decorator';
import type { Response } from 'express';

interface Bucket {
  count: number;
  resetAt: number;
}

const DEFAULT_RATE_LIMIT: RateLimitOptions = {
  limit: 120,
  windowMs: 60_000,
};
const PRUNE_EVERY_N_REQUESTS = 1_000;

@Injectable()
export class RateLimitGuard implements CanActivate {
  private readonly buckets = new Map<string, Bucket>();
  private requestCount = 0;

  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();
    if (!request) return true;

    const limitConfig =
      this.reflector.getAllAndOverride<RateLimitOptions>(RATE_LIMIT_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? DEFAULT_RATE_LIMIT;

    const key = this.getBucketKey(request);
    const now = Date.now();
    const existing = this.buckets.get(key);
    this.pruneExpiredBuckets(now);

    if (!existing || existing.resetAt <= now) {
      const resetAt = now + limitConfig.windowMs;
      this.buckets.set(key, {
        count: 1,
        resetAt,
      });
      this.setRateLimitHeaders(
        response,
        limitConfig.limit,
        limitConfig.limit - 1,
        resetAt,
      );
      return true;
    }

    if (existing.count >= limitConfig.limit) {
      const retryAfterSec = Math.max(
        1,
        Math.ceil((existing.resetAt - now) / 1_000),
      );
      this.setRateLimitHeaders(
        response,
        limitConfig.limit,
        0,
        existing.resetAt,
      );
      response.setHeader('Retry-After', String(retryAfterSec));
      throw new HttpException(
        `Too many requests. Try again in ${retryAfterSec}s.`,
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    existing.count += 1;
    this.setRateLimitHeaders(
      response,
      limitConfig.limit,
      Math.max(0, limitConfig.limit - existing.count),
      existing.resetAt,
    );
    return true;
  }

  private getBucketKey(request: Request): string {
    const routeKey = `${request.method}:${request.path}`;
    const ip = request.ip ?? 'unknown-ip';
    return `${routeKey}:${ip}`;
  }

  private setRateLimitHeaders(
    response: Response | undefined,
    limit: number,
    remaining: number,
    resetAt: number,
  ): void {
    if (!response) return;
    response.setHeader('X-RateLimit-Limit', String(limit));
    response.setHeader('X-RateLimit-Remaining', String(remaining));
    response.setHeader(
      'X-RateLimit-Reset',
      String(Math.floor(resetAt / 1_000)),
    );
  }

  private pruneExpiredBuckets(now: number): void {
    this.requestCount += 1;
    if (this.requestCount % PRUNE_EVERY_N_REQUESTS !== 0) return;

    for (const [key, bucket] of this.buckets.entries()) {
      if (bucket.resetAt <= now) {
        this.buckets.delete(key);
      }
    }
  }
}
