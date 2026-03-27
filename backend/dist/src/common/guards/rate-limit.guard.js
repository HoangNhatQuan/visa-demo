"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const rate_limit_decorator_1 = require("../decorators/rate-limit.decorator");
const DEFAULT_RATE_LIMIT = {
    limit: 120,
    windowMs: 60_000,
};
const PRUNE_EVERY_N_REQUESTS = 1_000;
let RateLimitGuard = class RateLimitGuard {
    reflector;
    buckets = new Map();
    requestCount = 0;
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse();
        if (!request)
            return true;
        const limitConfig = this.reflector.getAllAndOverride(rate_limit_decorator_1.RATE_LIMIT_KEY, [
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
            this.setRateLimitHeaders(response, limitConfig.limit, limitConfig.limit - 1, resetAt);
            return true;
        }
        if (existing.count >= limitConfig.limit) {
            const retryAfterSec = Math.max(1, Math.ceil((existing.resetAt - now) / 1_000));
            this.setRateLimitHeaders(response, limitConfig.limit, 0, existing.resetAt);
            response.setHeader('Retry-After', String(retryAfterSec));
            throw new common_1.HttpException(`Too many requests. Try again in ${retryAfterSec}s.`, common_1.HttpStatus.TOO_MANY_REQUESTS);
        }
        existing.count += 1;
        this.setRateLimitHeaders(response, limitConfig.limit, Math.max(0, limitConfig.limit - existing.count), existing.resetAt);
        return true;
    }
    getBucketKey(request) {
        const routeKey = `${request.method}:${request.path}`;
        const ip = request.ip ?? 'unknown-ip';
        return `${routeKey}:${ip}`;
    }
    setRateLimitHeaders(response, limit, remaining, resetAt) {
        if (!response)
            return;
        response.setHeader('X-RateLimit-Limit', String(limit));
        response.setHeader('X-RateLimit-Remaining', String(remaining));
        response.setHeader('X-RateLimit-Reset', String(Math.floor(resetAt / 1_000)));
    }
    pruneExpiredBuckets(now) {
        this.requestCount += 1;
        if (this.requestCount % PRUNE_EVERY_N_REQUESTS !== 0)
            return;
        for (const [key, bucket] of this.buckets.entries()) {
            if (bucket.resetAt <= now) {
                this.buckets.delete(key);
            }
        }
    }
};
exports.RateLimitGuard = RateLimitGuard;
exports.RateLimitGuard = RateLimitGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RateLimitGuard);
//# sourceMappingURL=rate-limit.guard.js.map