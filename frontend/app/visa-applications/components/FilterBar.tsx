"use client";

import { memo } from "react";
import { STATUS_VALUES } from "@/types/visa-application";
import type { VisaApplicationStatus } from "@/types/visa-application";

export interface FilterState {
  q: string;
  status: VisaApplicationStatus | "";
  limit: number;
}

interface Props {
  filters: FilterState;
  onFilterChange: <K extends keyof FilterState>(
    key: K,
    value: FilterState[K],
  ) => void;
}

export const FilterBar = memo(function FilterBar({
  filters,
  onFilterChange,
}: Props) {
  return (
    <div className="card bg-base-100 shadow-sm mb-6">
      <div className="card-body p-4">
        <div className="flex flex-wrap gap-4 items-end">
          <div className="form-control">
            <label className="label pt-0">
              <span className="label-text font-medium">Search</span>
            </label>
            <input
              type="text"
              className="input input-bordered input-sm w-64"
              value={filters.q}
              onChange={(e) => onFilterChange("q", e.target.value)}
              placeholder="Name or email..."
            />
          </div>

          <div className="form-control">
            <label className="label pt-0">
              <span className="label-text font-medium">Status</span>
            </label>
            <select
              className="select select-bordered select-sm w-44"
              value={filters.status}
              onChange={(e) =>
                onFilterChange(
                  "status",
                  e.target.value as VisaApplicationStatus | "",
                )
              }
            >
              <option value="">All statuses</option>
              {STATUS_VALUES.map((s) => (
                <option key={s} value={s}>
                  {s.replaceAll("_", " ")}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className="label pt-0">
              <span className="label-text font-medium">Per page</span>
            </label>
            <select
              className="select select-bordered select-sm w-24"
              value={filters.limit}
              onChange={(e) => onFilterChange("limit", Number(e.target.value))}
            >
              {[10, 20, 50].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
});
