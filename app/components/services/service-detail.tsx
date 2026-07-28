import HeroImageSlider from "@/app/components/home/hero-image-slider";
import type { ServiceDetail } from "@/app/types";

export default function ServiceDetailRow({
  service,
  reverse,
  priority,
}: {
  service: ServiceDetail;
  reverse?: boolean;
  priority?: boolean;
}) {
  return (
    <div id={service.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : undefined}>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
          {service.index} — {service.title}
        </p>
        <h3 className="mt-4 max-w-md text-2xl font-bold leading-snug text-zinc-950 sm:text-3xl dark:text-white">
          {service.headline.lead} <span className="text-amber-600 dark:text-amber-400">{service.headline.accent}</span>
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
          {service.body}
        </p>
        <span className="mt-5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-zinc-400 dark:text-zinc-500">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
          {service.tag}
        </span>
      </div>

      <div className={reverse ? "lg:order-1" : undefined}>
        <HeroImageSlider images={service.images} priority={priority} />
      </div>
    </div>
  );
}
