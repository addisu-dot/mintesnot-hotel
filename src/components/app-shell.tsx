"use client";

import { AnimatePresence, LayoutGroup } from "framer-motion";

import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import { SiteWatermark } from "@/components/site-watermark";
import { SplashScreen } from "@/components/splash-screen";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col">
      <SiteWatermark />
      <LayoutGroup id="splash-layout">
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <Navbar />
          <AnimatePresence>{<SplashScreen />}</AnimatePresence>
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
        </div>
      </LayoutGroup>
    </div>
  );
}
