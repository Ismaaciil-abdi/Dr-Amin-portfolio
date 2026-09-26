import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export type CaseStudySection = {
  title: string;
  content: string | string[];
};

export type CaseStudyImage = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

export type CaseStudy = {
  number: string;
  title: string;
  category: string;
  introduction: string;
  sections: CaseStudySection[];
  images: CaseStudyImage[];
};

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  return (
    <main className="min-h-screen bg-white pt-28 sm:pt-36">
      <section className="border-b border-zinc-200 pb-12 sm:pb-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All case studies
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                Clinical portfolio <span className="px-1.5 text-zinc-300">/</span> Case {study.number}
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-[1.12] tracking-tight text-zinc-900 sm:text-5xl">
                {study.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                {study.introduction}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-[#f8f8f6] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
                Focus
              </p>
              <p className="mt-2 font-medium leading-6 text-zinc-900">{study.category}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Each treatment plan is tailored to the patient&apos;s clinical needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f6] py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16">
          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  Clinical record
                </p>
                <h2 className="mt-2 font-serif text-3xl tracking-tight text-zinc-900">
                  Case overview
                </h2>
              </div>
            </div>
            <div className="mt-7 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white px-5 sm:px-7">
              {study.sections.map((section) => (
                <section key={section.title} className="py-5 sm:py-6">
                  <h3 className="font-semibold text-zinc-900">{section.title}</h3>
                  {Array.isArray(section.content) ? (
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600 sm:text-base">
                      {section.content.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-emerald-700" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
                      {section.content}
                    </p>
                  )}
                </section>
              ))}
            </div>
          </div>

          <aside aria-labelledby="case-gallery-title">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Case gallery
            </p>
            <h2 id="case-gallery-title" className="mt-2 font-serif text-3xl tracking-tight text-zinc-900">
              Treatment images
            </h2>
            <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-1">
              {study.images.map((image, index) => (
                <figure
                  key={`${image.caption}-${index}`}
                  className={`overflow-hidden rounded-2xl border border-zinc-200 bg-white ${index === 0 ? "col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="relative aspect-[4/3] bg-zinc-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      placeholder="blur"
                      fill
                      sizes="(min-width: 1024px) 19rem, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm text-zinc-600">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <Link
              href="/gallery"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-emerald-800"
            >
              Browse other cases <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}
