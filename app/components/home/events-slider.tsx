"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
} from "motion/react";
import type { EventItem } from "@/app/types";

const AUTO_SLIDE_INTERVAL_MS = 5000;
const RESUME_DELAY_MS = 3000;
const DRAG_MOVE_THRESHOLD_PX = 6;

function gallery(base: string, extraCount: number, alt: string) {
  const files = [`${base}.jfif`, ...Array.from({ length: extraCount }, (_, i) => `${base} ${i + 2}.jfif`)];
  return files.map((file) => ({ src: `/events/${file}`, alt }));
}

const events: EventItem[] = [
  {
    title: "iQOO International Fan Meet 4.0",
    tag: "Hanoi, Vietnam",
    description:
      "An end-to-end experience for 70 participants across 3 nights and 4 days: flights, visas, hotel stays, curated sightseeing, branded merchandise, gifting, conference execution, award ceremonies, gala celebrations and seamless logistics.",
    gallery: gallery("iQOO International Fan Meet 4.0", 5, "iQOO International Fan Meet 4.0 in Hanoi, Vietnam"),
  },
  {
    title: "Gala Dinner & Award Night, JSW Dulux FTS 2026",
    tag: "Krabi & Phuket",
    description:
      "A Gala Dinner and Award Night for 150 guests across two stunning destinations, curated around the theme 'Samarth, Believe. Begin. Become.' celebrating achievement, new beginnings and shared success.",
    gallery: gallery("Gala Dinner & Award Night for JSW Dulux", 8, "Gala Dinner and Award Night for JSW Dulux FTS 2026"),
  },
  {
    title: "Vivo HR Meet Conference",
    tag: "Phuket, Thailand",
    description:
      "A conference for 65 head office and state employees at the DoubleTree by Hilton, Phuket, featuring brainstorming activities and team-building sessions that fostered collaboration and camaraderie.",
    gallery: gallery("Vivo HR Meet Conference", 4, "Vivo HR Meet Conference in Phuket"),
  },
  {
    title: "ICC Men's T20 World Cup, Corporate Travel",
    tag: "Kolkata, Mumbai & Ahmedabad",
    description:
      "End-to-end corporate travel for 400+ guests across three cities for clients including Hindustan Coca-Cola Beverages and AkzoNobel, covering flights, hotels, transfers, meals and match tickets.",
    gallery: gallery("icc world cup", 2, "Corporate travel groups at the ICC Men's T20 World Cup"),
  },
  {
    title: "Global Chess League, Players Draft",
    tag: "Mumbai",
    description:
      "The Players Draft for Season 3 of the Global Chess League, bringing the world's finest chess minds, grandmasters and rising stars together under one roof for a landmark international season.",
    gallery: gallery("Global Chess League", 2, "Global Chess League Players Draft"),
  },
  {
    title: "44th FIDE Chess Olympiad, Torch Relay",
    tag: "75 locations across India",
    description:
      "Execution of the first-ever Torch Relay for the FIDE Chess Olympiad, carrying the torch over 27,000 km across every state and union territory of India in 38 days, by land, air and rail.",
    gallery: gallery("44th FIDE Chess Olympiad 2022, Chennai", 2, "44th FIDE Chess Olympiad Torch Relay, Chennai"),
  },
  {
    title: "Delhi International Open Grandmasters Chess",
    tag: "New Delhi",
    description:
      "Strategic branding and seamless execution for one of India's most prestigious chess stages, supporting an event that celebrated intellect, discipline and global talent.",
    gallery: gallery("Medallin x Chess Excellence", 3, "Delhi International Open Grandmasters Chess Tournament"),
  },
  {
    title: "T20 World Cup, Corporate Hospitality at the MCG",
    tag: "Melbourne, Australia",
    description:
      "Hosting clients from around the world for three weeks in Australia, including a marquee India versus Pakistan fixture at the Melbourne Cricket Ground.",
    gallery: gallery("t20 worldcup", 2, "Corporate hospitality at the T20 World Cup in Melbourne"),
  },
  {
    title: "FIA Formula E, Hyderabad ePrix",
    tag: "Hyderabad",
    description:
      "Fan experience activation for India's first FIA Formula E World Championship event since 2013, delivered alongside Mahindra Racing and Tech Mahindra.",
    gallery: gallery("Internationale de l’Automobile (FIA)", 1, "FIA Formula E Hyderabad ePrix fan experience"),
  },
  {
    title: "Tech Mahindra Global Chess League Partnership",
    tag: "Dubai",
    description:
      "Announcement of Medallin Sports as the proud events partner of Tech Mahindra's Global Chess League, kicking off a multi-season partnership at the board.",
    gallery: gallery("partner of Tech Mahindra's Global Chess League", 0, "Tech Mahindra Global Chess League partnership announcement in Dubai"),
  },
];

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
    </svg>
  );
}

export default function EventsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const [maxScroll, setMaxScroll] = useState(0);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const isPausedRef = useRef(false);
  const dragMovedRef = useRef(false);
  const dragStartXRef = useRef(0);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateMaxScroll = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      setMaxScroll(Math.max(0, track.scrollWidth - container.clientWidth));
    };

    updateMaxScroll();
    window.addEventListener("resize", updateMaxScroll);
    return () => window.removeEventListener("resize", updateMaxScroll);
  }, []);

  useEffect(() => {
    if (maxScroll <= 0) return;

    const timer = setInterval(() => {
      if (isPausedRef.current) return;

      const firstCard = trackRef.current?.firstElementChild as HTMLElement | null;
      if (!firstCard) return;

      const step = firstCard.offsetWidth + 16;
      const current = x.get();
      const next = current - step;

      if (Math.abs(next) >= maxScroll) {
        animate(x, 0, { duration: 0.7, ease: [0.22, 1, 0.36, 1] });
      } else {
        animate(x, next, { duration: 0.7, ease: [0.22, 1, 0.36, 1] });
      }
    }, AUTO_SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [maxScroll, x]);

  const pauseAutoSlide = () => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const scheduleResume = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, RESUME_DELAY_MS);
  };

  const openEvent = (event: EventItem) => {
    setActiveImageIndex(0);
    setActiveEvent(event);
  };

  return (
    <div className="relative">
      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-4 px-4 sm:px-6 lg:px-8"
          style={{ x, cursor: isPointerDown ? "grabbing" : "grab" }}
          drag="x"
          dragConstraints={{ left: -maxScroll, right: 0 }}
          dragElastic={0.08}
          dragTransition={{ power: 0.2, timeConstant: 200 }}
          onPointerDown={(event) => {
            dragMovedRef.current = false;
            dragStartXRef.current = event.clientX;
            setIsPointerDown(true);
            pauseAutoSlide();
          }}
          onPointerUp={() => setIsPointerDown(false)}
          onDrag={(event) => {
            const pointerEvent = event as unknown as PointerEvent;
            if (Math.abs(pointerEvent.clientX - dragStartXRef.current) > DRAG_MOVE_THRESHOLD_PX) {
              dragMovedRef.current = true;
            }
          }}
          onDragEnd={() => {
            setIsPointerDown(false);
            scheduleResume();
          }}
          onMouseEnter={pauseAutoSlide}
          onMouseLeave={() => {
            setIsPointerDown(false);
            scheduleResume();
          }}
        >
          {events.map((event) => (
            <button
              key={event.title}
              type="button"
              onClick={() => {
                if (dragMovedRef.current) return;
                openEvent(event);
              }}
              className="relative h-80 w-[85%] shrink-0 overflow-hidden rounded-3xl text-left sm:h-[26rem] sm:w-[46%] lg:w-[calc((100%-2rem)/3)]"
            >
              <Image
                src={event.gallery[0].src}
                alt={event.gallery[0].alt}
                fill
                draggable={false}
                className="pointer-events-none object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 46vw, 85vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-2xl bg-zinc-950/60 p-4 backdrop-blur-sm">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-400">
                  {event.tag}
                </p>
                <p className="mt-1.5 text-base font-medium text-white">{event.title}</p>
              </div>
            </button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-zinc-950/80 p-4"
            onClick={() => setActiveEvent(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white dark:bg-zinc-900"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setActiveEvent(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-sm hover:bg-white"
              >
                <CloseIcon />
              </button>

              <div className="relative h-64 w-full bg-zinc-100 sm:h-80 dark:bg-zinc-800">
                <Image
                  src={activeEvent.gallery[activeImageIndex].src}
                  alt={activeEvent.gallery[activeImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="672px"
                />
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-amber-600 dark:text-amber-400">
                  {activeEvent.tag}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-zinc-950 sm:text-3xl dark:text-white">
                  {activeEvent.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                  {activeEvent.description}
                </p>

                {activeEvent.gallery.length > 1 && (
                  <div className="mt-6 grid grid-cols-4 gap-2">
                    {activeEvent.gallery.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative aspect-square overflow-hidden rounded-lg ring-2 transition ${
                          index === activeImageIndex
                            ? "ring-amber-400"
                            : "ring-transparent hover:ring-black/10 dark:hover:ring-white/20"
                        }`}
                      >
                        <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="120px" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
