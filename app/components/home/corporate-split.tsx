import Image from "next/image";
import Link from "next/link";
import type { CorporateSplitContent } from "@/app/types";

const corporateSplit: CorporateSplitContent = {
  eyebrow: "Corporate & Incentive Travel",
  headline: "Reward your best people with a story, not a spreadsheet.",
  description:
    "From a 70-guest fan meet in Hanoi to a 150-guest gala across Krabi and Phuket, we handle flights, visas, venues and every moment in between.",
  ctaLabel: "Plan a Corporate Trip",
  ctaHref: "#",
  manifest: [
    { label: "Client", value: "Vivo" },
    { label: "Occasion", value: "Elevate HR Meet 2026" },
    { label: "Destination", value: "Phuket, Thailand" },
    { label: "Guests", value: "65" },
    { label: "Status", value: "Delivered" },
  ],
  image: {
    src: "/events/Vivo HR Meet Conference.jfif",
    alt: "Vivo Elevate HR Meet 2026 conference in Phuket, Thailand",
  },
};

function ArrowUpRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M6 14L14 6M14 6H8M14 6V12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CorporateSplit() {
  return (
    <section className="w-[90%] mx-auto py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
          {corporateSplit.eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-2xl leading-snug text-zinc-950 sm:text-3xl lg:text-4xl dark:text-white">
          {corporateSplit.headline}
        </h2>
        <p className="mt-5 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
          {corporateSplit.description}
        </p>
        <Link
          href={corporateSplit.ctaHref}
          className="mt-7 flex items-center gap-1.5 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          {corporateSplit.ctaLabel}
          <ArrowUpRightIcon />
        </Link>
      </div>

      <div className="relative mt-12 aspect-[16/8] w-full overflow-hidden rounded-3xl sm:mt-16">
        <Image
          src={corporateSplit.image.src}
          alt={corporateSplit.image.alt}
          fill
          className="object-cover"
          sizes="90vw"
        />
      </div>

      <dl className="mx-auto mt-8 flex max-w-4xl flex-wrap items-start justify-center gap-x-10 gap-y-6">
        {corporateSplit.manifest.map((field, index) => (
          <div
            key={field.label}
            className={`text-center ${index === 0 ? "" : "border-l border-black/[.08] pl-10 dark:border-white/[.145]"}`}
          >
            <dt className="text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
              {field.label}
            </dt>
            <dd className="mt-1 text-sm font-medium text-zinc-950 sm:text-base dark:text-white">
              {field.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
