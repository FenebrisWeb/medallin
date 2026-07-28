const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm sm:flex-row">
        <p>&copy; {currentYear} Medallin. All rights reserved.</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  );
}
