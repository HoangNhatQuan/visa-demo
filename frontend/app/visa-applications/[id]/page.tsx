'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ErrorMessage } from '@/components/ErrorMessage';
import {
  useAddNote,
  useUpdateStatus,
  useVisaApplicationDetail,
} from '@/hooks/useVisaApplicationDetail';
import { ApplicationInfo } from './components/ApplicationInfo';
import { NotesPanel } from './components/NotesPanel';
import { StatusUpdater } from './components/StatusUpdater';

export default function VisaApplicationDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: application, isLoading, error } = useVisaApplicationDetail(id);
  const updateStatus = useUpdateStatus(id);
  const addNote = useAddNote(id);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link
          href="/visa-applications"
          className="link link-hover text-sm text-base-content/60"
        >
          ← Back to list
        </Link>
        <h1 className="text-2xl font-bold mt-2">Application Detail</h1>
        <p className="text-xs text-base-content/40 font-mono mt-1">ID: {id}</p>
      </div>

      {error ? <ErrorMessage message={(error as Error).message} /> : null}

      {isLoading ? (
        <div className="flex justify-center py-20">
          <span className="loading loading-spinner loading-lg text-primary" />
        </div>
      ) : application ? (
        <div className="space-y-5">
          <ApplicationInfo application={application} />

          <StatusUpdater
            currentStatus={application.status}
            isPending={updateStatus.isPending}
            error={
              updateStatus.error
                ? (updateStatus.error as Error).message
                : null
            }
            onUpdate={(status) => updateStatus.mutate(status)}
          />

          <NotesPanel
            notes={application.notes ?? []}
            isPending={addNote.isPending}
            error={addNote.error ? (addNote.error as Error).message : null}
            onAdd={(dto) => addNote.mutate(dto)}
          />
        </div>
      ) : null}
    </div>
  );
}
