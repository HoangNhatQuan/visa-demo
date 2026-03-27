"use client";

import { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/contexts/toast-context";
import { queryKeys } from "@/hooks/queryKeys";
import {
  visaApplicationsService,
  type CreateApplicationParams,
} from "@/services/visa-applications";

// Computed once at module load, not on every render
const TOMORROW = new Date(Date.now() + 86_400_000).toISOString().split("T")[0];

const INITIAL: CreateApplicationParams = {
  applicantName: "",
  email: "",
  nationality: "",
  destinationCountry: "",
  visaType: "",
  travelDate: "",
};

export function CreateApplicationModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<CreateApplicationParams>(INITIAL);
  const toast = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => visaApplicationsService.create(form),
    onSuccess: () => {
      toast.success("Application created");
      queryClient.invalidateQueries({
        queryKey: queryKeys.visaApplications.lists(),
      });
      onClose();
    },
    onError: (err: Error) => toast.error(err.message),
  });

  const set = useCallback(
    (field: keyof CreateApplicationParams, value: string) =>
      setForm((prev) => ({ ...prev, [field]: value })),
    [],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (mutation.isPending) return;
      mutation.mutate();
    },
    [mutation],
  );

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-lg">
        <h3 className="font-bold text-lg mb-4">New Visa Application</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="form-control">
              <label className="label pt-0">
                <span className="label-text">Full Name</span>
              </label>
              <input
                className="input input-bordered input-sm"
                value={form.applicantName}
                onChange={(e) => set("applicantName", e.target.value)}
                required
                disabled={mutation.isPending}
              />
            </div>
            <div className="form-control">
              <label className="label pt-0">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered input-sm"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                required
                disabled={mutation.isPending}
              />
            </div>
            <div className="form-control">
              <label className="label pt-0">
                <span className="label-text">Nationality</span>
              </label>
              <input
                className="input input-bordered input-sm"
                value={form.nationality}
                onChange={(e) => set("nationality", e.target.value)}
                required
                disabled={mutation.isPending}
              />
            </div>
            <div className="form-control">
              <label className="label pt-0">
                <span className="label-text">Destination Country</span>
              </label>
              <input
                className="input input-bordered input-sm"
                value={form.destinationCountry}
                onChange={(e) => set("destinationCountry", e.target.value)}
                required
                disabled={mutation.isPending}
              />
            </div>
            <div className="form-control">
              <label className="label pt-0">
                <span className="label-text">Visa Type</span>
              </label>
              <input
                className="input input-bordered input-sm"
                value={form.visaType}
                onChange={(e) => set("visaType", e.target.value)}
                placeholder="Tourist, Work, Student..."
                required
                disabled={mutation.isPending}
              />
            </div>
            <div className="form-control">
              <label className="label pt-0">
                <span className="label-text">Travel Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered input-sm"
                value={form.travelDate}
                onChange={(e) => set("travelDate", e.target.value)}
                min={TOMORROW}
                required
                disabled={mutation.isPending}
              />
            </div>
          </div>

          {mutation.error && (
            <div className="alert alert-error text-sm py-2">
              <span>{(mutation.error as Error).message}</span>
            </div>
          )}

          <div className="modal-action pt-2">
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={onClose}
              disabled={mutation.isPending}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-sm text-white"
              disabled={mutation.isPending}
            >
              {mutation.isPending && (
                <span className="loading loading-spinner loading-xs" />
              )}
              Create
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={onClose} aria-label="close" />
      </form>
    </dialog>
  );
}
