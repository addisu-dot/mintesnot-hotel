"use client";

import Link from "next/link";

import { FacebookLink } from "@/components/facebook-link";
import { SiteLogo } from "@/components/site-logo";
import { useLanguage } from "@/contexts/language-context";
import {
  formatPhoneDisplay,
  SITE_CONTACT,
} from "@/lib/site-contact";

const footerNav = [
  { href: "/", key: "nav.home" },
  { href: "/rooms", key: "nav.rooms" },
  { href: "/dining", key: "nav.dining" },
  { href: "/about", key: "nav.about" },
  { href: "/contact", key: "nav.contact" },
] as const;

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-brand-gold/20 bg-brand-navy text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <SiteLogo textClassName="!text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed tracking-wide text-zinc-300">
              {t("footer.tagline")}
            </p>
            <div className="mt-8">
              <FacebookLink />
            </div>
          </div>

          <div>
            <h3 className="section-eyebrow !text-brand-gold/80">
              {t("footer.explore")}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {footerNav.map(({ href, key }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm tracking-wide text-zinc-200 transition-colors duration-300 hover:text-brand-gold"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="section-eyebrow !text-brand-gold/80">
              {t("footer.visit")}
            </h3>
            <p className="mt-5 text-sm leading-relaxed tracking-wide text-zinc-200">
              {t("contact.address")}
            </p>
          </div>

          <div>
            <h3 className="section-eyebrow !text-brand-gold/80">
              {t("footer.contact")}
            </h3>
            <ul className="mt-5 flex flex-col gap-2.5">
              {SITE_CONTACT.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone}`}
                    className="text-sm tracking-wide text-zinc-200 transition-colors duration-300 hover:text-brand-gold"
                  >
                    {formatPhoneDisplay(phone)}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/contact#booking"
              className="mt-5 inline-block text-sm font-medium tracking-wide text-brand-gold transition-colors duration-300 hover:text-amber-300"
            >
              {t("footer.bookOrMessage")}
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-gold/15 pt-8 text-center text-xs tracking-wide text-zinc-400 sm:flex-row sm:text-left">
          <p>
            © {year} {t("brand")}. {t("footer.rights")}
          </p>
          <p>{t("footer.location")}</p>
        </div>

        <p className="mt-8 border-t border-brand-burgundy/30 pt-6 text-center text-[0.7rem] leading-relaxed tracking-wide text-zinc-500 sm:text-xs">
          Designed &amp; Developed by Addisu Legese Meharu{" "}
          <span className="text-zinc-600" aria-hidden>
            |
          </span>{" "}
          Contact:{" "}
          <a
            href="tel:+251964658915"
            className="transition-colors duration-300 hover:text-brand-gold"
          >
            +251964658915
          </a>
          {" & "}
          <a
            href="tel:+251713757794"
            className="transition-colors duration-300 hover:text-brand-gold"
          >
            +251713757794
          </a>
          <span className="mx-1 text-zinc-600" aria-hidden>
            |
          </span>
          Email:{" "}
          <a
            href="mailto:addisulegesemeharu@gmail.com"
            className="transition-colors duration-300 hover:text-brand-gold"
          >
            addisulegesemeharu@gmail.com
          </a>
          <span className="mx-1 text-zinc-600" aria-hidden>
            |
          </span>
          Telegram:{" "}
          <a
            href="https://t.me/axiomaticad"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-300 transition-colors duration-300 hover:text-brand-gold"
          >
            @axiomaticad
          </a>
        </p>
      </div>
    </footer>
  );
}
