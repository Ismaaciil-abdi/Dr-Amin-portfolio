import AboutMe from "@/sections/aboutMe";
import Compering from "@/sections/comparin";
import Hero from "@/sections/Hero";
import TeethLoop from "@/sections/teethLoop";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Compering />
      <TeethLoop />
      <Contact />
    </>
  );
}
