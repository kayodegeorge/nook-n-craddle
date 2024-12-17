import Image from "next/image";
import React, { useEffect, useState } from "react";

const AnimatedHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="flex flex-col px-4 py-24 md:flex-row md:items-center md:justify-between md:px-[5rem] md:py-16">
      <div className="max-w-lg space-y-8">
        <h1
          className={`duration-900 text-center text-4xl font-bold leading-[1.2] transition-all ease-out md:text-left ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          Trustworthy care for your little ones, Peace of mind for you
        </h1>
        <p
          className={`duration-900 text-center transition-all ease-out md:text-left ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          Our team of dedicated and experienced caregivers is committed to
          providing exceptional services that guarantee peace of mind for YOU
        </p>
        <div
          className={`duration-900 flex justify-center transition-all ease-out md:justify-start ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="animate-bounce">
            <a
              className="inline-block rounded-lg border-2 border-[#121321] bg-[#F59488] px-9 py-5 font-medium transition-transform hover:scale-105 active:scale-95"
              href="/contact"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
      <div
        className={`duration-600 relative mt-8 h-[30rem] w-full transition-all ease-out md:w-[40rem] ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <Image
          alt="Hero pic"
          className="object-contain"
          fill
          src="/landing-pic.png"
        />
      </div>
    </section>
  );
};

export default AnimatedHeroSection;
