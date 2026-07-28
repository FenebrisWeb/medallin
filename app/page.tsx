import Hero from "@/app/components/home/hero";
import BrandStatement from "@/app/components/home/brand-statement";
import Events from "@/app/components/home/events";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <BrandStatement />
      <Events />
    </div>
  );
}
