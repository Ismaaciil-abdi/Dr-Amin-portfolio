"use client";
import { ArrowLeftRight } from "lucide-react";
import { motion } from "framer-motion";
import { Compare } from "@/components/ui/compare";
import FristImage from "@/assets/first-image.jpeg";
import SecondImage from "@/assets/second-image.jpeg";
export default function Compering() {
  return (
    <section className="bg-[#f8f8f6] py-20 sm:py-28">
      <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
      whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
    >
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">
            <ArrowLeftRight aria-hidden="true" className="size-3.5 text-emerald-800" /> Before &amp; after
          </div>
          <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-zinc-900 sm:text-4xl">Transformation, guided by precision.</h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-zinc-600 lg:mx-0">A closer look at the changes possible when thoughtful planning, advanced techniques, and personal care work together.</p>
          <p className="mt-8 text-xs leading-5 text-zinc-500">Move the slider to explore the result. Each treatment plan is tailored to the individual patient.</p>
        </div>
        <div className="relative mx-auto w-full max-w-[550px]">
          <div className="absolute -inset-3 rounded-[2rem] border border-zinc-300/80" />
          <Compare
            firstImage={FristImage.src}
            secondImage={SecondImage.src}
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="relative h-[310px] w-full overflow-hidden rounded-[1.7rem] border border-white shadow-xl shadow-zinc-900/10 sm:h-[430px] md:h-[500px]"
            slideMode="hover"
          />
        </div>
      </motion.div>
    </section>
  );
}
