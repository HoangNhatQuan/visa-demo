import { type ApiResponse, http } from "./http";
import type {
  ListVisaApplicationsResponse,
  VisaApplication,
  VisaApplicationNote,
  VisaApplicationStatus,
} from "@/types/visa-application";

export interface ListParams {
  q?: string;
  status?: VisaApplicationStatus;
  page: number;
  limit: number;
}

export interface AddNoteParams {
  content: string;
}

export interface CreateApplicationParams {
  applicantName: string;
  email: string;
  nationality: string;
  destinationCountry: string;
  visaType: string;
  travelDate: string;
}

export const visaApplicationsService = {
  list: (params: ListParams) =>
    http
      .get<ApiResponse<ListVisaApplicationsResponse>>("/visa-applications", {
        params,
      })
      .then((r) => r.data.data),

  getById: (id: string) =>
    http
      .get<ApiResponse<VisaApplication>>(
        `/visa-applications/${encodeURIComponent(id)}`,
      )
      .then((r) => r.data.data),

  create: (dto: CreateApplicationParams) =>
    http
      .post<ApiResponse<VisaApplication>>("/visa-applications", dto)
      .then((r) => r.data.data),

  updateStatus: (id: string, status: VisaApplicationStatus) =>
    http
      .patch<ApiResponse<VisaApplication>>(
        `/visa-applications/${encodeURIComponent(id)}/status`,
        { status },
      )
      .then((r) => r.data.data),

  addNote: (id: string, dto: AddNoteParams) =>
    http
      .post<ApiResponse<VisaApplicationNote>>(
        `/visa-applications/${encodeURIComponent(id)}/notes`,
        dto,
      )
      .then((r) => r.data.data),
};
