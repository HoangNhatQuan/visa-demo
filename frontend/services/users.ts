import { type ApiResponse, http } from "./http";
import type { User } from "@/types/user";

export interface CreateOperatorDto {
  name: string;
  email: string;
  password: string;
}

export interface UpdateOperatorDto {
  name?: string;
  email?: string;
  password?: string;
}

export const usersService = {
  listOperators: () =>
    http.get<ApiResponse<User[]>>("/users/operators").then((r) => r.data.data),

  createOperator: (dto: CreateOperatorDto) =>
    http
      .post<ApiResponse<User>>("/users/operators", dto)
      .then((r) => r.data.data),

  updateOperator: (id: string, dto: UpdateOperatorDto) =>
    http
      .patch<ApiResponse<User>>(`/users/operators/${encodeURIComponent(id)}`, dto)
      .then((r) => r.data.data),

  deleteOperator: (id: string) =>
    http
      .delete<ApiResponse<{ success: boolean }>>(
        `/users/operators/${encodeURIComponent(id)}`,
      )
      .then((r) => r.data.data),
};
