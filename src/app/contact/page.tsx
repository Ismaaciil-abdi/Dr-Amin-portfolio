import ContactForm from "@/components/contact";
import Linkedin from "@/assets/icons/linkedin.png";
import FaceBook from "@/assets/icons/facebook.png";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
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
  const emailAddress = "armstrong2002315@gmail.com";
  const mailtoHref = `mailto:${emailAddress}`;

  return (
    <main className="container pt-32 mb-16 max-w-3xl mx-auto flex flex-col md:flex-row p-5 gap-12 items-center justify-between">
      <div>
        <h1 className="text-3xl font-serif font-bold">Contact Me</h1>
        <p className="mt-2 text-muted-foreground break-words whitespace-normal">
          Have questions or feedback? I'd love to hear from you! <br />
          You can reach me through the following channels:
        </p>

        <div className="flex md:flex-rew justify-center md:justify-start mt-4 gap-2">
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
                width={25}
                height={25}
              />
            </Link>
          ))}
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
