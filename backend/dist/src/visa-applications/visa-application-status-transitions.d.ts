import { VisaApplicationStatus } from '@prisma/client';
export declare const VISA_APPLICATION_STATUS_TRANSITIONS: Record<VisaApplicationStatus, VisaApplicationStatus[]>;
export declare function isValidStatusTransition(from: VisaApplicationStatus, to: VisaApplicationStatus): boolean;
