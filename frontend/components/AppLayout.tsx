'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { Navbar } from './Navbar';

interface Props {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export function AppLayout({ children, requireAdmin = false }: Props) {
  const { user, isReady } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isReady) return;
    if (!user) {
      router.replace('/login');
      return;
    }
    if (requireAdmin && user.role !== 'ADMIN') {
      router.replace('/visa-applications');
    }
  }, [isReady, user, requireAdmin, router]);

  const isAuthorized = isReady && user && (!requireAdmin || user.role === 'ADMIN');

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  );
}
