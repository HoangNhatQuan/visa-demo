"use client";

import { useCallback, useState } from "react";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Pagination } from "@/components/Pagination";
import { useAuth } from "@/contexts/auth-context";
import { useDebounce } from "@/hooks/useDebounce";
import { useVisaApplications } from "@/hooks/useVisaApplications";
import { ApplicationsTable } from "./components/ApplicationsTable";
import { CreateApplicationModal } from "./components/CreateApplicationModal";
import { FilterBar, type FilterState } from "./components/FilterBar";

export default function VisaApplicationsPage() {
  const [filters, setFilters] = useState<FilterState>({
    q: "",
    status: "",
    limit: 10,
  });
  const [page, setPage] = useState(1);
  const [showCreate, setShowCreate] = useState(false);
  const { user } = useAuth();
  const qDebounced = useDebounce(filters.q, 500);

  const setFilter = useCallback(
    <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
      setPage(1);
    },
    [setFilters, setPage],
  );

  const handlePrev = useCallback(
    () => setPage((p) => Math.max(1, p - 1)),
    [setPage],
  );

  const openCreate = useCallback(() => setShowCreate(true), []);
  const closeCreate = useCallback(() => setShowCreate(false), []);

  const { data, isLoading, isFetching, error } = useVisaApplications({
    q: qDebounced || undefined,
    status: filters.status || undefined,
    page,
    limit: filters.limit,
  });
  const totalPages = data?.totalPages ?? 1;

  const handleNext = useCallback(
    () => setPage((p) => Math.min(totalPages, p + 1)),
    [setPage, totalPages],
  );

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Visa Applications</h1>
        {user?.role === "ADMIN" && (
          <button
            className="btn btn-primary btn-sm text-white"
            onClick={openCreate}
          >
            + New Application
          </button>
        )}
      </div>

      <FilterBar filters={filters} onFilterChange={setFilter} />

      {error ? <ErrorMessage message={(error as Error).message} /> : null}

      <ApplicationsTable items={data?.items ?? []} loading={isLoading} />

      <Pagination
        page={page}
        totalPages={totalPages}
        disabled={isFetching}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {showCreate && <CreateApplicationModal onClose={closeCreate} />}
    </>
  );
}
