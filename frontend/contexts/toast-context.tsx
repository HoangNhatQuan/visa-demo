"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";

type ToastType = "success" | "error" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

interface ToastAPI {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
}

type Action = { type: "ADD"; toast: Toast } | { type: "REMOVE"; id: string };

function reducer(state: Toast[], action: Action): Toast[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.toast];
    case "REMOVE":
      return state.filter((t) => t.id !== action.id);
    default:
      return state;
  }
}

const ToastDispatchContext = createContext<ToastAPI | null>(null);
const ToastStateContext = createContext<Toast[]>([]);

let counter = 0;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, dispatch] = useReducer(reducer, []);
  const timers = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const add = useCallback((type: ToastType, message: string) => {
    const id = `toast-${++counter}`;
    dispatch({ type: "ADD", toast: { id, type, message } });
    const timer = setTimeout(() => {
      dispatch({ type: "REMOVE", id });
      timers.current.delete(timer);
    }, 4000);
    timers.current.add(timer);
  }, []);

  const toast = useMemo<ToastAPI>(
    () => ({
      success: (msg: string) => add("success", msg),
      error: (msg: string) => add("error", msg),
      info: (msg: string) => add("info", msg),
    }),
    [add],
  );

  return (
    <ToastDispatchContext.Provider value={toast}>
      <ToastStateContext.Provider value={toasts}>
        {children}
      </ToastStateContext.Provider>
    </ToastDispatchContext.Provider>
  );
}

export function useToast(): ToastAPI {
  const ctx = useContext(ToastDispatchContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function useToasts(): Toast[] {
  return useContext(ToastStateContext);
}
