"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisaApplicationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const visa_application_status_transitions_1 = require("./visa-application-status-transitions");
let VisaApplicationsService = class VisaApplicationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createApplication(dto) {
        if (dto.travelDate <= new Date()) {
            throw new common_1.BadRequestException('travelDate must be a future date');
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
    async listApplications(query) {
        const where = {};
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
    async getApplicationDetail(id) {
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
            throw new common_1.NotFoundException(`Visa application ${id} not found`);
        }
        return application;
    }
    async updateApplicationStatus(id, dto) {
        const existing = await this.prisma.visaApplication.findUnique({
            where: { id },
            select: { id: true, status: true },
        });
        if (!existing) {
            throw new common_1.NotFoundException(`Visa application ${id} not found`);
        }
        this.ensureStatusTransition(existing.status, dto.status);
        return this.prisma.visaApplication.update({
            where: { id },
            data: { status: dto.status },
        });
    }
    async addNote(id, dto, authorId) {
        const existing = await this.prisma.visaApplication.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!existing) {
            throw new common_1.NotFoundException(`Visa application ${id} not found`);
        }
        return this.prisma.visaApplicationNote.create({
            data: { applicationId: id, authorId, content: dto.content },
        });
    }
    ensureStatusTransition(from, to) {
        if (!(0, visa_application_status_transitions_1.isValidStatusTransition)(from, to)) {
            throw new common_1.BadRequestException(`Invalid status transition from ${from} to ${to}`);
        }
    }
};
exports.VisaApplicationsService = VisaApplicationsService;
exports.VisaApplicationsService = VisaApplicationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VisaApplicationsService);
//# sourceMappingURL=visa-applications.service.js.map