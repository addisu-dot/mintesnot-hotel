"use client";

import { Languages } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/language-context";
import { LOCALES, type Locale } from "@/lib/translations";
import { cn } from "@/lib/utils";

type LanguageSelectProps = {
  className?: string;
  variant?: "default" | "overlay";
};

export function LanguageSelect({
  className,
  variant = "default",
}: LanguageSelectProps) {
  const { locale, setLocale, t } = useLanguage();
  const isOverlay = variant === "overlay";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Languages
        className={cn(
          "size-4 shrink-0",
          isOverlay ? "text-white/80" : "text-muted-foreground"
        )}
        aria-hidden
      />
      <Select
        value={locale}
        onValueChange={(value) => setLocale(value as Locale)}
      >
        <SelectTrigger
          size="sm"
          aria-label={t("language")}
          className={cn(
            "w-[7.5rem] border-border/80 bg-background/80 sm:w-[8.25rem]",
            isOverlay &&
              "border-white/25 bg-white/10 text-white hover:bg-white/15 data-placeholder:text-white/70 [&_svg]:text-white/70"
          )}
        >
          <SelectValue placeholder={LOCALES.EN.selectLabel} />
        </SelectTrigger>
        <SelectContent align="end">
          {(Object.keys(LOCALES) as Locale[]).map((code) => (
            <SelectItem key={code} value={code}>
              {LOCALES[code].selectLabel}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
