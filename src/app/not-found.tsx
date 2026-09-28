import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-[#f8f8f6] px-6 pb-20 pt-32 text-center sm:px-8 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_28%,rgba(217,229,222,0.8),transparent_23rem),radial-gradient(circle_at_10%_88%,rgba(235,226,207,0.78),transparent_27rem)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-full w-px bg-zinc-200/70" />
      <div className="absolute left-[8%] top-28 -z-10 size-36 rounded-full border border-zinc-300/70 sm:size-52" />
      <div className="absolute right-[6%] top-20 -z-10 size-20 rounded-full border border-zinc-300/70 sm:size-32" />

      <div className="relative max-w-2xl">
        <p className="inline-flex items-center rounded-full border border-zinc-300 bg-white/70 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800 shadow-sm backdrop-blur">
          Oops, something went wrong.
        </p>
        <p aria-hidden="true" className="mt-8 font-serif text-[clamp(7rem,24vw,15rem)] leading-[0.78] tracking-[-0.08em] text-zinc-900/10">
          404
        </p>
        <div className="relative -mt-4 sm:-mt-8">
          <h1 className="font-serif text-4xl leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            This page needs a check-up.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-zinc-600 sm:text-lg">
            This page does not exist or has been moved. Please check the URL or return to the homepage.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-lg hover:shadow-zinc-900/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
          >
            Return home
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
