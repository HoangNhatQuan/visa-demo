import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ConflictException,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import type { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const normalized = this.normalizeException(exception);
    const payload = {
      statusCode: normalized.status,
      error: normalized.code,
      message: normalized.message,
      data: null,
    };

    response.status(normalized.status).json(payload);
  }

  private normalizeException(exception: unknown): {
    status: number;
    code: string;
    message: string;
  } {
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      const mapped = this.mapPrismaException(exception);
      return this.normalizeException(mapped);
    }

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const body = exception.getResponse();

      if (typeof body === 'string') {
        return {
          status,
          code: this.getCodeFromStatus(status),
          message: body,
        };
      }

      if (this.isHttpErrorBody(body)) {
        return {
          status,
          code: body.error ?? this.getCodeFromStatus(status),
          message: this.toMessageString(body.message),
        };
      }

      return {
        status,
        code: this.getCodeFromStatus(status),
        message: exception.message,
      };
    }

    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal server error',
    };
  }

  private mapPrismaException(
    exception: Prisma.PrismaClientKnownRequestError,
  ): HttpException {
    if (exception.code === 'P2002') {
      const targetMeta = exception.meta?.target;
      const target =
        typeof targetMeta === 'string'
          ? targetMeta
          : Array.isArray(targetMeta) &&
              targetMeta.every((entry) => typeof entry === 'string')
            ? targetMeta.join(',')
            : '';
      return target.includes('email')
        ? new ConflictException('Email already in use')
        : new ConflictException('Resource already exists');
    }

    if (exception.code === 'P2025') {
      return new NotFoundException('Resource not found');
    }

    if (exception.code === 'P2003') {
      return new BadRequestException('Invalid relation reference');
    }

    return new BadRequestException('Database request failed');
  }

  private getCodeFromStatus(status: number): string {
    switch (status) {
      case 400:
        return 'BAD_REQUEST';
      case 401:
        return 'UNAUTHORIZED';
      case 403:
        return 'FORBIDDEN';
      case 404:
        return 'NOT_FOUND';
      case 409:
        return 'CONFLICT';
      case 429:
        return 'TOO_MANY_REQUESTS';
      default:
        return 'HTTP_ERROR';
    }
  }

  private isHttpErrorBody(
    value: unknown,
  ): value is { message: string | string[]; error?: string } {
    if (typeof value !== 'object' || value === null) return false;
    return 'message' in value;
  }

  private toMessageString(message: string | string[]): string {
    if (Array.isArray(message)) {
      return message.join('; ');
    }
    return message;
  }
}
