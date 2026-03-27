'use client';

import { useToasts } from '@/contexts/toast-context';

const ALERT_CLASS: Record<string, string> = {
  success: 'alert-success',
  error: 'alert-error',
  info: 'alert-info',
};

export function Toaster() {
  const toasts = useToasts();

  if (toasts.length === 0) return null;

  return (
    <div className="toast toast-top toast-end z-50 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`alert ${ALERT_CLASS[t.type]} shadow-lg pointer-events-auto`}
        >
          <span className="text-sm">{t.message}</span>
        </div>
      ))}
    </div>
  );
}
