import Link from "next/link";
import HeroImageSlider from "@/app/components/home/hero-image-slider";
import type { HeroContent } from "@/app/types";

const heroContent: HeroContent = {
  headingLine1: "You won't remember the flight.",
  headingLine2: "You'll remember the final.",
  description:
    "Medallin designs and delivers hospitality, travel and access to the world's marquee sporting events, for CEOs, clients and teams who expect it done without a single hassle.",
  inputPlaceholder: "Enter your email or phone number",
  primaryCtaLabel: "Book a Consultation",
  secondaryCtaLabel: "Explore Experiences",
  images: [
    { src: "/home/hero/meda1.webp", alt: "Medallin premium sports and corporate experience" },
    { src: "/home/hero/meda2.webp", alt: "Medallin premium sports and corporate experience" },
    { src: "/home/hero/meda3.webp", alt: "Medallin premium sports and corporate experience" },
  ],
};

function ArrowUpRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M6 14L14 6M14 6H8M14 6V12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
      <path d="M3.5 6l6.5 5 6.5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto w-[90%] max-w-7xl py-16 sm:py-20 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        <div>
          <h1 className="whitespace-nowrap font-serif text-2xl font-medium leading-tight text-zinc-950 sm:text-3xl lg:text-4xl dark:text-white">
            {heroContent.headingLine1}
          </h1>
          <h1 className="mt-2 whitespace-nowrap font-serif text-2xl italic leading-tight text-zinc-500 sm:text-3xl lg:text-4xl dark:text-zinc-400">
            {heroContent.headingLine2}
            <span className="ml-2 inline-block h-2 w-2 rounded-full bg-amber-400 align-middle" />
          </h1>

          <p className="mt-6 max-w-md text-base text-zinc-600 dark:text-zinc-400">
            {heroContent.description}
          </p>

          <form className="mt-8 flex w-full max-w-md items-center gap-2 rounded-full border border-black/[.08] bg-white py-1.5 pl-4 pr-1.5 shadow-sm dark:border-white/[.145] dark:bg-zinc-900">
            <MailIcon />
            <input
              type="text"
              inputMode="email"
              placeholder={heroContent.inputPlaceholder}
              className="w-full bg-transparent text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none dark:text-zinc-200"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              {heroContent.primaryCtaLabel}
              <ArrowUpRightIcon />
            </button>
          </form>

          <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span>or</span>
            <Link
              href="#"
              className="flex items-center gap-1.5 rounded-full border border-black/[.08] px-4 py-2 font-medium text-zinc-700 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-200 dark:hover:bg-white/[.08]"
            >
              {heroContent.secondaryCtaLabel}
              <ArrowUpRightIcon />
            </Link>
          </div>
        </div>

        <HeroImageSlider images={heroContent.images} />
      </div>
    </section>
  );
}
