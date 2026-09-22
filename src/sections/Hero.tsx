"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import drAminImage from "@/assets/dr-amin.jpeg";

const riseIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7.2 3.8c1.5 0 2.5.8 4.8.8s3.3-.8 4.8-.8c2.5 0 4.2 2.1 3.5 5.2l-1.8 8.1c-.4 1.9-1.5 3.1-2.7 3.1-1.3 0-1.5-1.7-2-3.5-.4-1.4-.8-2.1-1.8-2.1s-1.4.7-1.8 2.1c-.5 1.8-.7 3.5-2 3.5-1.2 0-2.3-1.2-2.7-3.1L3.7 9C3 5.9 4.7 3.8 7.2 3.8Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8f8f6] pb-14 pt-32 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_28%,rgba(217,229,222,0.8),transparent_23rem),radial-gradient(circle_at_10%_88%,rgba(235,226,207,0.78),transparent_27rem)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-full w-px bg-zinc-200/70" />
      <div className="absolute left-[8%] top-28 -z-10 size-36 rounded-full border border-zinc-300/70 sm:size-52" />
      <div className="absolute right-[6%] top-20 -z-10 size-20 rounded-full border border-zinc-300/70 sm:size-32" />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
            <motion.div initial="hidden" animate="visible" transition={{ duration: 0.55 }} variants={riseIn} className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600 shadow-sm backdrop-blur">
              <ToothIcon className="size-3.5 text-emerald-700" />
              Evidence-led dental care
            </motion.div>

            <motion.h1 initial="hidden" animate="visible" transition={{ duration: 0.65, delay: 0.1 }} variants={riseIn} className="mt-6 max-w-3xl font-serif text-4xl leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
              A thoughtful approach to <em className="font-normal text-emerald-800">healthier smiles.</em>
            </motion.h1>

            <motion.p initial="hidden" animate="visible" transition={{ duration: 0.65, delay: 0.2 }} variants={riseIn} className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg lg:mx-0">
              Dr. Amin Abdi Ismail is building a practice rooted in science, careful listening, and the confidence that comes from making each clinical decision count.
            </motion.p>

            <motion.div initial="hidden" animate="visible" transition={{ duration: 0.65, delay: 0.3 }} variants={riseIn} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-lg hover:shadow-zinc-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2">
                Let&apos;s connect <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
              <Link href="/amin-abdi-ismail-cv.pdf" download className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-5 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2">
                <Download aria-hidden="true" className="size-4" /> View credentials
              </Link>
            </motion.div>

            <motion.div initial="hidden" animate="visible" transition={{ duration: 0.65, delay: 0.4 }} variants={riseIn} className="mt-10 flex items-center justify-center gap-3 text-left lg:justify-start">
              <span className="flex size-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-sm font-serif text-zinc-800">01</span>
              <p className="text-xs leading-5 text-zinc-500">General dentist based in <strong className="font-semibold text-zinc-700">Borama, Somaliland</strong></p>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.15 }} className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2rem] border border-zinc-300/70" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-zinc-200 shadow-2xl shadow-zinc-900/10">
              <Image src={drAminImage} alt="Dr. Amin Abdi Ismail" placeholder="blur" fill priority sizes="(min-width: 1024px) 42vw, (min-width: 640px) 28rem, calc(100vw - 3rem)" className="object-cover" />
            </div>

            <div className="mt-5 flex items-end justify-between gap-4 px-1">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Dr. Amin Abdi Ismail</p>
                <p className="mt-1 font-serif text-xl text-zinc-900">General Dentist</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white/95 p-3.5 shadow-xl shadow-zinc-900/10 backdrop-blur sm:p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Care philosophy</p>
                <p className="mt-1 max-w-36 font-serif text-sm leading-5 text-zinc-800 sm:max-w-44 sm:text-base">Science, skill &amp; empathy.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <Link href="/about" className="mx-auto mt-16 flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 transition-colors hover:text-zinc-900 lg:mt-20">
          Discover the practice <ArrowDown aria-hidden="true" className="size-4 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
