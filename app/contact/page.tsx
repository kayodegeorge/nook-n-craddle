"use client";

import localFont from "next/font/local";
import { useState } from "react";

const riffic = localFont({
  src: "../../fonts/riffic-free.ttf",
  display: "swap",
});

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdkonwlk", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Thanks for your submission, we will get back to you!");
        form.reset();
      } else {
        setStatus("Oops! There was a problem submitting your details!");
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your details!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#FEF7F6]">
      <section className="flex items-center justify-center px-4 py-24">
        <div className="w-full max-w-lg space-y-10">
          <h1
            className={`${riffic.className} text-center text-4xl leading-[1.2]`}
          >
            Book an appointment
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="name">
                Name
              </label>
              <input
                className="rounded-lg border-2 border-black bg-transparent p-4 placeholder-[#B4B4B4]"
                name="name"
                placeholder="Full name"
                type="text"
                id="name"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-lg border-2 border-black bg-transparent p-4 placeholder-[#B4B4B4]"
                id="email"
                name="email"
                placeholder="Your email"
                type="email"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="date">
                Date
              </label>
              <input
                className="rounded-lg border-2 border-black bg-transparent p-4 placeholder-[#B4B4B4]"
                type="date"
                id="date"
                name="date"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-black" htmlFor="message">
                Message
              </label>
              <textarea
                className="rounded-lg border-2 border-black bg-transparent p-4 placeholder-[#B4B4B4]"
                name="message"
                id="message"
                placeholder="Write your description here"
                required
              />
            </div>

            <button
              className={`w-full rounded-lg border-2 border-[#121321] bg-[#F59488] px-9 py-5 font-medium ${
                isSubmitting ? "cursor-not-allowed opacity-70" : ""
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book appointment"}
            </button>

            {status && (
              <p className="text-pretty text-lg font-semibold text-[#F59488]">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
