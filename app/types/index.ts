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
