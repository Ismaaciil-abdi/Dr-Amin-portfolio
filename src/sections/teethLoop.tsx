"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

function Tooth({ accent = false }: { accent?: boolean }) {
  return (
    <svg
      viewBox="0 0 72 88"
      aria-hidden="true"
      className="h-16 w-14 sm:h-20 sm:w-[4.5rem]"
    >
      <path
        d="M18 8c8 0 11 4 18 4s10-4 18-4c12 0 18 9 18 22 0 18-10 30-14 46-2 9-5 12-9 12-5 0-6-7-8-16-1-5-3-8-7-8s-6 3-7 8c-2 9-3 16-8 16-4 0-7-3-9-12C6 60-4 48-4 30-4 17 6 8 18 8Z"
        fill={accent ? "#b7d6c6" : "#ffffff"}
        stroke={accent ? "#5f8f78" : "#d4d4d8"}
        strokeWidth="2"
      />
      <path
        d="M22 25c4 3 9 4 14 4s10-1 14-4"
        fill="none"
        stroke={accent ? "#5f8f78" : "#a1a1aa"}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.2 3.8c1.5 0 2.5.8 4.8.8s3.3-.8 4.8-.8c2.5 0 4.2 2.1 3.5 5.2l-1.8 8.1c-.4 1.9-1.5 3.1-2.7 3.1-1.3 0-1.5-1.7-2-3.5-.4-1.4-.8-2.1-1.8-2.1s-1.4.7-1.8 2.1c-.5 1.8-.7 3.5-2 3.5-1.2 0-2.3-1.2-2.7-3.1L3.7 9C3 5.9 4.7 3.8 7.2 3.8Z" />
    </svg>
  );
}

const prosthodontics = [
  {
    src: "/img/converted/operative/op_02B.jpg",
    label: "Operative case",
  },
  {
    src: "/img/converted/prosthodontics/pro_02F.jpg",
    label: "Prosthodontic case",
  },
  {
    src: "/img/converted/root_canel_treatments/IMG_0399.jpg",
    label: "Root Canal Treatment",
  },
  {
    src: "/img/converted/prosthodontics/pro_04F.jpg",
    label: "Prosthodontic case",
  },
  {
    src: "/img/converted/operative/op_03B.jpg",
    label: "Operative case",
  },
  {
    src: "/img/converted/prosthodontics/random_02.jpg",
    label: "Prosthodontic case",
  },
  {
    src: "/img/converted/root_canel_treatments/IMG_0852.jpg",
    label: "Root Canal Treatment",
  },
];

export default function TeethLoop() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof prosthodontics)[number] | null
  >(null);

  useEffect(() => {
    if (!selectedImage) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedImage]);

  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#f8f8f6] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">
          <ToothIcon aria-hidden="true" className="size-3.5 text-emerald-800" />{" "}
          Dedicated to evidence-based dentistry.
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl leading-tight tracking-tight text-zinc-900 sm:text-4xl">
          Committed to learning, focused on better dentistry
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-600">
          I&apos;m a general dentist who believes good dentistry starts with
          sound knowledge, careful clinical judgment, and a willingness to keep
          learning. This portfolio brings together my clinical work, experience,
          and ongoing efforts to improve the care I provide.
        </p>
      </div>

      <div className="relative mt-12 overflow-hidden border-y border-zinc-200 bg-[#f8f8f6] py-6 sm:py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f8f8f6] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f8f8f6] to-transparent sm:w-32" />
        <div className="group flex w-max animate-[teeth-scroll_32s_linear_infinite] items-center gap-4 pr-4 hover:[animation-play-state:paused] sm:gap-6 sm:pr-6">
          {[...prosthodontics, ...prosthodontics].map((photo, index) => (
            <button
              key={`${photo.src}-${index}`}
              type="button"
              onClick={() => setSelectedImage(photo)}
              aria-label={`View ${photo.label.toLowerCase()} photo`}
              className="group/photo relative h-36 w-52 shrink-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-emerald-800 sm:h-44 sm:w-64 md:h-48 md:w-72 lg:h-56 lg:w-96"
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                sizes="(max-width: 640px) 208px, (max-width: 1024px) 288px, 384px"
                className="object-cover transition-transform duration-500 group-hover/photo:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-3 pb-3 pt-8 text-left text-xs font-medium text-white">
                {photo.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/55 p-5 backdrop-blur-md sm:p-10"
          role="presentation"
          onClick={() => setSelectedImage(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.label}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-white p-2 shadow-2xl sm:p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute right-4 top-4 z-10 rounded-full bg-black/65 p-2 text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="size-5" />
            </button>
            <div className="relative h-[55vh] min-h-64 max-h-[78vh] w-full overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src={selectedImage.src}
                alt={selectedImage.label}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain"
                priority
              />
            </div>
            <p className="px-2 pb-1 pt-3 text-sm font-medium text-zinc-700">
              {selectedImage.label}
            </p>
          </div>
        </div>
      )}

      <div className="mx-auto mt-10 flex max-w-6xl justify-center px-6 sm:px-8">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-emerald-800"
        >
          Check more cases at gallery{" "}
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
