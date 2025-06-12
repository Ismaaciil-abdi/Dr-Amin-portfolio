import Link from "next/link";

export default function Links() {
  return (
    <div>
      <nav className="flex gap-4 text-zinc-100">
        <Link
          href="https://www.facebook.com/amin.abdirahman.117497"
          className="hover:text-zinc-400"
        >
          Facebook &#8599;
        </Link>
        <Link
          href="https://www.linkedin.com/in/amin-abdi-ismael-724617226/"
          className="hover:text-zinc-400"
        >
          Linkedln &#8599;
        </Link>
        <Link href="https://wa.link/3ito0t" className="hover:text-zinc-400">
          WhatsApp &#8599;
        </Link>
      </nav>
    </div>
  );
}
