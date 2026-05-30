"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useLanguage } from "@/contexts/language-context";
import { useSplash } from "@/contexts/splash-context";
import { premiumEase } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

type NavbarBrandProps = {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  priority?: boolean;
};

export function NavbarBrand({
  className,
  imageClassName,
  textClassName,
  priority = false,
}: NavbarBrandProps) {
  const { t } = useLanguage();
  const { splashActive, splashComplete } = useSplash();

  const showLogoInNav = splashComplete || !splashActive;
  const showBrandText = splashComplete;

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-w-0 max-w-full items-center gap-2 sm:gap-3",
        className
      )}
      aria-label={t("brand")}
    >
      {showLogoInNav && (
        <motion.div
          layoutId="brand-logo-image"
          className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full sm:h-9 sm:w-9 md:h-10 md:w-10"
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 28,
            mass: 0.9,
          }}
        >
          <Image
            src="/Images/logo/logo.png"
            alt=""
            fill
            priority={priority}
            sizes="40px"
            className={cn("object-contain p-1", imageClassName)}
          />
        </motion.div>
      )}

      <motion.span
        layoutId="hero-title"
        className={cn(
          "truncate font-bold leading-tight tracking-wide",
          "text-sm sm:text-base md:text-xl lg:text-2xl",
          "text-stone-900 dark:text-zinc-100",
          textClassName
        )}
        initial={false}
        animate={
          showBrandText
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: 28, width: showBrandText ? "auto" : 0 }
        }
        transition={{
          duration: 0.55,
          ease: premiumEase,
          delay: showBrandText ? 0.12 : 0,
        }}
        style={{ display: showBrandText ? "inline-block" : "none" }}
      >
        {t("brand")}
      </motion.span>
    </Link>
  );
}
