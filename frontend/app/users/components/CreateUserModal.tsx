"use client";

import { useCallback, useState } from "react";
import { useCreateUser } from "@/hooks/useUsers";
import type { CreateOperatorDto } from "@/services/users";

export function CreateUserModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<CreateOperatorDto>({
    name: "",
    email: "",
    password: "",
  });
  const mutation = useCreateUser();

  const set = useCallback(
    (field: keyof CreateOperatorDto, value: string) =>
      setForm((prev) => ({ ...prev, [field]: value })),
    [],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (mutation.isPending) return;
      mutation.mutate(form, { onSuccess: () => onClose() });
    },
    [mutation, form, onClose],
  );

  return (
    <dialog className="modal modal-open">
      <div className="modal-box max-w-sm">
        <h3 className="font-bold text-lg mb-4">New Operator</h3>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="form-control">
            <label className="label pt-0">
              <span className="label-text">Name</span>
            </label>
            <input
              className="input input-bordered input-sm"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              required
              disabled={mutation.isPending}
              autoFocus
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered input-sm"
              value={form.password}
              onChange={(e) => set("password", e.target.value)}
              required
              minLength={6}
              placeholder="Min. 6 characters"
              disabled={mutation.isPending}
            />
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
