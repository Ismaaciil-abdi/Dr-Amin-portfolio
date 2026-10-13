import CaseStudyPage, {
  type CaseStudy,
} from "@/app/gallery/_components/CaseStudyPage";

import case2Before from "@/assets/case_two/case_02_Before.jpg";
import case2second from "@/assets/case_two/case_02_second.jpg";
import case2third from "@/assets/case_two/case_02_thrid.jpg";
import case2After from "@/assets/case_two/case_02_After.jpg";
import case2xray from "@/assets/case_two/case_02_xray.jpg";

const study: CaseStudy = {
  number: "02",
  title:
    "Restoring a first premolar with a challenging deep marginal elevation",
  category: "Restorative dentistry",
  introduction:
    "A 16-year-old female patient, medically fit, presented to the clinic with a diastema and slight calculus on her lower incisors, which we addressed first.",
  sections: [
    {
      title: "Patient",
      content: "Female, 16 years old, medically fit.",
    },
    {
      title: "History and concerns",
      content:
        "The patient presented to the clinic with a diastema and slight calculus on her lower incisors, which we addressed first. Before proceeding with the orthodontic treatment, we discoverd a severely decayed upper first premolar. After assessing the remaining tooth structure, the tooth was considered restorable.",
    },
    {
      title: "Pre operative assessment",
      content: [
        "After taking periapical radiographs and intraoral photographs, the following findings were observed:",
        "Extensive caries",
        "A deep distal margin",
        "Good buccal and lingual ferrule",
      ],
    },
    {
      title: "Treatment options",
      content:
        "Due to the young age of the patient, the parents wanted to try to save the tooth. Therefore, we decided to proceed with root canal treatment followed by a direct composite crown. The direct composite restoration was chosen as the definitive restoration due to the patients financial circumstances.",
    },
    {
      title: "Pre endodontic build up (DME)",
      content:
        "The patient presented to the clinic with a diastema and slight calculus on her lower incisors, which we addressed first. Before initiating root canal treatment, a build-up was required to help maintain isolation and keep the irrigants within the tooth, among other benefits.",
    },
    {
      title: "Deep Marginal Elevation",
      content:
        "The distal wall was completely subgingival. In addition, the gingiva had overgrown and needed to be removed. After removing the excess gingival tissue, a Tofflemire matrix was placed with Teflon tape to elevate the margin. After rebuilding the distal wall, root canal treatment was proceeded with as planned.",
    },

    {
      title: "Root canal treatment",
      content: [
        "The tooth had normal anatomy, with two canals, each having a separate orifice and exit.",
        "Instrumentation was performed using rotary files up to size 30 with a 0.04 taper.",
        "Obturation was completed at the following visit using the single-cone technique.",
      ],
    },
    {
      title: "Composite restoration",
      content:
        "As mentioned earlier, a composite crown was selected as the definitive restoration due to the patients financial circumstances.",
    },
  ],
  images: [
    {
      src: case2Before,
      alt: "Pre operative assessment of the first premolar with a challenging deep marginal elevation",
      caption: "Pre operative assessment",
    },
    {
      src: case2second,
      alt: "Dental radiograph from the case",
      caption: "Matrix implacement and deep marginal elevation",
    },
    {
      src: case2third,
      alt: "Another view of the treatment process",
      caption: "Additional treatment view",
    },
    {
      src: case2xray,
      alt: "Anterior teeth during treatment",
      caption: "Radiographic view",
    },
    {
      src: case2After,
      alt: "Post operative view of the restored first premolar with a challenging deep marginal elevation",
      caption: "Post operative",
    },
  ],
};

export default function CaseTwo() {
  return <CaseStudyPage study={study} />;
}
