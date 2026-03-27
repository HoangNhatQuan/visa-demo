import axios from "axios";
import { config } from "@/config/env";
import { clearToken, getToken } from "@/lib/auth";

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
  error?: string;
}

export interface ApiErrorResponse {
  statusCode: number;
  message: string;
  data: null;
  error?: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    public readonly code?: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

const TEN_SECONDS = 10_000;
export const http = axios.create({
  baseURL: config.apiUrl,
  timeout: TEN_SECONDS,
  headers: { "Content-Type": "application/json" },
});

http.interceptors.request.use((reqConfig) => {
  const token = getToken();
  if (token) {
    reqConfig.headers.Authorization = `Bearer ${token}`;
  }
  return reqConfig;
});

http.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        clearToken();
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
      const apiError = error.response?.data as ApiErrorResponse | undefined;
      const message =
        apiError?.message ??
        error.message ??
        "An unexpected error occurred";
      return Promise.reject(
        new ApiError(
          message,
          apiError?.statusCode ?? error.response?.status,
          apiError?.error,
        ),
      );
    }
    return Promise.reject(error);
  },
);
