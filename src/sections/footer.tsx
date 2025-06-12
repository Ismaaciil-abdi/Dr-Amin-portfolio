import Links from "@/components/links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 h-full text-center md:text-left">
      <div className="flex flex-col md:flex-row items-center  md:justify-around  gap-8 md:gap-0 pt-10">
        <div>
          <p className="text-zinc-400 mb-3">Navigation</p>
          <nav className="flex items-center gap-4 text-zinc-100">
            <Link href="/" className="hover:text-zinc-400">
              Home
            </Link>
            <Link href="about" className="hover:text-zinc-400">
              About
            </Link>
            <Link href="/gallery" className="hover:text-zinc-400">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-zinc-400">
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-zinc-400 mb-3 text-3xl md:text-5xl">
            Get in Touch
          </p>
          <Links />
        </div>
      </div>
      <div>
        <p className="text-zinc-500 text-sm mt-10 break-words text-center">
          You can also reach out to me on my{"  "}
          <Link
            className=" underline hover:text-zinc-400"
            href="https://wa.link/3ito0t"
          >
            WhatsApp
          </Link>{" "}
          if you have any questions or just want to say hi!, feel free to reach
          out!
        </p>
        <p className="text-zinc-500 text-sm mt-10 pb-16 text-center">
          © {new Date().getFullYear()} Dr. Amin Abdi Ismail. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
