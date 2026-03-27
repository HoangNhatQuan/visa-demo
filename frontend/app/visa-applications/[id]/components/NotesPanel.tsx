"use client";

import { memo, useCallback, useState } from "react";
import { ErrorMessage } from "@/components/ErrorMessage";
import { formatDateTime } from "@/lib/format";
import type { AddNoteParams } from "@/services/visa-applications";
import type { VisaApplicationNote } from "@/types/visa-application";

// Defined outside NotesPanel so React never sees it as a "new" component type
// between renders — prevents unnecessary unmount/remount of note DOM nodes.
const NoteItem = memo(function NoteItem({
  note,
}: {
  note: VisaApplicationNote;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center pt-1.5">
        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
        <div className="w-px flex-1 bg-base-300 mt-1" />
      </div>
      <div className="pb-5 flex-1 min-w-0">
        <div className="flex items-baseline gap-2 mb-1 flex-wrap">
          <span className="font-semibold text-sm">{note.author.name}</span>
          <span className="badge badge-ghost badge-xs">{note.author.role}</span>
          <span className="text-xs text-base-content/50">
            {formatDateTime(note.createdAt)}
          </span>
        </div>
        <p className="text-sm whitespace-pre-wrap break-words">
          {note.content}
        </p>
      </div>
    </div>
  );
});

interface Props {
  notes: VisaApplicationNote[];
  isPending: boolean;
  error: string | null;
  onAdd: (params: AddNoteParams) => void;
}

export const NotesPanel = memo(function NotesPanel({
  notes,
  isPending,
  error,
  onAdd,
}: Props) {
  const [content, setContent] = useState("");

  const handleSubmit = useCallback(() => {
    if (isPending) return;
    if (!content.trim()) return;
    onAdd({ content });
    setContent("");
  }, [content, isPending, onAdd]);

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-base">Notes</h2>

        {notes.length > 0 ? (
          <div className="mt-3">
            {notes.map((n) => (
              <NoteItem key={n.id} note={n} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-base-content/50 mt-2">No notes yet.</p>
        )}

        <div className="divider text-xs">Add Note</div>

        {error ? <ErrorMessage message={error} /> : null}

        <div className="form-control">
          <label className="label pt-0">
            <span className="label-text font-medium">Content</span>
          </label>
          <textarea
            className="textarea textarea-bordered text-sm leading-normal"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isPending}
            placeholder="Write a note..."
          />
        </div>

        <div className="mt-2">
          <button
            className="btn btn-primary btn-sm text-white"
            disabled={!content.trim() || isPending}
            onClick={handleSubmit}
          >
            {isPending && (
              <span className="loading loading-spinner loading-xs" />
            )}
            {isPending ? "Adding..." : "Add Note"}
          </button>
        </div>
      </div>
    </div>
  );
});
