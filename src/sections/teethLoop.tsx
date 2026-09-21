"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Tooth({ accent = false }: { accent?: boolean }) {
  return (
    <svg viewBox="0 0 72 88" aria-hidden="true" className="h-16 w-14 sm:h-20 sm:w-[4.5rem]">
      <path
        d="M18 8c8 0 11 4 18 4s10-4 18-4c12 0 18 9 18 22 0 18-10 30-14 46-2 9-5 12-9 12-5 0-6-7-8-16-1-5-3-8-7-8s-6 3-7 8c-2 9-3 16-8 16-4 0-7-3-9-12C6 60-4 48-4 30-4 17 6 8 18 8Z"
        fill={accent ? "#b7d6c6" : "#ffffff"}
        stroke={accent ? "#5f8f78" : "#d4d4d8"}
        strokeWidth="2"
      />
      <path d="M22 25c4 3 9 4 14 4s10-1 14-4" fill="none" stroke={accent ? "#5f8f78" : "#a1a1aa"} strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

const teeth = Array.from({ length: 12 }, (_, index) => index);

export default function TeethLoop() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#f8f8f6] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">
          <Sparkles aria-hidden="true" className="size-3.5 text-emerald-800" /> Small habits, lasting care
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl leading-tight tracking-tight text-zinc-900 sm:text-4xl">A healthier smile is built one thoughtful step at a time.</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-600">Prevention, informed treatment, and consistent care all have a place in a confident oral-health routine.</p>
      </div>

      <div className="relative mt-12 overflow-hidden border-y border-zinc-200 bg-[#f8f8f6] py-6 sm:py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f8f8f6] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f8f8f6] to-transparent sm:w-32" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center gap-5 pr-5 sm:gap-8 sm:pr-8"
        >
          {[...teeth, ...teeth].map((tooth, index) => (
            <div key={`${tooth}-${index}`} className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white shadow-sm sm:size-24">
              <Tooth accent={index % 4 === 0} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl justify-center px-6 sm:px-8">
        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-emerald-800">
          Have a question about dental care? <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
