import { LightboxImage } from "@/components/lightbox-image";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageGalleryProps = {
  images: GalleryImage[];
  className?: string;
  columnsClassName?: string;
  imageSizes?: string;
};

export function ImageGallery({
  images,
  className,
  columnsClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: ImageGalleryProps) {
  return (
    <div
      className={cn("grid gap-4 sm:gap-5", columnsClassName, className)}
    >
      {images.map((image) => (
        <div
          key={image.src}
          className="group bento-card bento-card-hover overflow-hidden rounded-2xl"
        >
          <LightboxImage
            src={image.src}
            alt={image.alt}
            caption={image.caption}
            sizes={imageSizes}
            containerClassName="aspect-[4/3] bg-stone-200/60 dark:bg-zinc-950"
            imageClassName="image-zoom-hover"
          />
        </div>
      ))}
    </div>
  );
}
