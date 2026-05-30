"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

const SPLASH_SESSION_KEY = "mintesnot-splash-seen";

type SplashContextValue = {
  splashActive: boolean;
  splashComplete: boolean;
  finishSplash: () => void;
};

const SplashContext = createContext<SplashContextValue | null>(null);

function subscribeSplash() {
  return () => {};
}

function getSkipSplashSnapshot() {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(SPLASH_SESSION_KEY) === "1";
}

function getSkipSplashServerSnapshot() {
  return false;
}

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const skipSplash = useSyncExternalStore(
    subscribeSplash,
    getSkipSplashSnapshot,
    getSkipSplashServerSnapshot
  );

  const [splashActive, setSplashActive] = useState(!skipSplash);
  const [splashComplete, setSplashComplete] = useState(skipSplash);

  const finishSplash = useCallback(() => {
    setSplashActive(false);
    setSplashComplete(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SPLASH_SESSION_KEY, "1");
    }
  }, []);

  const value = useMemo(
    () => ({ splashActive, splashComplete, finishSplash }),
    [splashActive, splashComplete, finishSplash]
  );

  return (
    <SplashContext.Provider value={value}>{children}</SplashContext.Provider>
  );
}

export function useSplash() {
  const context = useContext(SplashContext);
  if (!context) {
    throw new Error("useSplash must be used within a SplashProvider");
  }
  return context;
}
