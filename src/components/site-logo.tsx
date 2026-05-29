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
      <Image
        src="/Images/logo/logo.png"
        alt=""
        width={48}
        height={48}
        priority={priority}
        sizes="(max-width: 640px) 32px, 48px"
        className={cn(
          "h-8 w-auto shrink-0 object-contain sm:h-10 md:h-12",
          compact && "h-8 sm:h-9",
          imageClassName
        )}
      />
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
