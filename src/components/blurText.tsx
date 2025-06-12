"use client";
import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
}

export default function BlurText({ text, className = "" }: BlurTextProps) {
  const letters = text.split("");

  return (
    <div className="text-center mt-2">
      {letters.map((letter, index) => (
        <motion.span
          initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          key={index}
          className={className}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}
