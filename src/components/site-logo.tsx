"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  priority?: boolean;
  /** Tighter sizing for the header bar on small screens */
  compact?: boolean;
};

export function SiteLogo({
  className,
  imageClassName,
  textClassName,
  priority = false,
  compact = false,
}: SiteLogoProps) {
  const { t } = useLanguage();

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-w-0 max-w-full items-center gap-2 transition-opacity hover:opacity-90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none rounded-sm sm:gap-3",
        className
      )}
      aria-label={t("brand")}
    >
      <div className={cn(
        "relative shrink-0 overflow-hidden rounded-[40px]",
        "aspect-[4/3]",
        "h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12",
        compact && "h-8 w-8 sm:h-9 sm:w-9"
      )}>
        <Image
          src="/Images/logo/logo.png"
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 640px) 32px, 48px"
          className={cn(
            "object-cover p-0",
            imageClassName
          )}
        />
      </div>
      <span
        className={cn(
          "truncate font-bold leading-tight tracking-wide",
          compact
            ? "text-sm sm:text-base md:text-xl lg:text-2xl"
            : "text-base sm:text-lg md:text-2xl",
          "text-stone-900 dark:text-zinc-100",
          textClassName
        )}
      >
        {t("brand")}
      </span>
    </Link>
  );
}
