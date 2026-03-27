"use client";

import { memo, useMemo, useState } from "react";
import { ErrorMessage } from "@/components/ErrorMessage";
import { STATUS_TRANSITIONS, STATUS_VALUES } from "@/types/visa-application";
import type { VisaApplicationStatus } from "@/types/visa-application";

interface Props {
  currentStatus: VisaApplicationStatus;
  isPending: boolean;
  error: string | null;
  onUpdate: (status: VisaApplicationStatus) => void;
}

export const StatusUpdater = memo(function StatusUpdater({
  currentStatus,
  isPending,
  error,
  onUpdate,
}: Props) {
  const [selected, setSelected] =
    useState<VisaApplicationStatus>(currentStatus);

  // Memoised: only recomputes when currentStatus changes (not on every render)
  const allowed = useMemo(
    () => [currentStatus, ...(STATUS_TRANSITIONS[currentStatus] ?? [])],
    [currentStatus],
  );

  const isDirty = selected !== currentStatus;

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-base">Update Status</h2>

        {error ? <ErrorMessage message={error} /> : null}

        <div className="flex flex-wrap gap-3 items-end mt-2">
          <div className="form-control">
            <label className="label pt-0">
              <span className="label-text font-medium">New Status</span>
            </label>
            <select
              className="select select-bordered select-sm w-52"
              value={selected}
              onChange={(e) =>
                setSelected(e.target.value as VisaApplicationStatus)
              }
              disabled={isPending}
            >
              {STATUS_VALUES.map((s) => (
                <option key={s} value={s} disabled={!allowed.includes(s)}>
                  {s.replaceAll("_", " ")}
                </option>
              ))}
            </select>
          </div>

          <button
            className="btn btn-primary btn-sm text-white"
            disabled={!isDirty || isPending}
            onClick={() => {
              if (isPending || !isDirty) return;
              onUpdate(selected);
            }}
          >
            {isPending && (
              <span className="loading loading-spinner loading-xs" />
            )}
            {isPending ? "Saving..." : "Save Status"}
          </button>
        </div>
      </div>
    </div>
  );
});
