"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md shadow-2xl sm:p-8"
    >
      {submitted ? (
        <div className="py-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/15 text-emerald-400">
            ✓
          </div>
          <h3 className="mt-4 text-lg font-semibold text-white">
            Message sent!
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Thanks for reaching out. This is a demo form; I will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-6 rounded-lg border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-white/10 cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-zinc-300"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-sky-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-zinc-300"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-sky-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-zinc-300"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project or inquiry..."
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-sky-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-sky-200 cursor-pointer"
          >
            Send message
          </button>
        </div>
      )}
    </form>
  );
}
