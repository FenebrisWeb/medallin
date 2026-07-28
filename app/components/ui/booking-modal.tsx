"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

interface BookingModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
    </svg>
  );
}

function BookingModalDialog({ isOpen, closeModal }: { isOpen: boolean; closeModal: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/80 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-lg sm:p-8 dark:bg-zinc-900"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={closeModal}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-black/[.04] dark:text-zinc-400 dark:hover:bg-white/[.08]"
            >
              <CloseIcon />
            </button>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
              Let's Plan It
            </p>
            <h2 className="mt-3 font-serif text-2xl leading-snug text-zinc-950 sm:text-3xl dark:text-white">
              Tell us what you have in mind.
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Share a few details and our team will get back to you shortly.
            </p>

            <form
              className="mt-6 flex flex-col gap-3"
              onSubmit={(event) => {
                event.preventDefault();
                closeModal();
              }}
            >
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-black/[.08] bg-transparent px-4 py-2.5 text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none dark:border-white/[.145] dark:text-zinc-200"
              />
              <input
                type="text"
                placeholder="Email or phone number"
                className="w-full rounded-xl border border-black/[.08] bg-transparent px-4 py-2.5 text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none dark:border-white/[.145] dark:text-zinc-200"
              />
              <textarea
                rows={3}
                placeholder="What are you planning?"
                className="w-full resize-none rounded-xl border border-black/[.08] bg-transparent px-4 py-2.5 text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none dark:border-white/[.145] dark:text-zinc-200"
              />

              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Submit request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <BookingModalDialog isOpen={isOpen} closeModal={closeModal} />
    </BookingModalContext.Provider>
  );
}
