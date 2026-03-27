import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';
import { UsersService } from '../users/users.service';
import type { RegisterDto } from './dto/register.dto';
import type { LoginDto } from './dto/login.dto';

export interface JwtPayload {
  sub: string;
  email: string;
  role: Role;
}

const SALT_ROUNDS = 10;
const FAILED_LOGIN_WINDOW_MS = 15 * 60_000;
const MAX_FAILED_LOGINS = 5;
const LOGIN_LOCKOUT_MS = 10 * 60_000;

interface FailedLoginState {
  attempts: number;
  firstAttemptAt: number;
  lockedUntil: number | null;
}

@Injectable()
export class AuthService {
  private readonly failedLogins = new Map<string, FailedLoginState>();

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email already in use');
    }

    const hashed = await bcrypt.hash(dto.password, SALT_ROUNDS);
    const user = await this.usersService.create({
      email: dto.email,
      password: hashed,
      name: dto.name,
      role: Role.OPERATOR,
    });

    return this.signToken(user);
  }

  async login(dto: LoginDto) {
    const email = dto.email.trim().toLowerCase();
    if (this.isEmailLocked(email)) {
      throw new UnauthorizedException(
        'Too many failed attempts. Please try again later.',
      );
    }

    const user = await this.usersService.findByEmail(email);
    if (!user) {
      this.registerFailedLogin(email);
      throw new UnauthorizedException('Invalid credentials');
    }

    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) {
      this.registerFailedLogin(email);
      throw new UnauthorizedException('Invalid credentials');
    }

    this.clearFailedLogins(email);
    return this.signToken(user);
  }

  private async signToken(user: { id: string; email: string; role: Role }) {
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }

  private isEmailLocked(email: string): boolean {
    const state = this.failedLogins.get(email);
    if (!state || !state.lockedUntil) return false;

    if (state.lockedUntil <= Date.now()) {
      this.failedLogins.delete(email);
      return false;
    }

    return true;
  }

  private registerFailedLogin(email: string): void {
    const now = Date.now();
    const existing = this.failedLogins.get(email);

    if (!existing || now - existing.firstAttemptAt > FAILED_LOGIN_WINDOW_MS) {
      this.failedLogins.set(email, {
        attempts: 1,
        firstAttemptAt: now,
        lockedUntil: null,
      });
      return;
    }

    const attempts = existing.attempts + 1;
    this.failedLogins.set(email, {
      attempts,
      firstAttemptAt: existing.firstAttemptAt,
      lockedUntil:
        attempts >= MAX_FAILED_LOGINS ? now + LOGIN_LOCKOUT_MS : null,
    });
  }

  private clearFailedLogins(email: string): void {
    this.failedLogins.delete(email);
  }
}
