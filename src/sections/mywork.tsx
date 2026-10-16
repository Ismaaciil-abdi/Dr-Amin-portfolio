"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import caseImage from "@/assets/case1before.jpg";
import secondCaseImage from "@/assets/case_two/case_02_Before.jpg";
import Link from "next/link";
import Image from "next/image";

export default function MyWork() {
  const showcase = [
    {
      id: 1,
      number: "01",
      image: caseImage,
      alt: "Before treatment: fractured right central incisor in a pediatric patient",
      title: "Management of fractured right central in pediatric patient",
      description:
        "A 11 year boy presented with a fractured right central incisor after he have been knocked down by another boy to the ground, fracturing the tooth in the middle third.",
      href: "/gallery/caseone",
    },
    {
      id: 2,
      number: "02",
      image: secondCaseImage,
      alt: "Before treatment: first premolar with extensive decay",
      title:
        "Restoring a first premolar with a challenging deep marginal elevation",
      description:
        "A 16-year-old female patient presented with a diastema and slight calculus on her lower incisors. During the assessment, a severely decayed upper first premolar was found and considered restorable.",
      href: "/gallery/casetwo",
    },
  ];
  return (
    <div className="mx-auto grid max-w-5xl gap-10">
      {showcase.map((study, index) => (
        <motion.article
          key={study.id}
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: index * 0.12 }}
          className="group grid overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-[#f8f8f6] shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-zinc-900/5 md:grid-cols-[0.92fr_1.08fr]"
        >
          <div className="relative min-h-64 overflow-hidden bg-zinc-200 md:min-h-full">
            <Image
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              placeholder="blur"
              src={study.image}
              alt={study.alt}
              fill
              sizes="(min-width: 768px) 24rem, 100vw"
            />
          </div>
          <div className="flex flex-col p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
              Case study {study.number}
            </p>
            <h3 className="mt-4 font-serif text-2xl leading-tight text-zinc-900 sm:text-3xl">
              {study.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base">
              {study.description}
            </p>
            <Link
              href={study.href}
              className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-emerald-800"
            >
              Explore the case{" "}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
