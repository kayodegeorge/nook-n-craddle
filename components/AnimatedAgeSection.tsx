import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

const AnimatedAgeSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const leftVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-1 divide-y-2 divide-[#121321] md:grid-cols-2 md:divide-x-2 md:divide-y-0"
    >
      <motion.div
        className="w-full bg-[#FDFDFD] px-4 py-28 md:px-[6.25rem]"
        initial="hidden"
        animate={controls}
        variants={leftVariants}
      >
        <h2 className="text-center text-4xl leading-[1.2] md:text-left">
          Age-appropriate activities
        </h2>
        <p className="mt-3 max-w-lg text-center md:text-left">
          We customize activities based on your child's age, tailoring engaging
          experiences that align with their developmental milestones
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2"
        initial="hidden"
        animate={controls}
        variants={rightVariants}
      >
        <div className="hidden justify-center md:flex">{/* SVG content */}</div>
        <div className="flex min-h-44 justify-center bg-[#000000]">
          {/* SVG content */}
        </div>
        <div className="hidden items-end justify-center bg-[#F59488] md:flex">
          {/* SVG content */}
        </div>
        <div className="flex min-h-44 items-end justify-center bg-[#F8D0E0]">
          {/* SVG content */}
        </div>
      </motion.div>
    </section>
  );
};

export default AnimatedAgeSection;
