import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  usersService,
  type CreateOperatorDto,
  type UpdateOperatorDto,
} from "@/services/users";
import { useToast } from "@/contexts/toast-context";
import { queryKeys } from "./queryKeys";

const FIVE_MINUTES = 5 * 60 * 1_000;

export function useUsers() {
  return useQuery({
    queryKey: queryKeys.users.all(),
    queryFn: () => usersService.listOperators(),
    staleTime: FIVE_MINUTES,
    refetchOnWindowFocus: false,
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (dto: CreateOperatorDto) => usersService.createOperator(dto),
    onSuccess: () => {
      toast.success("Operator created");
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all() });
    },
    onError: (err: Error) => toast.error(err.message),
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: ({ id, dto }: { id: string; dto: UpdateOperatorDto }) =>
      usersService.updateOperator(id, dto),
    onSuccess: () => {
      toast.success("User updated");
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all() });
    },
    onError: (err: Error) => toast.error(err.message),
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (id: string) => usersService.deleteOperator(id),
    onSuccess: () => {
      toast.success("User deleted");
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all() });
    },
    onError: (err: Error) => toast.error(err.message),
  });
}
