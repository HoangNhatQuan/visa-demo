import { PrismaService } from '../prisma/prisma.service';
import { CreateVisaApplicationDto } from './dto/create-visa-application.dto';
import { CreateVisaApplicationNoteDto } from './dto/create-visa-application-note.dto';
import { ListVisaApplicationsQueryDto } from './dto/list-visa-applications-query.dto';
import { UpdateVisaApplicationStatusDto } from './dto/update-visa-application-status.dto';
export declare class VisaApplicationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createApplication(dto: CreateVisaApplicationDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        applicantName: string;
        nationality: string;
        destinationCountry: string;
        visaType: string;
        travelDate: Date;
        status: import("@prisma/client").$Enums.VisaApplicationStatus;
        updatedAt: Date;
    }>;
    listApplications(query: ListVisaApplicationsQueryDto): Promise<{
        items: {
            id: string;
            email: string;
            createdAt: Date;
            applicantName: string;
            nationality: string;
            destinationCountry: string;
            visaType: string;
            travelDate: Date;
            status: import("@prisma/client").$Enums.VisaApplicationStatus;
            updatedAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getApplicationDetail(id: string): Promise<{
        notes: ({
            author: {
                id: string;
                email: string;
                name: string;
                role: import("@prisma/client").$Enums.Role;
            };
        } & {
            id: string;
            createdAt: Date;
            content: string;
            applicationId: string;
            authorId: string;
        })[];
    } & {
        id: string;
        email: string;
        createdAt: Date;
        applicantName: string;
        nationality: string;
        destinationCountry: string;
        visaType: string;
        travelDate: Date;
        status: import("@prisma/client").$Enums.VisaApplicationStatus;
        updatedAt: Date;
    }>;
    updateApplicationStatus(id: string, dto: UpdateVisaApplicationStatusDto): Promise<{
        id: string;
        email: string;
        createdAt: Date;
        applicantName: string;
        nationality: string;
        destinationCountry: string;
        visaType: string;
        travelDate: Date;
        status: import("@prisma/client").$Enums.VisaApplicationStatus;
        updatedAt: Date;
    }>;
    addNote(id: string, dto: CreateVisaApplicationNoteDto, authorId: string): Promise<{
        id: string;
        createdAt: Date;
        content: string;
        applicationId: string;
        authorId: string;
    }>;
    private ensureStatusTransition;
}
