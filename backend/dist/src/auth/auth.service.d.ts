import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';
import { UsersService } from '../users/users.service';
import type { RegisterDto } from './dto/register.dto';
import type { LoginDto } from './dto/login.dto';
export interface JwtPayload {
    sub: string;
    email: string;
    role: Role;
}
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly failedLogins;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
    }>;
    private signToken;
    private isEmailLocked;
    private registerFailedLogin;
    private clearFailedLogins;
}
