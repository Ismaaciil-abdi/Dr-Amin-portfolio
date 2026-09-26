import CaseStudyPage, {
  type CaseStudy,
} from "@/app/gallery/_components/CaseStudyPage";
import case1Xray from "@/assets/xray1.jpg";
import case1Before from "@/assets/case1before.jpg";
import midtreatment from "@/assets/midtreatment.jpg";
import conclusionOne from "@/assets/xray2.jpg";
import finall from "@/assets/fullteeth.jpg";

// Keep each case's content and image captions together here. New case routes
// can reuse the shared CaseStudyPage component with the same data shape.
const study: CaseStudy = {
  number: "01",
  title: "Management of fractured right central in pediatric patient",
  category: "Fractured tooth management",
  introduction:
    "A 11 year boy presented with a fractured right central incisor after he have been knocked down by another boy to the ground, fracturing the tooth in the middle third.",
  sections: [
    {
      title: "Patient",
      content: "Male, 11 years old, medically fit.",
    },
    {
      title: "History and concerns",
      content:
        "After examining the soft and hard tissue the following were noticed, Minor injuries to the lips. The tooth was non vital upon pupil testing.",
    },
    // {
    //   title: "Clinical findings",
    //   content: [
    //     "UR3, UR2, and UR1 were severely decayed and planned as bridge abutments.",
    //     "UR1 required a direct composite restoration.",
    //     "UL1 was intact and required a Class III composite restoration.",
    //   ],
    // },
    {
      title: "Treatment plan",
      content:
        "The patient's parents were keen on saving the tooth so we proposed Root Canal Treatment and restoration of the tooth with Composite, they agreed with the treatment option and gave consent.",
    },
    {
      title: "Treatment phases",
      content: [
        "Restoration options were limited to composite filling due to the age of the patient, however a more long term restoration will be performed when the patient reaches appropriate age for it.",
        "Root canal treatment was performed utilizing rotary motor and files different tapers, furthermore the obturation was done utilizing cold lateral compaction and resin sealer.",
      ],
    },
  ],
  images: [
    {
      src: case1Before,
      alt: "Anterior teeth before bridge rehabilitation",
      caption: "Initial presentation",
    },
    {
      src: case1Xray,
      alt: "Dental radiograph from the case",
      caption: "Radiographic assessment",
    },
    {
      src: midtreatment,
      alt: "Anterior teeth during treatment",
      caption: "Mid-treatment view",
    },
    {
      src: conclusionOne,
      alt: "Close-up view of the completed restoration",
      caption: "Restoration detail",
    },
    {
      src: finall,
      alt: "Additional view of the completed restoration",
      caption: "Final result",
    },
  ],
};

export default function CaseOne() {
  return <CaseStudyPage study={study} />;
}
