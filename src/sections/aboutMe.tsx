"use client";
import Image from "next/image";
import aboutMeImage from "@/assets/about-image.jpeg";
import Link from "next/link";
import Button from "@/components/button";
import HandWave from "@/assets/hand.png";
import Linkedin from "@/assets/icons/linkedin.png";
import FaceBook from "@/assets/icons/facebook.png";
import MyWork from "./mywork";
import { motion } from "framer-motion";
export default function AboutMe() {
  const Links = [
    {
      id: 1,
      href: "https://www.linkedin.com/in/amin-abdi-ismael-724617226/",
      icon: Linkedin,
      alt: "LinkedIn",
    },
    {
      id: 2,
      href: "https://www.facebook.com/amin.abdirahman.117497",
      icon: FaceBook,
      alt: "Facebook",
    },
  ];
  return (
    <motion.main
      initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
      whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <small className="small-border mb-10">Get to know me</small>
      <div className="flex flex-col lg:flex-row items-center  gap-10 mt-8 mb-10">
        <div>
          <Image
            src={aboutMeImage.src}
            alt="Dr Amin Abdi Ismail"
            placeholder="blur"
            blurDataURL={aboutMeImage.blurDataURL}
            className="rounded-2xl border-zinc-400  border-2 hover:border-6 hover:rotate-3 hover:scale-90 transition-transform duration-300"
            width={350}
            height={522}
          ></Image>
        </div>

        <div className="max-w-lg mx-auto text-center lg:text-left">
          <h1 className="font-serif  break-words text-2xl mb-5">
            Hello,{" "}
            <span className="inline-flex">
              <Image
                alt="Hand Wave"
                src={HandWave.src}
                width={30}
                height={30}
              />
            </span>
            <br />
            I&apos;m Dr. Amin Abdi Ismail, a dedicated dental professional,
            based in Borama, Somaliland
          </h1>

          <p className="text-zinc-600 break-words ">
            I&apos;m a newly qualified general dentist dedicated to delivering
            high quality, evidence based care. I&apos;m passionate about
            learning, refining my clinical skills, and building a strong
            foundation in everyday dentistry.
          </p>

          <div className="flex flex-col items-center lg:items-start gap-2.5 mt-5 ">
            <div className="flex  mb-8">
              {Links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  className="w-10 h-10 flex items-center md:text-left justify-center rounded-full  hover:bg-zinc-200 transition-colors"
                >
                  <Image
                    src={link.icon.src}
                    alt={link.alt}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>

            <Link href="/amin-abdi-ismail-cv.pdf" download>
              <Button variant="secondary">Download My CV</Button>
            </Link>
          </div>
        </div>
      </div>
      <small className="small-border mt-12 mb-10">My latest work</small>
      <div className="p-5">
        <MyWork />
      </div>
    </motion.main>
  );
}
