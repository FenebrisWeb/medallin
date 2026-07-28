import Image from "next/image";
import Link from "next/link";
import type { FooterContent } from "@/app/types";

const footerContent: FooterContent = {
  positioningStatement:
    "Premium sports travel and corporate experience design, curated end-to-end.",
  email: "hello@medallin.com",
  phone: "+91 98765 43210",
  city: "Gurgaon, India",
  ctaLabel: "Book a Consultation",
  ctaHref: "#",
  columns: [
    {
      heading: "Explore",
      links: [
        { label: "Experiences", href: "/services" },
        { label: "Corporate Travel", href: "/#corporate" },
        { label: "Upcoming Events", href: "/events" },
        { label: "Gallery", href: "/#events" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Medallin", href: "/#about" },
        { label: "Clients", href: "/#clients" },
        { label: "Careers", href: "/careers" },
        { label: "Magazine", href: "/magazine" },
      ],
    },
  ],
  stats: [
    "10,000+ travelers",
    "40+ marquee events",
    "Trusted by Coca-Cola, Uber, Vivo, Tech Mahindra",
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/medallin-sports-entertainment" },
    { label: "Instagram", href: "https://www.instagram.com/medallinsports" },
  ],
  legalEntity: "Medallin Sports & Entertainment",
};

function ArrowUpRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M6 14L14 6M14 6H8M14 6V12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
      <path d="M3.5 6l6.5 5 6.5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path
        d="M4 4.5c0-.6.4-1 1-1h2.2c.5 0 .9.3 1 .8l.7 2.6c.1.4 0 .8-.3 1.1L7.4 9.2a10 10 0 0 0 4.4 4.4l1.2-1.2c.3-.3.7-.4 1.1-.3l2.6.7c.5.1.8.5.8 1V16c0 .6-.4 1-1 1h-1C8.5 17 4 12.5 4 6.5v-1z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M10 18s6-5.2 6-9.7A6 6 0 0 0 4 8.3C4 12.8 10 18 10 18z" strokeLinejoin="round" />
      <circle cx="10" cy="8.3" r="2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 3.9 0 4.4 2.6 4.4 5.9V21h-4v-5.4c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21H9z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialIcons: Record<string, () => React.ReactElement> = {
  LinkedIn: LinkedInIcon,
  Instagram: InstagramIcon,
};

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto w-[90%] max-w-7xl py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src="/logo.png" alt="Medallin" width={140} height={40} className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
              {footerContent.positioningStatement}
            </p>
          </div>

          {footerContent.columns.map((column) => (
            <div key={column.heading}>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
                {column.heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <a
                  href={`mailto:${footerContent.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-zinc-950 dark:hover:text-white"
                >
                  <MailIcon />
                  {footerContent.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerContent.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-zinc-950 dark:hover:text-white"
                >
                  <PhoneIcon />
                  {footerContent.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <PinIcon />
                {footerContent.city}
              </li>
            </ul>

            <Link
              href={footerContent.ctaHref}
              className="mt-5 flex w-fit items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              {footerContent.ctaLabel}
              <ArrowUpRightIcon />
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-black/[.08] pt-6 text-center text-sm text-zinc-500 dark:border-white/[.145] dark:text-zinc-400">
          {footerContent.stats.join(" · ")}
        </div>
      </div>

      <div className="border-t border-black/[.08] dark:border-white/[.145]">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-between gap-3 py-6 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
          <p>
            &copy; {currentYear} {footerContent.legalEntity}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {footerContent.socialLinks.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[.08] text-zinc-600 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-300 dark:hover:bg-white/[.08]"
                >
                  {Icon ? <Icon /> : social.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
