'use client';

import { memo } from 'react';
import { formatDate } from '@/lib/format';
import type { User } from '@/types/user';

interface Props {
  users: User[];
  loading: boolean;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}

export const UsersTable = memo(function UsersTable({
  users,
  loading,
  onDelete,
  isDeleting,
}: Props) {
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
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="font-medium">{user.name}</td>
                <td className="text-sm">{user.email}</td>
                <td>
                  <span
                    className={`badge badge-sm font-medium ${
                      user.role === 'ADMIN' ? 'badge-primary' : 'badge-ghost'
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="text-sm text-base-content/60">
                  {formatDate(user.createdAt)}
                </td>
                <td>
                  {user.role !== 'ADMIN' && (
                    <button
                      className="btn btn-xs btn-ghost text-error"
                      disabled={isDeleting}
                      onClick={() => onDelete(user.id)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="text-center py-14 text-base-content/40"
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
});
