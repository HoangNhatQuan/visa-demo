export const formatDate = (iso: string) => new Date(iso).toLocaleDateString();
export const formatDateTime = (iso: string) => new Date(iso).toLocaleString();
