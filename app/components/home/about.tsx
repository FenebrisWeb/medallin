import Image from "next/image";
import type { AboutContent } from "@/app/types";

const aboutContent: AboutContent = {
  eyebrow: "About Medallin",
  headline: "A communication agency, built through sport.",
  description:
    "We believe sport has the power to bring people together. Medallin Sports & Entertainment helps brands and organisations engage their audiences through hospitality, travel and integrated marketing, delivered end-to-end across B2B, B2C and B2G channels for the world's most prominent tournaments.",
  stats: [
    { value: "10,000+", label: "Travelers hosted" },
    { value: "B2B · B2C · B2G", label: "Channels served" },
    { value: "Global", label: "Marquee events covered" },
  ],
  image: {
    src: "/home/hero/meda2.webp",
    alt: "Medallin team delivering a premium sports and corporate experience",
  },
};

export default function About() {
  return (
    <section id="about" className="mx-auto w-[90%] max-w-7xl py-16 sm:py-20 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
          <Image
            src={aboutContent.image.src}
            alt={aboutContent.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
            {aboutContent.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-2xl leading-snug text-zinc-950 sm:text-3xl lg:text-4xl dark:text-white">
            {aboutContent.headline}
          </h2>
          <p className="mt-6 max-w-md text-base text-zinc-600 dark:text-zinc-400">
            {aboutContent.description}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-black/[.08] pt-6 dark:border-white/[.145]">
            {aboutContent.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-base font-medium text-zinc-950 sm:text-lg dark:text-white">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
