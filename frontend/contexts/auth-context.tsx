"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  TOKEN_STORAGE_KEY,
  clearToken,
  getUser,
  setToken,
  type TokenPayload,
} from "@/lib/auth";

interface AuthState {
  user: TokenPayload | null;
  isReady: boolean;
}

interface AuthContextValue extends AuthState {
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [{ user, isReady }, setAuthState] = useState<AuthState>({
    user: null,
    isReady: false,
  });

  useEffect(() => {
    queueMicrotask(() => {
      setAuthState({ user: getUser(), isReady: true });
    });
  }, []);

  const syncUserFromStorage = useCallback(() => {
    setAuthState(() => {
      const nextUser = getUser();
      return { user: nextUser, isReady: true };
    });
  }, []);

  const login = useCallback((token: string) => {
    setToken(token);
    setAuthState({ user: getUser(), isReady: true });
  }, []);

  const logout = useCallback(() => {
    clearToken();
    setAuthState({ user: null, isReady: true });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, isReady, login, logout }),
    [user, isReady, login, logout],
  );

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== TOKEN_STORAGE_KEY) return;
      syncUserFromStorage();
    };

    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
    };
  }, [syncUserFromStorage]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
