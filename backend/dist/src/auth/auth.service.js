"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = __importStar(require("bcrypt"));
const client_1 = require("@prisma/client");
const users_service_1 = require("../users/users.service");
const SALT_ROUNDS = 10;
const FAILED_LOGIN_WINDOW_MS = 15 * 60_000;
const MAX_FAILED_LOGINS = 5;
const LOGIN_LOCKOUT_MS = 10 * 60_000;
let AuthService = class AuthService {
    usersService;
    jwtService;
    failedLogins = new Map();
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async register(dto) {
        const existing = await this.usersService.findByEmail(dto.email);
        if (existing) {
            throw new common_1.ConflictException('Email already in use');
        }
        const hashed = await bcrypt.hash(dto.password, SALT_ROUNDS);
        const user = await this.usersService.create({
            email: dto.email,
            password: hashed,
            name: dto.name,
            role: client_1.Role.OPERATOR,
        });
        return this.signToken(user);
    }
    async login(dto) {
        const email = dto.email.trim().toLowerCase();
        if (this.isEmailLocked(email)) {
            throw new common_1.UnauthorizedException('Too many failed attempts. Please try again later.');
        }
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            this.registerFailedLogin(email);
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const valid = await bcrypt.compare(dto.password, user.password);
        if (!valid) {
            this.registerFailedLogin(email);
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        this.clearFailedLogins(email);
        return this.signToken(user);
    }
    async signToken(user) {
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role,
        };
        const accessToken = await this.jwtService.signAsync(payload);
        return { accessToken };
    }
    isEmailLocked(email) {
        const state = this.failedLogins.get(email);
        if (!state || !state.lockedUntil)
            return false;
        if (state.lockedUntil <= Date.now()) {
            this.failedLogins.delete(email);
            return false;
        }
        return true;
    }
    registerFailedLogin(email) {
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
            lockedUntil: attempts >= MAX_FAILED_LOGINS ? now + LOGIN_LOCKOUT_MS : null,
        });
    }
    clearFailedLogins(email) {
        this.failedLogins.delete(email);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map