"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import caseImage from "@/assets/showcase/case1bf_1.jpeg";
import Link from "next/link";
import Image from "next/image";

export default function MyWork() {
  const showcase = [
    {
      id: 1,
      pationImg: caseImage,
      alt: "Case one before",
      title: "Dislodged upper anterior PFM bridge",
      describtion:
        "UR3, UR2, UR1: Severely decayed; planned as bridge abutments, UR1: Requires only a direct composite restoration",
    },
  ];
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
      whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl"
    >
      {showcase.map((cases) => (
        <article key={cases.id} className="group grid overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-[#f8f8f6] shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-zinc-900/5 md:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-64 overflow-hidden bg-zinc-200 md:min-h-full">
            <Image
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              placeholder="blur"
              src={cases.pationImg}
              alt={cases.alt}
              fill
              sizes="(min-width: 768px) 24rem, 100vw"
            />
          </div>
          <div className="flex flex-col p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">Case study 01</p>
            <h3 className="mt-4 font-serif text-2xl leading-tight text-zinc-900 sm:text-3xl">{cases.title}</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">{cases.describtion}</p>
            <Link href="/gallery/caseone" className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-emerald-800">
              Explore the case <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </article>
      ))}
    </motion.div>
  );
}
