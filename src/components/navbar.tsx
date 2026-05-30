"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LanguageSelect } from "@/components/language-select";
import { NavbarBrand } from "@/components/navbar-brand";
import { useSplash } from "@/contexts/splash-context";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import {
  mobileMenuItem,
  mobileMenuPanel,
  premiumButtonHover,
  premiumEase,
} from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

const navHrefs = [
  { href: "/", key: "nav.home" },
  { href: "/exterior", key: "nav.exterior" },
  { href: "/rooms", key: "nav.rooms" },
  { href: "/dining", key: "nav.dining" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const { splashActive } = useSplash();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const useOverlayStyle = isHome && !mobileOpen && !splashActive;

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobile();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
          useOverlayStyle
            ? "border-transparent bg-transparent"
            : "border-b border-stone-200/70 bg-stone-50/95 backdrop-blur-md dark:border-brand-gold/15 dark:bg-black/95",
          isHome &&
            mobileOpen &&
            "border-b border-stone-200/70 bg-stone-50/95 backdrop-blur-md dark:border-brand-gold/15 dark:bg-black/95"
        )}
      >
        <div className="container mx-auto flex h-14 max-w-6xl items-center gap-2 px-4 sm:h-16 sm:gap-3 sm:px-6 lg:px-8">
          <NavbarBrand
            priority
            className="min-w-0 flex-1 overflow-hidden sm:mr-auto sm:flex-initial sm:max-w-none"
            imageClassName={cn(
              useOverlayStyle &&
                "drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]"
            )}
            textClassName={cn(useOverlayStyle && "text-white")}
          />

          <nav
            className="hidden items-center gap-6 xl:gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {navHrefs.map(({ href, key }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors duration-300 ease-in-out",
                    useOverlayStyle
                      ? cn(
                          "text-zinc-200 hover:text-white",
                          isActive && "text-white"
                        )
                      : cn(
                          "text-muted-foreground hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100",
                          isActive && "text-foreground dark:text-white"
                        )
                  )}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <div
              className={cn(
                "hidden items-center gap-2 rounded-full border p-1.5 md:flex",
                useOverlayStyle
                  ? "border-white/20 bg-black/40 backdrop-blur-sm"
                  : "border-stone-200/80 bg-stone-100/60 dark:border-brand-gold/20 dark:bg-zinc-950"
              )}
            >
              <LanguageSelect variant={useOverlayStyle ? "overlay" : "default"} />
              <div
                className={cn(
                  "mx-0.5 h-5 w-px shrink-0",
                  useOverlayStyle ? "bg-white/20" : "bg-border dark:bg-zinc-700"
                )}
                aria-hidden
              />
              <ThemeToggle variant={useOverlayStyle ? "overlay" : "default"} />
            </div>

            <Button
              nativeButton={false}
              render={<Link href="/contact#booking" />}
              size="sm"
              className={cn(
                "btn-cta hidden sm:inline-flex",
                premiumButtonHover,
                useOverlayStyle &&
                  "!border-white/30 !bg-white/15 !text-white hover:!bg-white/25 hover:!text-white hover:!shadow-white/10"
              )}
            >
              {t("bookNow")}
            </Button>

            <button
              type="button"
              className={cn(
                "inline-flex size-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ease-in-out lg:hidden",
                useOverlayStyle
                  ? "text-white hover:bg-white/10"
                  : "text-foreground hover:bg-muted dark:text-zinc-100 dark:hover:bg-zinc-900"
              )}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? t("menu.close") : t("menu.open")}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <div className="lg:hidden">
            <motion.button
              type="button"
              aria-label={t("menu.close")}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: premiumEase }}
              onClick={closeMobile}
            />

            <motion.nav
              id="mobile-nav"
              className="fixed inset-x-0 top-14 z-50 max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-b border-stone-200/70 bg-stone-50/98 shadow-2xl shadow-black/10 sm:top-16 dark:border-brand-gold/20 dark:bg-black dark:shadow-black/80"
              aria-label="Mobile navigation"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={mobileMenuPanel}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="container mx-auto max-w-6xl space-y-4 px-4 py-4 sm:px-6">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-stone-200/80 bg-stone-100/80 p-3 dark:border-zinc-800 dark:bg-zinc-950">
                  <LanguageSelect />
                  <ThemeToggle />
                </div>

                <ul className="flex flex-col gap-1">
                  {navHrefs.map(({ href, key }, index) => {
                    const isActive =
                      href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(href);

                    return (
                      <motion.li
                        key={href}
                        custom={index}
                        initial="initial"
                        animate="animate"
                        variants={mobileMenuItem}
                      >
                        <Link
                          href={href}
                          className={cn(
                            "block rounded-lg px-3 py-3 text-base font-medium tracking-wide transition-colors duration-300 ease-in-out",
                            isActive
                              ? "bg-brand-gold/15 text-brand-navy dark:bg-brand-gold/15 dark:text-brand-gold"
                              : "text-foreground hover:bg-muted dark:text-zinc-200 dark:hover:bg-zinc-950"
                          )}
                          onClick={closeMobile}
                        >
                          {t(key)}
                        </Link>
                      </motion.li>
                    );
                  })}
                  <motion.li
                    custom={navHrefs.length}
                    initial="initial"
                    animate="animate"
                    variants={mobileMenuItem}
                    className="pt-2"
                  >
                    <Link
                      href="/contact#booking"
                      className="btn-cta flex h-11 w-full items-center justify-center rounded-full text-sm transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
                      onClick={closeMobile}
                    >
                      {t("bookNow")}
                    </Link>
                  </motion.li>
                </ul>
              </div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
