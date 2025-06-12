"use client";
import { motion } from "framer-motion";
import { Compare } from "@/components/ui/compare";
import FristImage from "@/assets/first-image.jpeg";
import SecondImage from "@/assets/second-image.jpeg";
export default function Compering() {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
      whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-5 flex flex-col items-center justify-center mt-32"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 font-serif ">
        Teeth Transformation
      </h2>
      <small className="text-zinc-600 text-center px-4 tracking-wider md:text-md max-w-lg mx-auto">
        Precision, Care, and Stunning Transformations – Where Advanced
        Techniques Meet Personalized Dental Excellence
      </small>
      <small className="small-border">Before / After</small>
      <Compare
        firstImage={FristImage.src}
        secondImage={SecondImage.src}
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[300px] w-[300px] md:h-[500px] md:w-[550px]"
        slideMode="hover"
      />
    </motion.div>
  );
}
