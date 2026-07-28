import Image from "next/image";
import type { ClientLogo } from "@/app/types";

const logoFiles = [
  "1593078273.png",
  "1593083135.png",
  "1593083235.png",
  "1593083256.png",
  "1593083280.png",
  "1593083305.png",
  "1593083324.png",
  "1593083355.png",
  "1593083439.png",
  "1593083469.png",
  "1593083497.png",
  "1593083519.png",
  "1593083549.png",
  "1593083576.png",
  "1593083602.png",
  "1593083627.png",
  "1593083650.png",
  "1593083671.png",
  "1593083712.png",
  "1593083734.png",
  "1593083758.png",
  "1593083778.png",
  "1593083798.png",
  "1593083820.png",
  "1593083846.png",
  "1593083885.png",
  "1593083913.png",
  "1593083943.png",
  "1593083964.png",
  "1593083983.png",
  "1593084006.png",
];

const clientLogos: ClientLogo[] = logoFiles.map((file) => ({
  src: `/client-logo/${file}`,
  alt: "Medallin client logo",
}));

const marqueeLogos = [...clientLogos, ...clientLogos];

export default function Clients() {
  return (
    <section id="clients" className="w-full py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
          Our Clients
        </p>
        <h2 className="mt-4 font-serif text-2xl leading-snug text-zinc-950 sm:text-3xl lg:text-4xl dark:text-white">
          Brands who trust us with <em className="italic text-zinc-500 dark:text-zinc-400">the moment.</em>
        </h2>
        <p className="mt-4 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
          From global beverage brands to national leagues, here's who we've delivered for.
        </p>
      </div>

      <div className="group relative mx-auto mt-12 max-w-[1800px] overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 dark:from-zinc-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24 dark:from-zinc-950" />

        <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="flex h-28 w-56 shrink-0 items-center justify-center rounded-3xl border border-black/[.08] bg-white shadow-sm sm:h-32 sm:w-64 dark:border-white/[.145] dark:bg-zinc-900"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="h-16 w-auto max-w-[75%] object-contain sm:h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
