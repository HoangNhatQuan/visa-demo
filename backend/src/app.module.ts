import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { RateLimitGuard } from './common/guards/rate-limit.guard';
import { PrismaModule } from './prisma/prisma.module';
import { VisaApplicationsModule } from './visa-applications/visa-applications.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    VisaApplicationsModule,
  ],
  controllers: [AppController],
  providers: [{ provide: APP_GUARD, useClass: RateLimitGuard }],
})
export class AppModule {}
