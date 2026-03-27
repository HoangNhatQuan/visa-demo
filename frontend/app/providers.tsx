"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { AuthProvider } from "@/contexts/auth-context";
import { ToastProvider } from "@/contexts/toast-context";
import { Toaster } from "@/components/Toaster";

const FIVE_MINUTES = 5 * 60 * 1_000;
const THIRTY_SECONDS = 30 * 1_000;
const MAX_QUERY_RETRIES = 2;
const BASE_RETRY_DELAY_MS = 500;

function shouldRetryQuery(failureCount: number, error: unknown): boolean {
  if (failureCount >= MAX_QUERY_RETRIES) return false;
  const status =
    typeof error === "object" && error !== null && "status" in error
      ? Number((error as { status?: number }).status)
      : undefined;

  return (
    status === undefined || status === 408 || status === 429 || status >= 500
  );
}

function retryDelayWithBackoff(attemptIndex: number): number {
  return Math.min(BASE_RETRY_DELAY_MS * 2 ** attemptIndex, 5_000);
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: THIRTY_SECONDS,
            gcTime: FIVE_MINUTES,
            refetchOnWindowFocus: false,
            refetchOnMount: true,
            retry: shouldRetryQuery,
            retryDelay: retryDelayWithBackoff,
          },
          mutations: { retry: false },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ToastProvider>
          {children}
          <Toaster />
        </ToastProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
