import { VisaApplicationStatus } from '@prisma/client';
export declare class ListVisaApplicationsQueryDto {
    q?: string;
    status?: VisaApplicationStatus;
    page: number;
    limit: number;
}
