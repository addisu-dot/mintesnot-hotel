import Image from "next/image";

export function SiteWatermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
      aria-hidden
    >
      <div className="relative h-[min(70vw,28rem)] w-auto opacity-[0.03] dark:opacity-[0.04]">
        <Image
          src="/Images/logo/oval-logo.jpg"
          alt=""
          width={0}
          height={0}
          className="w-auto h-auto object-contain"
          sizes="448px"
          priority={false}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </div>
  );
}
