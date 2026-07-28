import type { ServiceDetail } from "@/app/types";

function gallery(base: string, extraCount: number, alt: string) {
  const files = [`${base}.jpg`, ...Array.from({ length: extraCount }, (_, i) => `${base} ${i + 2}.jpg`)];
  return files.map((file) => ({ src: `/services/${file}`, alt }));
}

export const services: ServiceDetail[] = [
  {
    slug: "event",
    index: "01",
    title: "Event",
    headline: { lead: "Every event becomes part of the", accent: "culture." },
    body:
      "Medallin operates and commercially coordinates memorable events that influence every facet of culture, from sports events and product launches to conferences, motor sports and dealer meets.",
    tag: "For Coca-Cola, Tata AIG, Uber, Nippon",
    images: gallery("Event", 2, "Medallin event management"),
  },
  {
    slug: "talent",
    index: "02",
    title: "Talent",
    headline: { lead: "Athletes get a team behind their", accent: "name." },
    body:
      "Athletes are the heart of sports. We build sporting talent and nurture them across brand building, endorsements, public relations, social media management and logistical assistance.",
    tag: "Ravindra Jadeja · Hanuma Vihari · Arjun Vajpai · Manu Bhaker",
    images: gallery("Talent", 2, "Medallin talent management"),
  },
  {
    slug: "sports-ticketing-tours",
    index: "03",
    title: "Sports Ticketing & Tours",
    headline: { lead: "Fans get closer to the game than", accent: "ever." },
    body:
      "Official tickets to FIFA, Wimbledon, Formula One and more, curated with end-to-end travel packages and exclusive fan experiences, from player meets to dressing-room visits.",
    tag: "Official access, curated",
    images: gallery("SPORTS TICKETING & TOURS", 2, "Medallin sports ticketing and tours"),
  },
  {
    slug: "sponsorship",
    index: "04",
    title: "Sponsorship",
    headline: { lead: "Brands find the right stage to be", accent: "seen." },
    body:
      "We work with sporting leagues, national and domestic teams and sporting properties in securing sponsorships, analysing brand attributes to connect you with the correct property.",
    tag: "Strategic brand-property fit",
    images: gallery("Sponsorship", 4, "Medallin sponsorship"),
  },
  {
    slug: "brand-activation",
    index: "05",
    title: "Brand Activation",
    headline: { lead: "Awareness turns into behaviour, not just", accent: "impressions." },
    body:
      "Our activation department designs experiential campaigns that increase brand awareness, reach new demographics and encourage behavioural change, built around your core message.",
    tag: "Experiential by design",
    images: gallery("BRAND ACTIVATION", 5, "Medallin brand activation"),
  },
  {
    slug: "creative",
    index: "06",
    title: "Creative",
    headline: { lead: "One identity, told the same way", accent: "everywhere." },
    body:
      "We blend the world's best personalities and brands with our own perspective to generate original content, from brand identity and creative direction to collateral and campaigns.",
    tag: "Identity to execution",
    images: gallery("CREATIVE", 2, "Medallin creative services"),
  },
  {
    slug: "licensing-merchandising",
    index: "07",
    title: "Licensing & Merchandising",
    headline: { lead: "IP turns into revenue, not just", accent: "recognition." },
    body:
      "Via qualified license management, we help leading companies and trademarks monetise their intellectual property while developing new marketing and promotional avenues.",
    tag: "IP, monetised",
    images: gallery("LICENSING & MERCHANDISING", 2, "Medallin licensing and merchandising"),
  },
  {
    slug: "production-broadcasting",
    index: "08",
    title: "Production & Broadcasting",
    headline: { lead: "Every match reaches fans on every", accent: "screen." },
    body:
      "Our sports production solutions help produce entertaining sport events and engage fans across multiple screens, through partnerships with top broadcasting companies.",
    tag: "Broadcast-ready",
    images: gallery("PRODUCTION & BROADCASTING", 3, "Medallin production and broadcasting"),
  },
];
