import Image from "next/Image";
import case1Xray from "@/assets/showcase/case1xray.jpg";
import case1Bf from "@/assets/showcase/case1bf.jpg";
import case1Af from "@/assets/showcase/case1af.jpg";
import conc1 from "@/assets/showcase/conc1.jpg";
import conc2 from "@/assets/showcase/conc2.jpg";

export default function CaseOne() {
  return (
    <main className="container pt-32 mb-16 max-w-3xl mx-auto">
      <div className="px-4 md:px-8">
        <div className="flex flex-col items-center justify-center md:flex-row gap-3 md:gap-0 md:justify-evenly">
          <Image
            placeholder="blur"
            blurDataURL={case1Bf.blurDataURL}
            src={case1Bf.src}
            alt="case one before"
            width={350}
            height={350}
            className="rounded-lg shadow-md"
          />
          <Image
            placeholder="blur"
            blurDataURL={case1Xray.blurDataURL}
            src={case1Xray.src}
            alt="case one before"
            width={300}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
        <h1 className="mt-12  mb-12 text-2xl font-bold">Case Summary</h1>
        <h3 className="text-lg font-semibold">Patient</h3>
        <p>Female, mid-40s, medically fit</p>
        <h3 className="mt-3 mb-1.5 text-lg font-semibold">Chief Complaint</h3>
        <p>
          Dislodged upper anterior PFM bridge; desires a more natural-looking,
          aesthetic replacement
        </p>
        <h1 className="mt-3 mb-1.5 text-lg font-semibold">Involved Teeth:</h1>
        <ul className="list-disc pl-5">
          <li>UR3, UR2, UR1: Severely decayed planned as bridge abutments</li>
          <li>UR1: Requires only a direct composite restoration</li>
          <li>UL1: Intact; requires a Class III composite restoration</li>
        </ul>
        <h3 className="mt-3 mb-1.5 text-lg font-semibold">History</h3>
        <p>
          Previous PFM bridge UR3–UL1 functioned for 5 years. Patient is
          dissatisfied with its aesthetics and longevity
        </p>
        <h3 className="mt-3 mb-1.5 text-lg font-semibold">Goal</h3>
        <p>Fabrication of a high-aesthetic, metal-free fixed prosthesis </p>
        <h3 className="mt-3 mb-1.5 text-lg font-semibold">
          Proposed Treatment Plan
        </h3>
        <ul className="list-disc pl-5">
          <li>Caries removal on UR3, UR2, and UR1</li>
          <li>
            Root canal treatment and fiber post-core build-ups on UR3, UR2, UR1
            adequate ferrule achieved
          </li>
          <li>Direct composite restoration on UR1</li>
          <li>Class III composite restoration on UL1</li>
          <li>Fabrication of a full-ceramic bridge UR3 UR1</li>
          <li>shade matching and occlusal adjustment</li>
        </ul>
        <div className="flex flex-wrap justify-center md:flex-row  gap-3 mt-12">
          <Image
            placeholder="blur"
            blurDataURL={case1Af.blurDataURL}
            src={case1Af.src}
            alt="case one after"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
          <Image
            placeholder="blur"
            blurDataURL={conc1.blurDataURL}
            src={conc1.src}
            alt="case one after"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
          <Image
            placeholder="blur"
            blurDataURL={conc2.blurDataURL}
            src={conc2.src}
            alt="case one after"
            width={300}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </main>
  );
}
