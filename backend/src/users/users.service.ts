import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import type { CreateOperatorDto } from './dto/create-operator.dto';
import type { UpdateOperatorDto } from './dto/update-operator.dto';

const SALT_ROUNDS = 10;

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  create(data: { email: string; password: string; name: string; role?: Role }) {
    return this.prisma.user.create({ data });
  }

  listOperators() {
    return this.prisma.user.findMany({
      where: { role: Role.OPERATOR },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
    });
  }

  async createOperator(dto: CreateOperatorDto) {
    const existing = await this.findByEmail(dto.email);
    if (existing) {
      throw new ConflictException('Email already in use');
    }

    const password = await bcrypt.hash(dto.password, SALT_ROUNDS);

    return this.prisma.user.create({
      data: {
        email: dto.email,
        password,
        name: dto.name,
        role: Role.OPERATOR,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async updateOperator(id: string, dto: UpdateOperatorDto) {
    const existing = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, role: true },
    });

    if (!existing || existing.role !== Role.OPERATOR) {
      throw new NotFoundException('Operator not found');
    }

    if (dto.email) {
      const conflict = await this.findByEmail(dto.email);
      if (conflict && conflict.id !== id) {
        throw new ConflictException('Email already in use');
      }
    }

    const data: { email?: string; name?: string; password?: string } = {};
    if (dto.email) data.email = dto.email;
    if (dto.name) data.name = dto.name;
    if (dto.password)
      data.password = await bcrypt.hash(dto.password, SALT_ROUNDS);

    if (Object.keys(data).length === 0) {
      throw new BadRequestException('No update fields provided');
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async deleteOperator(id: string) {
    const existing = await this.prisma.user.findUnique({
      where: { id },
      select: { id: true, role: true },
    });

    if (!existing || existing.role !== Role.OPERATOR) {
      throw new NotFoundException('Operator not found');
    }

    await this.prisma.user.delete({ where: { id } });
    return { success: true };
  }
}
