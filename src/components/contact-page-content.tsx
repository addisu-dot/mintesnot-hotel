"use client";

import { BookingForm } from "@/components/booking-form";
import { ContactSection } from "@/components/contact-section";
import { LocalizedPageIntro } from "@/components/localized-page-intro";
import { useLanguage } from "@/contexts/language-context";

export function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <LocalizedPageIntro
        eyebrowKey="pages.contact.eyebrow"
        titleKey="pages.contact.title"
        descriptionKey="pages.contact.description"
      />
      <ContactSection />

      <section
        id="booking"
        className="mx-auto max-w-xl scroll-mt-20 px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"
        aria-labelledby="booking-heading"
      >
        <p className="section-eyebrow">{t("pages.contact.reservationsEyebrow")}</p>
        <h2
          id="booking-heading"
          className="section-title mt-3 text-2xl sm:text-3xl"
        >
          {t("pages.contact.reservationsTitle")}
        </h2>
        <p className="mt-4 text-base leading-relaxed tracking-wide text-muted-foreground">
          {t("pages.contact.reservationsDescription")}
        </p>
        <div className="mt-8">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
