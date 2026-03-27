import { memo } from 'react';
import type { VisaApplicationStatus } from '@/types/visa-application';

const BADGE_CLASS: Record<VisaApplicationStatus, string> = {
  SUBMITTED: 'badge-primary',
  UNDER_REVIEW: 'badge-warning',
  DOCS_REQUIRED: 'badge-error',
  APPROVED: 'badge-success',
  REJECTED: 'badge-neutral',
};

export const StatusBadge = memo(function StatusBadge({
  status,
}: {
  status: VisaApplicationStatus;
}) {
  return (
    <span className={`badge badge-sm font-medium ${BADGE_CLASS[status]}`}>
      {status.replaceAll('_', ' ')}
    </span>
  );
});
