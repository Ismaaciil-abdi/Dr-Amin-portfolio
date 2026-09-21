import Link from "next/link";
import { ArrowUpRight, Facebook, Linkedin, MessageCircle } from "lucide-react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/amin-abdi-ismael-724617226/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.facebook.com/amin.abdirahman.117497",
    label: "Facebook",
    icon: Facebook,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-[#f8f8f6] text-zinc-600">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-12 border-b border-zinc-200 pb-12 md:grid-cols-[1.35fr_0.65fr_0.9fr] md:gap-8">
          <div className="max-w-sm">
            <Link
              href="/"
              className="font-serif text-2xl tracking-tight text-zinc-900 transition-colors hover:text-emerald-800"
            >
              Dr. Amin Abdi Ismail<span className="text-emerald-800">.</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-zinc-600">
              A dental professional committed to thoughtful, evidence-based care
              and continuous learning.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit Dr. Amin's ${label} profile`}
                  className="flex size-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-900 hover:text-white"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Explore
            </p>
            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col gap-3"
            >
              {navigation.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="w-fit text-sm text-zinc-600 transition-colors hover:text-emerald-800"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
              Let&apos;s connect
            </p>
            <p className="mt-5 text-sm leading-6 text-zinc-600">
              Have a question or want to discuss dental care? I&apos;d be glad
              to hear from you.
            </p>
            <Link
              href="https://wa.link/3ito0t"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-lg hover:shadow-zinc-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f8f6]"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              Message on WhatsApp
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dr. Amin Abdi Ismail.</p>
          <p>Evidence-based dentistry, with care.</p>
        </div>
      </div>
    </footer>
  );
}
