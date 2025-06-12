"use client";
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
      className="flex flex-wrap gap-6 justify-center"
    >
      {showcase.map((cases) => (
        <div key={cases.id}>
          <div className="bg-zinc-50 border rounded-lg w-[350px]">
            <Image
              className="p-4 rounded-4xl"
              placeholder="blur"
              blurDataURL={cases.pationImg.blurDataURL}
              src={cases.pationImg.src}
              alt={cases.alt}
              width={350}
              height={200}
            />
            <h1 className="px-3 text-lg md:text-2xl">{cases.title}</h1>
            <p className="px-3 text-sm mt-3 text-zinc-500 line-clamp-2">
              {cases.describtion}
            </p>
            <Link
              href="/gallery"
              className="flex items-center justify-center bg-zinc-900 text-center text-zinc-200 hover:bg-zinc-800 mt-5 rounded-b-lg py-3 transition-all duration-300"
            >
              View more
            </Link>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
