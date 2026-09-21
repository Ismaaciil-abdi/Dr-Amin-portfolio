import Link from "next/link";
import { Download } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-[9999] flex justify-center px-3 sm:px-4">
      <nav
        aria-label="Main navigation"
        className="flex w-full max-w-max items-center gap-0.5 rounded-full border border-zinc-200/90 bg-white/80 p-1.5 text-zinc-800 shadow-lg shadow-zinc-900/5 backdrop-blur-xl sm:gap-1 sm:p-2"
      >
        <Link href="/" className="nav-item">
          Home
        </Link>

        <Link href="/about" className="nav-item">
          About
        </Link>

        <Link href="/gallery" className="nav-item">
          Gallery
        </Link>

        <Link href="/contact" className="nav-item">
          Contact
        </Link>

        <Link
          href="/amin-abdi-ismail-cv.pdf"
          download
          target="_blank"
          className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-zinc-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2 sm:px-4 sm:text-sm"
        >
          <Download aria-hidden="true" className="size-3.5 sm:size-4" />
          <span className="sm:hidden">CV</span>
          <span className="hidden sm:inline">Download CV</span>
        </Link>
      </nav>
    </header>
  );
}
