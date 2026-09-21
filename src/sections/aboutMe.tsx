"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import aboutMeImage from "@/assets/about-image.jpeg";
import MyWork from "./mywork";

const socialLinks = [
  { href: "https://www.linkedin.com/in/amin-abdi-ismael-724617226/", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.facebook.com/amin.abdirahman.117497", label: "Facebook", icon: Facebook },
];

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute right-0 top-20 -z-0 size-72 translate-x-1/2 rounded-full border border-zinc-200" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="absolute -inset-3 rounded-[2rem] border border-zinc-200" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-zinc-100">
              <Image src={aboutMeImage} alt="Dr. Amin Abdi Ismail" placeholder="blur" fill sizes="(min-width: 1024px) 36vw, (min-width: 640px) 24rem, calc(100vw - 3rem)" className="object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-4 rounded-2xl border border-zinc-200 bg-[#f8f8f6] px-4 py-3 shadow-lg shadow-zinc-900/5 sm:-right-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">Based in</p>
              <p className="mt-1 font-serif text-lg text-zinc-800">Borama, Somaliland</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">The person behind the practice</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight tracking-tight text-zinc-900 sm:text-4xl">Careful dentistry starts with a patient-first mindset.</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-600 lg:mx-0">I&apos;m Dr. Amin Abdi Ismail, a newly qualified general dentist committed to delivering high-quality, evidence-based care. I&apos;m continually learning, refining my clinical skills, and building a strong foundation in everyday dentistry.</p>

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Approach</p><p className="mt-2 font-serif text-lg text-zinc-800">Evidence before assumption.</p></div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Focus</p><p className="mt-2 font-serif text-lg text-zinc-800">Everyday care, done well.</p></div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row lg:items-center">
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-emerald-800">More about my journey <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
              <Link href="/amin-abdi-ismail-cv.pdf" download className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-950"><Download aria-hidden="true" className="size-4" /> Download CV</Link>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ href, label, icon: Icon }) => <Link key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Visit Dr. Amin's ${label} profile`} className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-900 hover:text-white"><Icon aria-hidden="true" className="size-4" /></Link>)}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 border-t border-zinc-200 pt-16 sm:mt-32">
          <div className="mx-auto mb-10 max-w-2xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">Selected clinical work</p><h2 className="mt-3 font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl">Learning through every case.</h2></div>
          <MyWork />
        </div>
      </div>
    </section>
  );
}
