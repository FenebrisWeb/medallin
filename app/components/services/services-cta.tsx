import Link from "next/link";

function ArrowUpRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M6 14L14 6M14 6H8M14 6V12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServicesCta() {
  return (
    <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center border-t border-black/[.08] py-16 text-center sm:py-20 lg:py-24 dark:border-white/[.145]">
      <h2 className="font-serif text-2xl leading-snug text-zinc-950 sm:text-3xl lg:text-4xl dark:text-white">
        Not sure which service you need?
      </h2>
      <p className="mt-4 max-w-md text-base text-zinc-600 dark:text-zinc-400">
        Tell us what you're planning and we'll put the right team on it.
      </p>
      <Link
        href="#"
        className="mt-7 flex items-center gap-1.5 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
      >
        Book a Consultation
        <ArrowUpRightIcon />
      </Link>
    </div>
  );
}
