import { AppLayout } from '@/components/AppLayout';

export default function VisaApplicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
