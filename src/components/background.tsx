import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function BackgroundEduc() {
  const data = [
    {
      title: "University",
      content: (
        <div>
          <p className=" text-xs md:text-md font-normal text-zinc-900 md:text-sm">
            Degree in Bachelor of Dental surgery, courses taken include
            Operative Dentistry, Orthodontics, Oral Surgery, Endodontics,
            prosthodontics, pedodontics
          </p>
        </div>
      ),
    },
    {
      title: "Al-Aqsa Secondary School",
      content: (
        <div>
          <p className="mb-8 text-xs md:text-md font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Obtained a mean grade B in the Somaliland Certificate of Secondary
            Education-SCSE
          </p>
        </div>
      ),
    },
    {
      title: "Work Experience",
      content: (
        <div>
          <p className="mb-4 text-xs md:text-md font-normal text-neutral-800 md:text-sm italic">
            Amoud Dental lab, Borama/Awdal
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-sm dark:text-neutral-300">
              Assisted in patient examinations, diagnosis, and treatment
              planning.
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-sm dark:text-neutral-300">
              Performed basic dental procedures under the supervision of
              licensed dentists.
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-700 md:text-sm dark:text-neutral-300">
              Gained experience in managing dental hygiene, patient education,
              and preventive care.
            </div>
          </div>
          <hr />
          <p className="mt-5">
            Worked for six months as a general dentist in a private clinic in
            Qardho, performing restorative, periodontal, endodontic, oral
            surgery, and minor orthodontic treatments, while independently
            managing patient care in a busy community setting.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
