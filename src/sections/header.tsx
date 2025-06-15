import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-[9999]">
      <nav className="flex items-center md:gap-1 p-4 md:p-2 border border-zinc-300 rounded-full bg-white/45  text-zinc-800 backdrop-blur-md  font-sans">
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
          className="nav-item bg-zinc-800 text-zinc-200 rounded-full px-4 py-2 hover:bg-zinc-700  transition-colors duration-200 hidden md:block"
        >
          Download cv
        </Link>
      </nav>
    </div>
  );
}
