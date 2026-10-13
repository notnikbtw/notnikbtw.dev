'use client';

import * as React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

export type SliderImage = {
  src: string;
  alt: string;
};

type ImageSliderProps = {
  images: SliderImage[];
  className?: string;
};

export function ImageSlider({ images, className }: ImageSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  if (images.length === 0) return null;

  const hasMultiple = images.length > 1;
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: hasMultiple, watchDrag: hasMultiple }}
      aria-label="Image slider"
      className={cn('flex flex-col gap-2.5', className)}
    >
      <CarouselContent className="ml-0">
        {images.map((image, index) => (
          <CarouselItem key={image.src} className="pl-0">
            <div className="border-border bg-card/30 relative aspect-video w-full border">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                priority={index === 0}
                className="object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {hasMultiple && (
        <div className="text-muted-foreground flex items-center justify-between font-mono text-xs">
          <span aria-live="polite">
            <strong className="text-foreground font-medium">
              {pad(current + 1)}
            </strong>
            {' / '}
            {pad(images.length)}
          </span>

          <div className="flex items-center gap-1.5">
            <CarouselPrevious className="relative inset-auto m-0 translate-y-0" />
            <CarouselNext className="relative inset-auto m-0 translate-y-0" />
          </div>
        </div>
      )}
    </Carousel>
  );
}
