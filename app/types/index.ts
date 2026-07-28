export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface WrapperProps {
  children: React.ReactNode;
}

export interface HeroContent {
  headingLine1: string;
  headingLine2: string;
  description: string;
  inputPlaceholder: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  images: HeroImage[];
}

export interface HeroImage {
  src: string;
  alt: string;
}

export interface BrandStatementContent {
  setup: string;
  emphasis: string;
}

export interface EventItem {
  title: string;
  tag: string;
  description: string;
  gallery: HeroImage[];
}

export interface ManifestField {
  label: string;
  value: string;
}

export interface CorporateSplitContent {
  eyebrow: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  manifest: ManifestField[];
  image: HeroImage;
}

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutContent {
  eyebrow: string;
  headline: string;
  description: string;
  stats: AboutStat[];
  image: HeroImage;
}

export interface ServiceModule {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  tag: string;
  icon: string;
  image?: HeroImage;
}

export interface ServiceDetail {
  slug: string;
  index: string;
  title: string;
  headline: { lead: string; accent: string };
  body: string;
  tag: string;
  images: HeroImage[];
}

export interface ServicesPageContent {
  eyebrow: string;
  headline: { lead: string; accent: string };
  description: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export interface FooterContent {
  positioningStatement: string;
  email: string;
  phone: string;
  city: string;
  ctaLabel: string;
  ctaHref: string;
  columns: FooterColumn[];
  stats: string[];
  socialLinks: NavLink[];
  legalEntity: string;
}
