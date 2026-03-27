import { useQuery } from "@tanstack/react-query";
import {
  visaApplicationsService,
  type ListParams,
} from "@/services/visa-applications";
import { queryKeys } from "./queryKeys";

const TWENTY_SECONDS = 20 * 1_000;

export function useVisaApplications(params: ListParams) {
  return useQuery({
    queryKey: queryKeys.visaApplications.list(params),
    queryFn: () => visaApplicationsService.list(params),
    placeholderData: (prev) => prev,
    staleTime: TWENTY_SECONDS,
  });
}
