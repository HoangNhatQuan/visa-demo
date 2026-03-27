import { memo } from "react";
import { StatusBadge } from "@/components/StatusBadge";
import { formatDate, formatDateTime } from "@/lib/format";
import type { VisaApplication } from "@/types/visa-application";

const Field = memo(function Field({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50 mb-1">
        {label}
      </p>
      <p className="text-sm">{value}</p>
    </div>
  );
});

export const ApplicationInfo = memo(function ApplicationInfo({
  application,
}: {
  application: VisaApplication;
}) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title text-base">Applicant Information</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-2">
          <Field label="Full Name" value={application.applicantName} />
          <Field label="Email" value={application.email} />
          <Field label="Nationality" value={application.nationality} />
          <Field label="Destination" value={application.destinationCountry} />
          <Field label="Visa Type" value={application.visaType} />
          <Field
            label="Travel Date"
            value={formatDate(application.travelDate)}
          />
        </div>

        <div className="divider my-2" />

        <div className="flex gap-8 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50 mb-2">
              Status
            </p>
            <StatusBadge status={application.status} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50 mb-1">
              Last Updated
            </p>
            <p className="text-sm">{formatDateTime(application.updatedAt)}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50 mb-1">
              Submitted
            </p>
            <p className="text-sm">{formatDateTime(application.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
});
