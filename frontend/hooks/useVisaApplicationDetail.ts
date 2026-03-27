import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  visaApplicationsService,
  type AddNoteParams,
} from "@/services/visa-applications";
import type { VisaApplicationStatus } from "@/types/visa-application";
import { useToast } from "@/contexts/toast-context";
import { queryKeys } from "./queryKeys";

const ONE_MINUTE = 60 * 1_000;

export function useVisaApplicationDetail(id: string) {
  return useQuery({
    queryKey: queryKeys.visaApplications.detail(id),
    queryFn: () => visaApplicationsService.getById(id),
    enabled: !!id,
    staleTime: ONE_MINUTE,
  });
}

export function useUpdateStatus(id: string) {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (status: VisaApplicationStatus) =>
      visaApplicationsService.updateStatus(id, status),
    onSuccess: () => {
      toast.success("Status updated successfully");
      queryClient.invalidateQueries({
        queryKey: queryKeys.visaApplications.detail(id),
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });
}

export function useAddNote(id: string) {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (dto: AddNoteParams) =>
      visaApplicationsService.addNote(id, dto),
    onSuccess: () => {
      toast.success("Note added");
      queryClient.invalidateQueries({
        queryKey: queryKeys.visaApplications.detail(id),
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });
}
