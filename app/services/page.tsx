import ServicesHeader from "@/app/components/services/services-header";
import ServiceDetailRow from "@/app/components/services/service-detail";
import ServicesCta from "@/app/components/services/services-cta";
import { services } from "@/app/components/services/services-data";
import Reveal from "@/app/components/ui/reveal";

export default function Services() {
  return (
    <div className="flex-1">
      <ServicesHeader />

      <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-16 py-16 sm:gap-20 sm:py-20 lg:gap-24 lg:py-24">
        {services.map((service, index) => (
          <div
            key={service.slug}
            className={
              index === 0
                ? undefined
                : "border-t border-black/[.08] pt-16 sm:pt-20 lg:pt-24 dark:border-white/[.145]"
            }
          >
            <Reveal>
              <ServiceDetailRow
                service={service}
                reverse={index % 2 === 1}
                priority={index === 0}
              />
            </Reveal>
          </div>
        ))}
      </div>

      <Reveal>
        <ServicesCta />
      </Reveal>
    </div>
  );
}
