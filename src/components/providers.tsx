"use client";

import { ThemeProvider } from "next-themes";

import { LanguageProvider } from "@/contexts/language-context";
import { SplashProvider } from "@/contexts/splash-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LanguageProvider>
        <SplashProvider>{children}</SplashProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
