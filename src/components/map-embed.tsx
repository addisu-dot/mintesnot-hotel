import { SITE_CONTACT } from "@/lib/site-contact";

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SITE_CONTACT.mapQuery)}&z=16&output=embed`;

export function MapEmbed() {
  return (
    <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#141a14] shadow-inner sm:min-h-[360px] lg:min-h-[100%]">
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#141a14]/80 via-transparent to-[#141a14]/30"
        aria-hidden
      />
      <iframe
        title="Map — near Abune Teklehaimanot Church, Durame"
        src={mapSrc}
        className="absolute inset-0 h-full w-full border-0 opacity-85 [filter:grayscale(0.35)_brightness(0.65)_contrast(1.1)]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
