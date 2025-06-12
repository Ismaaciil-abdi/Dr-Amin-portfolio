"use client";
import Image from "next/image";
import drAminImage from "@/assets/dr-amin.jpeg";
import BlurText from "@/components/blurText";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-32 md:py-48 lg:py-40 relative z-0 overflow-x-clip pointer-events-none justify-center items-center flex flex-col">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={drAminImage.src}
            className="rounded-full"
            alt="Dr Amin Abdi Ismail"
            placeholder="blur"
            blurDataURL={drAminImage.blurDataURL}
            width={150}
            height={150}
          />
          <BlurText
            text="Dr.Amin Abdi Ismail"
            className="text-sm text-zinc-500"
          />
          <motion.div
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto overflow-x-hidden"
          >
            <h1 className="font-serif text-3xl text-center md:text-5xl md:tracking-wider mt-8">
              Launching a Career in Evidence Based Dentistry
            </h1>
            <p className="mt-4 text-center text-zinc-500 font-sans md:text-lg">
              Building a Meaningful and Impactful Career by Grounding Dental
              Decisions in Science, Data, and Ethical Practice
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
