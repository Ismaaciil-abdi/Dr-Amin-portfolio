"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  GraduationCap,
  MapPin,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";
import graduationImage from "@/assets/gradution.jpeg";

const education = [
  {
    period: "Dental education",
    title: "Amoud University",
    description:
      "Bachelor of Dental Surgery, with training across operative dentistry, orthodontics, oral surgery, endodontics, prosthodontics, and paediatric dentistry.",
  },
  {
    period: "Foundation",
    title: "Al-Aqsa Secondary School",
    description:
      "Completed the Somaliland Certificate of Secondary Education with a mean grade of B.",
  },
];

const experience = [
  {
    place: "Borama",
    items: [
      "Assisted with patient examinations, diagnosis, and treatment planning at Amoud Dental Lab in Borama, Awdal.",
      "Built practical experience in dental hygiene, patient education, and preventive care.",
    ],
  },
  {
    place: "Qardho",
    items: [
      "Worked for six months as a general dentist in a private clinic.",
      "Managed restorative treatment.",
      "Managed periodontal treatment.",
      "Managed endodontic treatment.",
      "Performed oral surgery.",
      "Provided minor orthodontic treatment.",
    ],
  },
  {
    place: "Garowe",
    items: [
      "Oral surgery — tooth extractions",
      "Restorative dentistry — direct and indirect restorations",
      "Prosthodontics — fixed (crowns and bridges) and removable prostheses",
      "Endodontics — root canal treatments and re-treatments",
      "Orthodontics — treatment of a variety of cases",
    ],
  },
];
const skills = [
  "Strong communication and interpersonal skills",
  "Understanding of patient management and treatment planning.",
  "Knowledgeable in operative and Endodontics.",
  "Strong and foundational knowledge in orthodontics",
  "Efficient in crowns and bridges.",
];

export default function About() {
  return (
    <main className="overflow-hidden bg-white pt-28 sm:pt-36">
      <section className="relative pb-20 sm:pb-28">
        <div className="absolute -right-36 top-8 size-96 rounded-full border border-zinc-200" />
        <div className="absolute -left-24 bottom-0 size-64 rounded-full bg-emerald-50" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
              About Dr. Amin
            </p>
            <h1 className="mt-4 max-w-xl font-serif text-4xl leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              A thoughtful start to a lifelong practice.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              I&apos;m Dr. Amin Abdi Ismail, a general dentist from Borama,
              Somaliland. I care about making every visit feel clear, calm, and
              centred on what each patient needs.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
              As a newly qualified clinician, I&apos;m focused on building
              strong everyday habits: listening carefully, working from
              evidence, and continuing to learn with every case.
            </p>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <MapPin
                  aria-hidden="true"
                  className="size-4 text-emerald-800"
                />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  Based in
                </p>
                <p className="mt-1 font-serif text-lg text-zinc-800">
                  Borama, Somaliland
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <Stethoscope
                  aria-hidden="true"
                  className="size-4 text-emerald-800"
                />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  Practice focus
                </p>
                <p className="mt-1 font-serif text-lg text-zinc-800">
                  Patient-first care
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:mr-0"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-zinc-200" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-zinc-100">
              <Image
                src={graduationImage}
                alt="Dr. Amin Abdi Ismail at his graduation"
                placeholder="blur"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, calc(100vw - 3rem)"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-zinc-200 bg-[#f8f8f6] px-4 py-3 shadow-lg shadow-zinc-900/5 sm:-left-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                Dental surgeon
              </p>
              <p className="mt-1 font-serif text-lg text-zinc-800">
                Amoud University
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#f8f8f6] py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
              My journey so far
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl">
              Learning with purpose, practising with care.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {education.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7"
              >
                <GraduationCap
                  aria-hidden="true"
                  className="size-5 text-emerald-800"
                />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  {item.period}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-600">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-5 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
                  Clinical experience
                </p>
                <h3 className="mt-2 font-serif text-2xl text-zinc-900">
                  A hands-on foundation in general dentistry.
                </h3>
              </div>
              <span className="inline-flex w-fit rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-600">
                Borama, Qardho &amp; Garowe
              </span>
            </div>
            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {experience.map((entry) => (
                <section key={entry.place}>
                  <h4 className="font-serif text-lg text-zinc-900">{entry.place}</h4>
                  <ol className="mt-3 list-decimal space-y-2 border-l border-emerald-700 pl-8 text-sm leading-6 text-zinc-600">
                    {entry.items.map((item) => (
                      <li key={item} className="pl-1">{item}</li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </motion.article>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#f8f8f6] py-20 sm:py-28">
        {/* Skills kuso dar bari */}
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
              My skills
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-zinc-900 sm:text-4xl">
              Skills and strengths that define my practice.
            </h2>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {skills.map((skill, index) => (
              <p
                key={index}
                className="border-l border-emerald-700 pl-4 text-sm leading-6 text-zinc-600"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col justify-between gap-7 rounded-[1.75rem] bg-zinc-900 p-7 text-white sm:p-10 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Curriculum vitae
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-white sm:text-4xl">
                Explore my full professional background.
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-zinc-300">
                Download my CV for a closer look at my education, clinical
                experience, and skills.
              </p>
            </div>
            <Link
              href="/amin-abdi-ismail-cv.pdf"
              download
              target="_blank"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-all hover:-translate-y-0.5 hover:bg-emerald-50"
            >
              <Download aria-hidden="true" className="size-4" />
              Download CV
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
