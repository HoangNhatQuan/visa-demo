"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";

export function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-4 sticky top-0 z-40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex-1 flex flex-row gap-4">
          <Link
            href="/visa-applications"
            className="text-lg font-bold text-primary"
          >
            Visa Ops
          </Link>
          <nav className="flex  gap-1">
            <Link
              href="/visa-applications"
              className={`btn btn-sm btn-ghost ${
                pathname.startsWith("/visa-applications") ? "btn-active" : ""
              }`}
            >
              Applications
            </Link>
            {user?.role === "ADMIN" && (
              <Link
                href="/users"
                className={`btn btn-sm btn-ghost ${
                  pathname.startsWith("/users") ? "btn-active" : ""
                }`}
              >
                Users
              </Link>
            )}
          </nav>
        </div>

        {user && (
          <div className="flex-none flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium leading-none">{user.email}</p>
              <p className="text-xs text-base-content/50 mt-0.5">{user.role}</p>
            </div>
            <button className="btn btn-sm btn-ghost" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
