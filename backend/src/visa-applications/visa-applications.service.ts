import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, VisaApplicationStatus } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVisaApplicationDto } from './dto/create-visa-application.dto';
import { CreateVisaApplicationNoteDto } from './dto/create-visa-application-note.dto';
import { ListVisaApplicationsQueryDto } from './dto/list-visa-applications-query.dto';
import { UpdateVisaApplicationStatusDto } from './dto/update-visa-application-status.dto';
import { isValidStatusTransition } from './visa-application-status-transitions';

@Injectable()
export class VisaApplicationsService {
  constructor(private readonly prisma: PrismaService) {}

  async createApplication(dto: CreateVisaApplicationDto) {
    if (dto.travelDate <= new Date()) {
      throw new BadRequestException('travelDate must be a future date');
    }

    return this.prisma.visaApplication.create({
      data: {
        applicantName: dto.applicantName,
        email: dto.email,
        nationality: dto.nationality,
        destinationCountry: dto.destinationCountry,
        visaType: dto.visaType,
        travelDate: dto.travelDate,
      },
    });
  }

  async listApplications(query: ListVisaApplicationsQueryDto) {
    const where: Prisma.VisaApplicationWhereInput = {};

    if (query.status) {
      where.status = query.status;
    }

    if (query.q && query.q.length >= 2) {
      where.OR = [
        { applicantName: { contains: query.q, mode: 'insensitive' } },
        { email: { contains: query.q, mode: 'insensitive' } },
      ];
    }

    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;

    const [total, items] = await Promise.all([
      this.prisma.visaApplication.count({ where }),
      this.prisma.visaApplication.findMany({
        where,
        skip,
        take: limit,
        orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      }),
    ]);

    return { items, total, page, limit, totalPages: Math.ceil(total / limit) };
  }

  async getApplicationDetail(id: string) {
    const application = await this.prisma.visaApplication.findUnique({
      where: { id },
      include: {
        notes: {
          orderBy: { createdAt: 'desc' },
          include: {
            author: {
              select: { id: true, name: true, email: true, role: true },
            },
          },
        },
      },
    });

    if (!application) {
      throw new NotFoundException(`Visa application ${id} not found`);
    }

    return application;
  }

  async updateApplicationStatus(
    id: string,
    dto: UpdateVisaApplicationStatusDto,
  ) {
    const existing = await this.prisma.visaApplication.findUnique({
      where: { id },
      select: { id: true, status: true },
    });

    if (!existing) {
      throw new NotFoundException(`Visa application ${id} not found`);
    }

    this.ensureStatusTransition(existing.status, dto.status);

    return this.prisma.visaApplication.update({
      where: { id },
      data: { status: dto.status },
    });
  }

  async addNote(
    id: string,
    dto: CreateVisaApplicationNoteDto,
    authorId: string,
  ) {
    const existing = await this.prisma.visaApplication.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!existing) {
      throw new NotFoundException(`Visa application ${id} not found`);
    }

    return this.prisma.visaApplicationNote.create({
      data: { applicationId: id, authorId, content: dto.content },
    });
  }

  private ensureStatusTransition(
    from: VisaApplicationStatus,
    to: VisaApplicationStatus,
  ) {
    if (!isValidStatusTransition(from, to)) {
      throw new BadRequestException(
        `Invalid status transition from ${from} to ${to}`,
      );
    }
  }
}
