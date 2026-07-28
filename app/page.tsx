import Hero from "@/app/components/home/hero";
import BrandStatement from "@/app/components/home/brand-statement";
import Events from "@/app/components/home/events";
import CorporateSplit from "@/app/components/home/corporate-split";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <BrandStatement />
      <Events />
      <CorporateSplit />
    </div>
  );
}
