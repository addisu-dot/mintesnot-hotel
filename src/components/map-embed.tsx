import { cn } from "@/lib/utils";

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=7.248297,37.902343&t=&z=16&ie=UTF8&iwloc=&output=embed";

type MapEmbedProps = {
  className?: string;
};

export function MapEmbed({ className }: MapEmbedProps) {
  return (
    <div
      className={cn(
        "relative h-64 w-full overflow-hidden rounded-xl shadow-lg sm:h-72 md:h-80",
        className
      )}
    >
      <iframe
        title="Mintesnot Hotel — Durame"
        src={MAP_EMBED_SRC}
        className={cn(
          "h-full w-full border-0",
          "dark:invert-[90%] dark:hue-rotate-180 dark:brightness-[0.85] dark:contrast-[1.05]"
        )}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
