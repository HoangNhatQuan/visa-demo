import { VisaApplicationStatus } from '@prisma/client';

export const VISA_APPLICATION_STATUS_TRANSITIONS: Record<
  VisaApplicationStatus,
  VisaApplicationStatus[]
> = {
  SUBMITTED: ['UNDER_REVIEW', 'DOCS_REQUIRED', 'REJECTED'],
  UNDER_REVIEW: ['DOCS_REQUIRED', 'APPROVED', 'REJECTED'],
  DOCS_REQUIRED: ['UNDER_REVIEW', 'APPROVED', 'REJECTED'],
  APPROVED: [],
  REJECTED: [],
};

export function isValidStatusTransition(
  from: VisaApplicationStatus,
  to: VisaApplicationStatus,
) {
  if (from === to) return true;
  return VISA_APPLICATION_STATUS_TRANSITIONS[from].includes(to);
}
