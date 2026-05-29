"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  variant?: "default" | "overlay";
};

function subscribeClientReady(listener: () => void) {
  if (typeof window === "undefined") return () => {};
  listener();
  return () => {};
}

function getClientReadySnapshot() {
  return typeof window !== "undefined";
}

function getClientReadyServerSnapshot() {
  return false;
}

export function ThemeToggle({
  className,
  variant = "default",
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  const mounted = useSyncExternalStore(
    subscribeClientReady,
    getClientReadySnapshot,
    getClientReadyServerSnapshot
  );

  const isOverlay = variant === "overlay";
  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return (
      <div
        className={cn("flex h-8 items-center gap-2", className)}
        aria-hidden
      >
        <Sun className="size-4 opacity-0" />
        <div className="h-[18px] w-8 rounded-full bg-muted" />
        <Moon className="size-4 opacity-0" />
      </div>
    );
  }

  return (
    <div
      className={cn("flex items-center gap-2", className)}
      role="group"
      aria-label={isDark ? t("theme.dark") : t("theme.light")}
    >
      <Sun
        className={cn(
          "size-4 shrink-0 transition-colors",
          isOverlay
            ? isDark
              ? "text-white/45"
              : "text-white"
            : isDark
              ? "text-muted-foreground"
              : "text-brand-gold"
        )}
        aria-hidden
      />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label={isDark ? t("theme.dark") : t("theme.light")}
        className={cn(isOverlay && "data-unchecked:bg-white/25")}
      />
      <Moon
        className={cn(
          "size-4 shrink-0 transition-colors",
          isOverlay
            ? isDark
              ? "text-white"
              : "text-white/45"
            : isDark
              ? "text-brand-gold"
              : "text-muted-foreground"
        )}
        aria-hidden
      />
    </div>
  );
}
