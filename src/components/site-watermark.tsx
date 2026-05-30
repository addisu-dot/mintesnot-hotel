import Image from "next/image";

export function SiteWatermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
      aria-hidden
    >
      <div className="relative h-[min(70vw,28rem)] w-[min(70vw,28rem)] overflow-hidden rounded-full opacity-[0.03] dark:opacity-[0.04]">
        <Image
          src="/Images/logo/logo.png"
          alt=""
          fill
          className="object-contain p-8"
          sizes="448px"
          priority={false}
        />
      </div>
    </div>
  );
}
