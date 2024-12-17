"use client";

import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

import AnimatedFlexibleSchedulingSection from "@/components/AnimatedFlexibleSchedulingSection";
import AnimatedWaveSVG from "@/components/AnimatedWaveSvg";

const riffic = localFont({
  src: "../../fonts/riffic-free.ttf",
  display: "swap",
});

const reviews = [
  {
    name: "Esther Howard",
    image: "/avatar.png",
    review:
      "I can't recommend this babysitting service enough! The caregivers create a safe and welcoming atmosphere for my kids. The peace of mind I get from knowing my children are in good hands is priceless.",
  },
  {
    name: "Jacob Jones",
    image: "/avatar-2.png",
    review:
      "Fantastic experience with this babysitting business! The environment is always clean, and the caregivers are so attentive. My kids love the age-appropriate activities provided. It's a win-win for both parents and little ones!",
  },
  {
    name: "Kristin Watson",
    image: "/avatar-3.png",
    review:
      "Five stars for the safe and secure environment they maintain. The flexibility in scheduling has been a game-changer for our family. Our babysitter is not just professional but genuinely caring, making it easy for us to trust and enjoy some much-needed time off.",
  },
] as const;

export default function About() {
  return (
    <main className="divide-y-2 divide-[#121321] bg-[#FEF7F6]">
      <section className="flex flex-col px-4 pb-24 pt-24 md:flex-row md:items-center md:justify-between md:px-[6.25rem] md:pb-20 md:pt-6">
        <div className="max-w-lg space-y-8">
          <h1
            className={`${riffic.className} text-center text-4xl leading-[1.2] md:text-left`}
          >
            About us
          </h1>

          <p className="text-center md:text-left">
            We are dedicated to creating a nurturing environment where kids can
            learn, play, and grow. With 7 years of childcare experience, we
            understand the importance of maintaining a loving and secure
            atmosphere for your precious ones.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              className="rounded-lg border-2 border-[#121321] bg-[#F59488] px-9 py-5 font-medium transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:bg-primary-black hover:text-white"
              href="/contact"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="relative h-[32rem] w-full md:w-[35rem]">
          <Image
            alt="About us image"
            className="object-contain"
            fill
            src="/about-us-hero.png"
          />
        </div>
      </section>

      <AnimatedFlexibleSchedulingSection />

      <section className="relative overflow-hidden bg-[#FEF7F6]">
        <div className="flex items-center justify-center">
          <div className="max-w-lg space-y-4 px-4 pb-12 pt-28 md:pb-0">
            <h2
              className={`${riffic.className} text-center text-4xl leading-[1.2]`}
            >
              We are a team of experts
            </h2>

            <p className="max-w-lg text-center leading-[1.5]">
              We are dedicated to creating a nurturing environment where kids
              can learn, play, and grow.
            </p>

            <div className="flex justify-center hover:text-button">
              <Link className="flex font-medium" href="/about">
                Learn more
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 16.7362L18.7929 13.4433C19.1834 13.0528 19.1834 12.4196 18.7929 12.0291L15.5 8.73621"
                    stroke="#121321"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M18.5 12.7362L4.5 12.7362"
                    stroke="#121321"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <AnimatedWaveSVG />
      </section>

      <section className="flex items-center justify-center bg-[#FDFDFD]">
        <div className="max-w-lg space-y-4 py-24">
          <h2
            className={`${riffic.className} text-center text-4xl leading-[1.2]`}
          >
            Reach out to us
          </h2>

          <p className="max-w-lg text-center leading-[1.5]">
            Feel free to reach out to us for more information or to schedule a
            babysitting session
          </p>

          <div className="flex justify-center">
            <Link
              className="rounded-lg border-2 border-[#121321] bg-[#F59488] px-9 py-5 font-medium transition-all duration-300 ease-in-out hover:translate-y-[-10px] hover:bg-primary-black hover:text-white"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
