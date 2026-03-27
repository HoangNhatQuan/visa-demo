import { Transform } from 'class-transformer';

interface TrimOptions {
  emptyToUndefined?: boolean;
  toUpperCase?: boolean;
}

export function Trim(options: TrimOptions = {}) {
  const { emptyToUndefined = false, toUpperCase = false } = options;

  return Transform(({ value }: { value: unknown }) => {
    if (typeof value !== 'string') return value;

    const trimmed = value.trim();
    if (!trimmed.length && emptyToUndefined) {
      return undefined;
    }

    return toUpperCase ? trimmed.toUpperCase() : trimmed;
  });
}
