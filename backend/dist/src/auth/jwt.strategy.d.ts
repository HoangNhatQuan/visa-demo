import { JwtService } from '@nestjs/jwt';
import type { JwtPayload } from './auth.service';
export declare class JwtStrategy {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    verifyToken(token: string): Promise<JwtPayload>;
}
