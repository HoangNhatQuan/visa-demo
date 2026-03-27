import { type ApiResponse, http } from "./http";

export interface AuthResponse {
  accessToken: string;
}

export const authService = {
  login: (email: string, password: string) =>
    http
      .post<ApiResponse<AuthResponse>>("/auth/login", { email, password })
      .then((r) => r.data.data),

  register: (name: string, email: string, password: string) =>
    http
      .post<ApiResponse<AuthResponse>>("/auth/register", {
        name,
        email,
        password,
      })
      .then((r) => r.data.data),
};
