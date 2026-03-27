import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import type { JwtPayload } from '../auth.service';
import { JwtStrategy } from '../jwt.strategy';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtStrategy: JwtStrategy) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<Request & { user: JwtPayload }>();
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException('Missing auth token');
    }

    const payload = await this.jwtStrategy.verifyToken(token);
    request.user = payload;

    return true;
  }

  private extractToken(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
