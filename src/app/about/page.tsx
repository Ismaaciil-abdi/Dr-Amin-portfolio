"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Gradution from "@/assets/gradution.jpeg";
import LetterCv from "@/assets/letter-cv.png";
import Links from "@/components/links";
import { BackgroundEduc } from "@/components/background";
import { url } from "inspector";
export default function About() {
  return (
    <main className="container pt-32 mb-16 max-w-3xl mx-auto">
      {/* Grid layout */}
      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col gap-5 px-5 md:grid md:grid-cols-4 md:grid-rows-4 md:gap-4 mx-w-5xl mx-auto">
          <div className="col-span-2 row-span-2 rounded-lg mesh-gradient">
            <div className="p-3 text-white">
              <hr className="mb-5 mt-5" />
              <p>
                Hi, I&apos;m Amin Abdi Ismail — a 23-year-old dentist from
                Borama, passionate about creating bright smiles and promoting
                oral health. Scroll down to learn more about my work and
                journey.
              </p>
              <hr className="mb-5 mt-5" />
            </div>
          </div>
          <div className="col-span-2 row-span-3 col-start-1 row-start-3 bg-radial-[at_50%_75%] from-zinc-700 to-zinc-900 to-75% rounded-lg ">
            <div className="flex flex-col items-center p-5 mt-5">
              <Image
                src={LetterCv}
                alt="CV"
                width={100}
                height={100}
                className="animate-bounce duration-1000"
              />
              <p className="text-center text-zinc-200 w-67 mt-5">
                Want to check out my resume? Just click the link below!
              </p>
              <Link
                href="/amin-abdi-ismail-cv.pdf"
                download
                target="_blank"
                className="bg-zinc-100 mt-5 rounded-full px-4 py-2 hover:bg-zinc-300 transition-colors duration-200 text-zinc-800 font-semibold text-center"
              >
                Download
              </Link>
            </div>
          </div>
          <div className="col-span-2 row-span-4 col-start-3 row-start-1 rounded-lg">
            <Image
              className="rounded-lg"
              placeholder="blur"
              blurDataURL={Gradution.blurDataURL}
              src={Gradution}
              alt="Amin Abdi Ismamil"
              width={461}
              height={539}
            />
          </div>
          <div className="col-span-2 col-start-3 row-start-5 bg-zinc-900 rounded-lg">
            <div className="p-5 flex justify-center">
              <Links />
            </div>
          </div>
        </div>
      </motion.div>

      <div className=" md:pl-8 lg:pl-0">
        <BackgroundEduc />
      </div>

      <div className="p-5 md:p-0">
        <div className="bg-zinc-900 flex flex-col md:flex-row justify-between items-left gap-4 md:gap-0 md:items-center mt-12 rounded-lg p-6 md:max-w-4xl mx-auto">
          <div>
            <small className="text-zinc-400">You can get my</small>
            <p className="text-zinc-100 text-2xl">Curriculum Vitae</p>
          </div>
          <Link
            href="/amin-abdi-ismail-cv.pdf"
            download
            target="_blank"
            className="bg-zinc-100 rounded-full px-4 py-2 hover:bg-zinc-300 transition-colors duration-200 text-zinc-800 font-semibold text-center"
          >
            Download cv
          </Link>
        </div>
      </div>
    </main>
  );
}
