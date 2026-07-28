"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { HeroImage } from "@/app/types";

const SLIDE_INTERVAL_MS = 4000;

export default function HeroImageSlider({ images }: { images: HeroImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="(min-width: 1024px) 45vw, 90vw"
        />
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 flex gap-1.5">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
