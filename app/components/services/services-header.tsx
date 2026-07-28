import type { ServicesPageContent } from "@/app/types";

const content: ServicesPageContent = {
  eyebrow: "What We Do",
  headline: { lead: "What changes when your event is run by", accent: "Medallin." },
  description:
    "From the event itself to the brand behind it, we run every piece end-to-end, across sport, talent, sponsorship and production.",
};

export default function ServicesHeader() {
  return (
    <div className="mx-auto w-[90%] max-w-7xl pt-16 sm:pt-20 lg:pt-24">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
        {content.eyebrow}
      </p>
      <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-snug text-zinc-950 sm:text-4xl lg:text-5xl dark:text-white">
        {content.headline.lead}{" "}
        <span className="text-amber-600 dark:text-amber-400">{content.headline.accent}</span>
      </h1>
      <p className="mt-5 max-w-lg text-base text-zinc-600 dark:text-zinc-400">
        {content.description}
      </p>
    </div>
  );
}
