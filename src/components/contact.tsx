"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xgvzrqov");
  if (state.succeeded) {
    return <p>Thanks I'll get back to you soon!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        className="border border-gray-300 p-2 rounded"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        className="border border-gray-300 p-2 rounded"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-slate-900 text-white p-2 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
