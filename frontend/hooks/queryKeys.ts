import type { ListParams } from '@/services/visa-applications';

export const queryKeys = {
  visaApplications: {
    all: () => ['visa-applications'] as const,
    lists: () => ['visa-applications', 'list'] as const,
    list: (params: ListParams) =>
      ['visa-applications', 'list', params] as const,
    details: () => ['visa-applications', 'detail'] as const,
    detail: (id: string) => ['visa-applications', 'detail', id] as const,
  },
  users: {
    all: () => ['users'] as const,
  },
};
