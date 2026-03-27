import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ConflictException,
  ExceptionFilter,
  NotFoundException,
} from '@nestjs/common';
import type { Response } from 'express';
import { Prisma } from '@prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter<Prisma.PrismaClientKnownRequestError> {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let mappedError:
      | BadRequestException
      | ConflictException
      | NotFoundException = new BadRequestException('Database request failed');

    if (exception.code === 'P2002') {
      const targetMeta = exception.meta?.target;
      const target =
        typeof targetMeta === 'string'
          ? targetMeta
          : Array.isArray(targetMeta) &&
              targetMeta.every((entry) => typeof entry === 'string')
            ? targetMeta.join(',')
            : '';
      mappedError = target.includes('email')
        ? new ConflictException('Email already in use')
        : new ConflictException('Resource already exists');
    } else if (exception.code === 'P2025') {
      mappedError = new NotFoundException('Resource not found');
    } else if (exception.code === 'P2003') {
      mappedError = new BadRequestException('Invalid relation reference');
    }

    const status = mappedError.getStatus();
    const body = mappedError.getResponse();
    response.status(status).json(body);
  }
}
