export const TOKEN_STORAGE_KEY = "auth_token";

export interface TokenPayload {
  sub: string;
  email: string;
  role: "ADMIN" | "OPERATOR";
  exp?: number;
}

function parseJwtPayload(token: string): TokenPayload | null {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;
    const base64 = payload.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(base64)) as TokenPayload;
  } catch {
    return null;
  }
}

function isTokenExpired(payload: TokenPayload): boolean {
  if (!payload.exp) return false;
  return payload.exp * 1000 <= Date.now();
}

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
  } catch {}
}

export function clearToken(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  } catch {}
}

export function getUser(): TokenPayload | null {
  const token = getToken();
  if (!token) return null;
  const payload = parseJwtPayload(token);
  if (!payload || isTokenExpired(payload)) {
    clearToken();
    return null;
  }
  return payload;
}
