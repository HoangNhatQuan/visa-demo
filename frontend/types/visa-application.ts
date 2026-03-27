export type VisaApplicationStatus =
  | 'SUBMITTED'
  | 'UNDER_REVIEW'
  | 'DOCS_REQUIRED'
  | 'APPROVED'
  | 'REJECTED';

export const STATUS_VALUES: VisaApplicationStatus[] = [
  'SUBMITTED',
  'UNDER_REVIEW',
  'DOCS_REQUIRED',
  'APPROVED',
  'REJECTED',
];

export const STATUS_TRANSITIONS: Record<
  VisaApplicationStatus,
  VisaApplicationStatus[]
> = {
  SUBMITTED: ['UNDER_REVIEW', 'DOCS_REQUIRED', 'REJECTED'],
  UNDER_REVIEW: ['DOCS_REQUIRED', 'APPROVED', 'REJECTED'],
  DOCS_REQUIRED: ['UNDER_REVIEW', 'APPROVED', 'REJECTED'],
  APPROVED: [],
  REJECTED: [],
};

export const STATUS_COLOR: Record<VisaApplicationStatus, string> = {
  SUBMITTED: '#6366f1',
  UNDER_REVIEW: '#f59e0b',
  DOCS_REQUIRED: '#ef4444',
  APPROVED: '#10b981',
  REJECTED: '#6b7280',
};

export interface NoteAuthor {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface VisaApplicationNote {
  id: string;
  applicationId: string;
  author: NoteAuthor;
  content: string;
  createdAt: string;
}

export interface VisaApplication {
  id: string;
  applicantName: string;
  email: string;
  nationality: string;
  destinationCountry: string;
  visaType: string;
  travelDate: string;
  status: VisaApplicationStatus;
  createdAt: string;
  updatedAt: string;
  notes?: VisaApplicationNote[];
}

export interface ListVisaApplicationsResponse {
  items: VisaApplication[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
