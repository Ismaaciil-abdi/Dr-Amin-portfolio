import Image from "next/Image";
import case1Bf from "../../assets/showcase/case1bf.jpg";
import Link from "next/link";

export default function Gallery() {
  return (
    <main className="container pt-32 mb-16 max-w-3xl mx-auto">
      <div className="px-4  md:px-8 lg:px-0 flex flex-col md:flex-row items-center gap-4">
        <Image
          className="rounded-lg"
          src={case1Bf}
          alt="Case one before"
          width={350}
          height={350}
        />
        <div className="text-center md:text-left">
          <h1 className="text-lg md:text-2xl">
            Dislodged upper anterior PFM bridge
          </h1>
          <p className="text-zinc-500 text-sm line-clamp-1">
            UR3, UR2, UR1: Severely decayed; planned as bridge abutments, UR1:
            Requires only a direct composite restoration
          </p>
          <Link
            className="flex items-center  w-40 px-3 py-2 mt-4 rounded-md justify-center bg-zinc-900 text-center text-zinc-200 hover:bg-zinc-800 transition-all duration-300"
            href="/gallery/caseone"
          >
            Read more
          </Link>
        </div>
      </div>
    </main>
  );
}
