import { motion, useAnimation } from "framer-motion";
import localFont from "next/font/local";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const riffic = localFont({
  src: "../fonts/riffic-free.ttf",
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

const AnimatedReviewsSection = () => {
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

  const cardVariants = [
    {
      hidden: { opacity: 0, x: -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: "easeOut", delay: 0.9 },
      },
    },
    {
      hidden: { opacity: 0, y: -100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut", delay: 0.9 },
      },
    },
    {
      hidden: { opacity: 0, x: 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.9, ease: "easeOut", delay: 0.9 },
      },
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{}}
      className="flex justify-center px-4 py-24 md:px-[6.25rem] md:py-32"
    >
      <div className="bg-[#FEF7F6]1 grid grid-cols-1 gap-7 md:grid-cols-3">
        {reviews.map((review, index) => (
          <motion.div
            key={review.name}
            initial="hidden"
            animate={controls}
            variants={cardVariants[index % 3]}
            className="space-y-4 rounded-lg border-2 border-[#121321] bg-[#FDFDFD] px-6 pb-14 pt-8 drop-shadow-[8_8_0_rgba(18,19,33,1)]"
          >
            <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-[#121321]">
              <Image src={review.image} alt="" fill />
            </div>
            <h3 className={`${riffic.className} text-3xl text-[#121321]`}>
              {review.name}
            </h3>
            <p>&quot;{review.review}&quot;</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AnimatedReviewsSection;
