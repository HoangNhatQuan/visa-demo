import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class RateLimitGuard implements CanActivate {
    private readonly reflector;
    private readonly buckets;
    private requestCount;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
    private getBucketKey;
    private setRateLimitHeaders;
    private pruneExpiredBuckets;
}
