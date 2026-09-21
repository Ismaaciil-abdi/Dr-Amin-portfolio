"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xgvzrqov");
  if (state.succeeded) {
    return <p className="p-8 text-center font-serif text-xl text-zinc-800">Thank you — I&apos;ll get back to you soon.</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-[1.1rem] bg-[#f8f8f6] p-5 sm:p-7">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">Send a note</p>
        <h2 className="mt-2 font-serif text-2xl text-zinc-900">How can I help?</h2>
      </div>
      <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-semibold text-zinc-700">Email address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="space-y-2">
      <label htmlFor="message" className="text-sm font-semibold text-zinc-700">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        required
        rows={5}
        className="w-full resize-y rounded-xl border border-zinc-300 bg-white p-4 text-sm text-zinc-900 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-lg hover:shadow-zinc-900/15 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state.submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
