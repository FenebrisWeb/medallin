import Hero from "@/app/components/home/hero";
import BrandStatement from "@/app/components/home/brand-statement";
import Events from "@/app/components/home/events";
import CorporateSplit from "@/app/components/home/corporate-split";
import Services from "@/app/components/home/services";
import About from "@/app/components/home/about";
import Clients from "@/app/components/home/clients";
import Reveal from "@/app/components/ui/reveal";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <Reveal>
        <BrandStatement />
      </Reveal>
      <Reveal>
        <Events />
      </Reveal>
      <Reveal>
        <CorporateSplit />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Clients />
      </Reveal>
    </div>
  );
}
