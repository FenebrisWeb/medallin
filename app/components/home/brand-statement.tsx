import type { BrandStatementContent } from "@/app/types";

const brandStatement: BrandStatementContent = {
  setup: "We don't sell flights, hotels or tickets.",
  emphasis: "We sell the feeling of being there.",
};

export default function BrandStatement() {
  return (
    <section className="mx-auto w-[90%] max-w-7xl py-14 sm:py-16 lg:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="h-2 w-2 rounded-full bg-amber-400" />

        <p className="mt-5 font-serif text-2xl leading-snug text-zinc-950 sm:text-3xl lg:text-4xl dark:text-white">
          {brandStatement.setup}{" "}
          <span className="italic text-zinc-500 dark:text-zinc-400">
            {brandStatement.emphasis}
          </span>
        </p>
      </div>
    </section>
  );
}
