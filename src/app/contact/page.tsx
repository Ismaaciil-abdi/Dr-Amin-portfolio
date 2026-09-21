import ContactForm from "@/components/contact";
import Link from "next/link";
import { Facebook, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/amin-abdi-ismael-724617226/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/amin.abdirahman.117497",
      icon: Facebook,
      label: "Facebook",
    },
  ];
  const emailAddress = "armstrong2002315@gmail.com";

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-28">
      <div className="absolute -right-24 top-1/2 size-96 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute -left-24 bottom-0 size-72 rounded-full bg-emerald-900/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="pt-2 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Get in touch</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-white sm:text-5xl">Let&apos;s start a conversation.</h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-zinc-400 lg:mx-0">Questions, feedback, or an opportunity to connect? I&apos;d be glad to hear from you and will respond as soon as I can.</p>

          <div className="mt-8 space-y-3 text-left">
            <Link
              href={`mailto:${emailAddress}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-zinc-900"><Mail aria-hidden="true" className="size-4" /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Email</span><span className="mt-1 block text-sm text-zinc-200">{emailAddress}</span></span>
            </Link>
            <Link href="https://wa.link/3ito0t" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-zinc-900"><MessageCircle aria-hidden="true" className="size-4" /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">WhatsApp</span><span className="mt-1 block text-sm text-zinc-200">Send a direct message</span></span>
            </Link>
          </div>

          <div className="mt-7 flex justify-center gap-2 lg:justify-start">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Link key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Visit Dr. Amin's ${label} profile`} className="flex size-10 items-center justify-center rounded-full border border-white/15 text-zinc-300 transition-all hover:-translate-y-0.5 hover:bg-white hover:text-zinc-950"><Icon aria-hidden="true" className="size-4" /></Link>
            ))}
          </div>
        </div>
        <div className="rounded-[1.5rem] border border-white/10 bg-white p-2 shadow-2xl shadow-black/20 sm:p-3"><ContactForm /></div>
      </div>
    </section>
  );
}
