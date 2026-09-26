"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import case1Before from "@/assets/case1before.jpg";

type CaseStudy = {
  id: string;
  number: string;
  title: string;
  summary: string;
  category: string;
  image: StaticImageData;
  imageAlt: string;
  href: string;
};

// Add future cases here; the gallery will automatically render a new card.
const caseStudies: CaseStudy[] = [
  {
    id: "upper-anterior-bridge",
    number: "01",
    title: "Management of fractured right central in pediatric patient",
    summary:
      "A 11 year boy presented with a fractured right central incisor after he have been knocked down by another boy to the ground, fracturing the tooth in the middle third.",
    category: "Restorative dentistry",
    image: case1Before,
    imageAlt:
      "Before treatment: Fractured right central incisor in pediatric patient",
    href: "/gallery/caseone",
  },
];

export default function Gallery() {
  return (
    <main className="min-h-screen overflow-hidden bg-white pt-28 sm:pt-36">
      <section className="relative border-b border-zinc-200 pb-16 sm:pb-20">
        <div className="absolute -right-28 -top-24 size-96 rounded-full border border-zinc-200" />
        <div className="absolute left-[8%] top-20 size-20 rounded-full bg-emerald-50" />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl px-6 sm:px-8"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Clinical portfolio
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Every case is a chance to listen, learn, and restore confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              A growing collection of clinical case studies, documenting the
              considered approach behind each treatment plan.
            </p>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-[#f8f8f6] px-4 py-2.5 text-sm text-zinc-600">
            <Stethoscope
              aria-hidden="true"
              className="size-4 text-emerald-800"
            />
            <span>
              <strong className="font-semibold text-zinc-900">
                {caseStudies.length}
              </strong>{" "}
              case {caseStudies.length === 1 ? "study" : "studies"} published
            </span>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#f8f8f6] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                Case studies
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl">
                The work, in detail.
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-6 text-zinc-500 sm:block">
              Each case reflects a commitment to careful planning and
              patient-centred care.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((caseStudy, index) => (
              <motion.article
                key={caseStudy.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-zinc-900/5"
              >
                <Link
                  href={caseStudy.href}
                  className="block"
                  aria-label={`Read ${caseStudy.title}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-200">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.imageAlt}
                      placeholder="blur"
                      fill
                      sizes="(min-width: 1280px) 22rem, (min-width: 768px) 45vw, calc(100vw - 3rem)"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-zinc-800 backdrop-blur">
                      Case {caseStudy.number}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
                      {caseStudy.category}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl leading-tight text-zinc-900">
                      {caseStudy.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-zinc-600">
                      {caseStudy.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors group-hover:text-emerald-800">
                      Explore the case{" "}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
