import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RateLimit } from '../common/decorators/rate-limit.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @RateLimit({ limit: 5, windowMs: 60_000 })
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @RateLimit({ limit: 10, windowMs: 60_000 })
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
