"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

import {
  LOCALE_STORAGE_KEY,
  translate,
  type Locale,
} from "@/lib/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  ready: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const localeListeners = new Set<() => void>();
let clientLocale: Locale = "EN";
let localeHydrated = false;

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "EN";
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored === "AM" ? "AM" : "EN";
}

function hydrateLocaleFromStorage() {
  if (localeHydrated || typeof window === "undefined") return;
  localeHydrated = true;
  clientLocale = readStoredLocale();
  document.documentElement.lang = clientLocale === "AM" ? "am" : "en";
}

function subscribeLocale(listener: () => void) {
  localeListeners.add(listener);
  return () => {
    localeListeners.delete(listener);
  };
}

function emitLocaleChange() {
  localeListeners.forEach((listener) => listener());
}

function getLocaleSnapshot(): Locale {
  hydrateLocaleFromStorage();
  return clientLocale;
}

function getLocaleServerSnapshot(): Locale {
  return "EN";
}

function subscribeReady(listener: () => void) {
  localeListeners.add(listener);
  return () => {
    localeListeners.delete(listener);
  };
}

function getReadySnapshot(): boolean {
  return typeof window !== "undefined";
}

function getReadyServerSnapshot(): boolean {
  return false;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getLocaleServerSnapshot
  );

  const ready = useSyncExternalStore(
    subscribeReady,
    getReadySnapshot,
    getReadyServerSnapshot
  );

  const setLocale = useCallback((next: Locale) => {
    clientLocale = next;
    localeHydrated = true;
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
    document.documentElement.lang = next === "AM" ? "am" : "en";
    emitLocaleChange();
  }, []);

  const t = useCallback(
    (key: string) => translate(locale, key),
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, t, ready }),
    [locale, setLocale, t, ready]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
