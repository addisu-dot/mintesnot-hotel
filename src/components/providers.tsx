"use client";

import { ThemeProvider } from "next-themes";

import { LanguageProvider } from "@/contexts/language-context";
import { SplashProvider } from "@/contexts/splash-context";
import { FullScreenProvider } from "@/contexts/fullscreen-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <LanguageProvider>
        <SplashProvider>
          <FullScreenProvider>{children}</FullScreenProvider>
        </SplashProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
