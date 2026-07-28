"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { ServiceModule } from "@/app/types";

const services: ServiceModule[] = [
  {
    slug: "event",
    eyebrow: "Service",
    title: "Event",
    description: "Sports events, product launches, conferences, motorsport and more.",
    tag: "For Coca-Cola, Tata AIG, Uber, Nippon",
    icon: "calendar",
    image: { src: "/services/Event.jpg", alt: "Medallin event management" },
  },
  {
    slug: "talent",
    eyebrow: "Service",
    title: "Talent",
    description: "Brand building, endorsements, PR and logistics for athletes.",
    tag: "Ravindra Jadeja · Arjun Vajpai · Manu Bhaker",
    icon: "star",
    image: { src: "/services/Talent.jpg", alt: "Medallin talent management" },
  },
  {
    slug: "sports-ticketing-tours",
    eyebrow: "Service",
    title: "Sports Ticketing & Tours",
    description: "Official access to FIFA, Wimbledon, Formula One and more.",
    tag: "Official access, curated",
    icon: "ticket",
    image: { src: "/services/SPORTS TICKETING & TOURS.jpg", alt: "Medallin sports ticketing and tours" },
  },
  {
    slug: "sponsorship",
    eyebrow: "Service",
    title: "Sponsorship",
    description: "Matching brands with leagues, teams and sporting properties.",
    tag: "Strategic brand-property fit",
    icon: "handshake",
    image: { src: "/services/Sponsorship.jpg", alt: "Medallin sponsorship" },
  },
  {
    slug: "brand-activation",
    eyebrow: "Service",
    title: "Brand Activation",
    description: "Experiential strategies built to shift awareness and behaviour.",
    tag: "Experiential by design",
    icon: "spark",
    image: { src: "/services/BRAND ACTIVATION.jpg", alt: "Medallin brand activation" },
  },
  {
    slug: "creative",
    eyebrow: "Service",
    title: "Creative",
    description: "Brand identity, creative direction and marketing strategy.",
    tag: "Identity to execution",
    icon: "pen",
    image: { src: "/services/CREATIVE.jpg", alt: "Medallin creative services" },
  },
  {
    slug: "licensing-merchandising",
    eyebrow: "Service",
    title: "Licensing & Merchandising",
    description: "Monetising IP through license management and merchandising.",
    tag: "IP, monetised",
    icon: "tag",
    image: { src: "/services/LICENSING & MERCHANDISING.jpg", alt: "Medallin licensing and merchandising" },
  },
  {
    slug: "production-broadcasting",
    eyebrow: "Service",
    title: "Production & Broadcasting",
    description: "End-to-end production, delivered with major broadcasters.",
    tag: "Broadcast-ready",
    icon: "camera",
    image: { src: "/services/PRODUCTION & BROADCASTING.jpg", alt: "Medallin production and broadcasting" },
  },
];

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3.5" y="4.5" width="17" height="16" rx="2" />
          <path d="M3.5 9.5h17M8 3v3M16 3v3" />
        </svg>
      );
    case "ticket":
      return (
        <svg {...common}>
          <path d="M3 9a2 2 0 0 1 0 4v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a2 2 0 0 1 0-4V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v3z" />
          <path d="M10 5v14" strokeDasharray="2 3" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M12 3l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...common}>
          <path d="M3 12l4-4 3 3-4 4z" />
          <path d="M10 11l3 3 4-4-3-3" />
          <path d="M6 13l3 3 1.5-1.5M13 14l1.5 1.5L18 12" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
        </svg>
      );
    case "tag":
      return (
        <svg {...common}>
          <path d="M4 4h7l9 9-7 7-9-9V4z" />
          <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
          <circle cx="12" cy="13" r="3.4" />
        </svg>
      );
    case "pen":
      return (
        <svg {...common}>
          <path d="M4 20l1-4.5L15.5 5 19 8.5 8.5 19z" />
          <path d="M13.5 6.5L17 10" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPointerDownRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const track = trackRef.current;
    if (!track) return;
    isPointerDownRef.current = true;
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = track.scrollLeft;
    setIsDragging(true);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !isPointerDownRef.current) return;
    const delta = event.clientX - dragStartXRef.current;
    track.scrollLeft = dragStartScrollRef.current - delta;
  };

  const endDrag = () => {
    isPointerDownRef.current = false;
    setIsDragging(false);
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    track.scrollLeft += event.deltaY;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    if (event.key === "ArrowRight") {
      event.preventDefault();
      track.scrollBy({ left: 320, behavior: "smooth" });
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      track.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  return (
    <section className="mx-auto w-[90%] max-w-7xl py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
            What We Do
          </p>
          <h2 className="mt-4 font-serif text-2xl leading-snug text-zinc-950 sm:text-3xl lg:text-4xl dark:text-white">
            Every part of the <em className="italic text-zinc-500 dark:text-zinc-400">experience.</em>
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            From the event itself to the brand behind it, we run every piece end-to-end.
          </p>
        </div>
        <p className="hidden shrink-0 text-xs uppercase tracking-[0.15em] text-zinc-400 sm:block">
          ← drag or scroll →
        </p>
      </div>

      <div
        ref={trackRef}
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        className={`mt-8 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {services.map((service) => (
          <div
            key={service.slug}
            className="flex h-[440px] w-72 shrink-0 flex-col rounded-3xl border border-black/[.08] bg-white p-5 shadow-sm dark:border-white/[.145] dark:bg-zinc-900"
          >
            <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              {service.image ? (
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  draggable={false}
                  className="pointer-events-none object-cover"
                  sizes="288px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-zinc-400 dark:text-zinc-600">
                  <Icon name={service.icon} size={32} />
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between text-zinc-500 dark:text-zinc-400">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-amber-600 dark:text-amber-400">
                {service.eyebrow}
              </span>
              <Icon name={service.icon} />
            </div>
            <h3 className="mt-3 font-serif text-xl font-medium leading-tight text-zinc-950 dark:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>

            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-zinc-400 dark:text-zinc-500">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                {service.tag}
              </span>
              <Link
                href={`/services/${service.slug}`}
                className="shrink-0 text-xs font-medium text-zinc-700 underline-offset-2 hover:underline dark:text-zinc-300"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
