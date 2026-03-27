"use client";

import { memo } from "react";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
import { formatDate } from "@/lib/format";
import type { VisaApplication } from "@/types/visa-application";

interface Props {
  items: VisaApplication[];
  loading: boolean;
}

const ApplicationsTableComponent = ({ items, loading }: Props) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  return (
    <div className="card bg-base-100 shadow-sm overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr className="text-base-content/70">
            <th>Applicant</th>
            <th>Email</th>
            <th>Nationality</th>
            <th>Destination</th>
            <th>Visa Type</th>
            <th>Travel Date</th>
            <th>Status</th>
            <th>Created</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((app) => (
              <tr key={app.id} className="hover">
                <td className="font-medium">{app.applicantName}</td>
                <td className="text-sm">{app.email}</td>
                <td>{app.nationality}</td>
                <td>{app.destinationCountry}</td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {app.visaType}
                  </span>
                </td>
                <td className="text-sm">{formatDate(app.travelDate)}</td>
                <td>
                  <StatusBadge status={app.status} />
                </td>
                <td className="text-sm text-base-content/60">
                  {formatDate(app.createdAt)}
                </td>
                <td>
                  <Link
                    href={`/visa-applications/${app.id}`}
                    className="btn btn-xs btn-ghost text-primary"
                  >
                    View →
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={9}
                className="text-center py-14 text-base-content/40"
              >
                No applications found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export const ApplicationsTable = memo(ApplicationsTableComponent);
