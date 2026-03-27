import { memo } from "react";

interface Props {
  page: number;
  totalPages: number;
  disabled?: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export const Pagination = memo(function Pagination({
  page,
  totalPages,
  disabled,
  onPrev,
  onNext,
}: Props) {
  const total = Math.max(1, totalPages);
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        className="btn btn-sm btn-ghost"
        disabled={disabled || page <= 1}
        onClick={onPrev}
      >
        ← Previous
      </button>

      <span className="text-sm text-base-content/60">
        Page <strong>{page}</strong> of <strong>{total}</strong>
      </span>

      <button
        className="btn btn-sm btn-ghost"
        disabled={disabled || page >= total}
        onClick={onNext}
      >
        Next →
      </button>
    </div>
  );
});
