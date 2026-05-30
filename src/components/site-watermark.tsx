import Image from "next/image";

export function SiteWatermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
      aria-hidden
    >
      <div className="relative aspect-[4/3] h-[min(70vw,28rem)] w-[min(70vw,28rem)] overflow-hidden rounded-[40px] opacity-[0.03] dark:opacity-[0.04]">
        <Image
          src="/Images/logo/logo.png"
          alt=""
          fill
          className="object-cover p-0"
          sizes="448px"
          priority={false}
        />
      </div>
    </div>
  );
}
