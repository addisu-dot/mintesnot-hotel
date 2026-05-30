"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type FullScreenContextValue = {
  isFullScreen: boolean;
  toggleFullScreen: () => void;
  openFullScreen: () => void;
  closeFullScreen: () => void;
};

const FullScreenContext = createContext<FullScreenContextValue | null>(null);

export function FullScreenProvider({ children }: { children: React.ReactNode }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = useCallback(() => {
    setIsFullScreen((prev) => !prev);
  }, []);

  const openFullScreen = useCallback(() => {
    setIsFullScreen(true);
  }, []);

  const closeFullScreen = useCallback(() => {
    setIsFullScreen(false);
  }, []);

  const value = useMemo(
    () => ({ isFullScreen, toggleFullScreen, openFullScreen, closeFullScreen }),
    [isFullScreen, toggleFullScreen, openFullScreen, closeFullScreen]
  );

  return (
    <FullScreenContext.Provider value={value}>{children}</FullScreenContext.Provider>
  );
}

export function useFullScreen() {
  const context = useContext(FullScreenContext);
  if (!context) {
    throw new Error("useFullScreen must be used within a FullScreenProvider");
  }
  return context;
}
