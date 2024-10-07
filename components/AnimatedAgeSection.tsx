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

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{}}
      className="bg-gray-50 py-12"
    >
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <motion.div
            className="mb-8 w-full px-4 md:mb-0 md:w-1/2"
            variants={leftVariants}
          >
            <h2 className="mb-4 text-3xl font-bold">
              Age-appropriate activities
            </h2>
            <p className="text-lg text-gray-600">
              We customize activities based on your childs age, tailoring
              engaging experiences that align with their developmental
              milestones
            </p>
          </motion.div>
          <motion.div className="w-full px-4 md:w-1/2" variants={rightVariants}>
            {/* SVG content */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AnimatedAgeSection;
