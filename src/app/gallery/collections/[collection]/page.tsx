import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Collection = {
  title: string;
  description: string;
  directory: string;
  files: string[];
};

const collections: Record<string, Collection> = {
  "root-canal": {
    title: "Root canal treatments",
    description: "Clinical photographs from root canal treatment cases.",
    directory: "root_canel_treatments",
    files: [
      "IMG_0154", "IMG_0242", "IMG_0244", "IMG_0261", "IMG_0388", "IMG_0391",
      "IMG_0393", "IMG_0399", "IMG_0828", "IMG_0847", "IMG_0848", "IMG_0850",
      "IMG_0852", "IMG_0854", "IMG_0877", "IMG_0885", "IMG_0887", "IMG_0974",
      "IMG_0997", "IMG_1086", "IMG_1088", "IMG_1110", "IMG_1111", "IMG_1114",
      "IMG_1163", "IMG_1194", "IMG_1240",
    ],
  },
  prosthodontics: {
    title: "Prosthodontics",
    description: "Clinical photographs from prosthodontic cases.",
    directory: "prosthodontics",
    files: [
      "pro_01B", "pro_01F", "pro_02B", "pro_02F", "pro_03B", "pro_03F",
      "pro_04B", "pro_04F", "random_01", "random_02", "random_03",
    ],
  },
  operative: {
    title: "Operative",
    description: "Clinical photographs from operative dentistry cases.",
    directory: "operative",
    files: [
      "op_01B", "op_01F", "op_02B", "op_02F", "op_03B", "op_03F",
      "op_04B", "op_04F", "op_05B", "op_05F", "op_06B", "op_06F",
      "op_07B", "op_07F", "op_08B", "op_08F", "op_09B", "op_09F",
      "op_10B", "op_10F", "op_11B", "op_11F", "op_12B", "op_12F",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(collections).map((collection) => ({ collection }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ collection: string }>;
}) {
  const { collection: slug } = await params;
  const collection = collections[slug];

  if (!collection) return null;

  return (
    <main className="min-h-screen bg-[#f8f8f6] pt-28 sm:pt-36">
      <section className="mx-auto max-w-6xl px-6 pb-14 sm:px-8 sm:pb-20">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-emerald-800"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All collections
        </Link>
        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
          Clinical portfolio / Collection
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-zinc-900 sm:text-5xl">
          {collection.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
          {collection.description} Images are shown in filename order.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {collection.files.map((file, index) => (
            <figure
              key={file}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] bg-zinc-100">
                <Image
                  src={`/img/converted/${collection.directory}/${file}.jpg`}
                  alt={`${collection.title}, image ${index + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-zinc-600">
                Image {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
