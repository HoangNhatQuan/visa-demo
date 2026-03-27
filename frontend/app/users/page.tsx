"use client";

import { useCallback, useState } from "react";
import { ErrorMessage } from "@/components/ErrorMessage";
import { useDeleteUser, useUsers } from "@/hooks/useUsers";
import { CreateUserModal } from "./components/CreateUserModal";
import { UsersTable } from "./components/UsersTable";

export default function UsersPage() {
  const [showCreate, setShowCreate] = useState(false);
  const { data: users, isLoading, error } = useUsers();
  const deleteUser = useDeleteUser();

  const openCreate = useCallback(() => setShowCreate(true), []);
  const closeCreate = useCallback(() => setShowCreate(false), []);

  const handleDelete = useCallback(
    (id: string) => {
      if (deleteUser.isPending) return;
      deleteUser.mutate(id);
    },
    [deleteUser],
  );

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button
          className="btn btn-primary btn-sm text-white"
          onClick={openCreate}
        >
          + New Operator
        </button>
      </div>

      {error ? <ErrorMessage message={(error as Error).message} /> : null}

      <UsersTable
        users={users ?? []}
        loading={isLoading}
        onDelete={handleDelete}
        isDeleting={deleteUser.isPending}
      />

      {showCreate && <CreateUserModal onClose={closeCreate} />}
    </>
  );
}
