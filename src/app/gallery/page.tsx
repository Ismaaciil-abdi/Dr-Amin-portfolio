"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import case1Bf from "@/assets/showcase/case1bf_1.jpeg";
import Link from "next/link";

export default function Gallery() {
  return (
    <motion.main
      initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
      whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container pt-32 mb-16 max-w-3xl mx-auto"
    >
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 font-serif">
        Where Smiles Come to Life
      </h1>
      <div className="px-4 mt-16 md:px-8 lg:px-0 flex flex-col md:flex-row items-center gap-4">
        <Image
          className="rounded-lg w-full md:w-[230px]"
          src={case1Bf}
          alt="Case one before"
          width={200}
          height={200}
        />
        <div className="flex flex-col justify-center md:text-left">
          <h1 className="text-lg md:text-2xl">
            Dislodged upper anterior PFM bridge
          </h1>
          <p className="text-zinc-500 text-sm line-clamp-1">
            UR3, UR2, UR1: Severely decayed; planned as bridge abutments, UR1:
            Requires only a direct composite restoration
          </p>
          <Link
            className="flex items-center  w-40 px-3 py-2 mt-4 rounded-md justify-center bg-zinc-900 text-center text-zinc-200 hover:bg-zinc-800 transition-all duration-300"
            href="/gallery/caseone"
          >
            Read more
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
