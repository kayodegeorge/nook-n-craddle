import { motion, useInView } from "framer-motion";
import localFont from "next/font/local";
import React from "react";

const riffic = localFont({
  src: "../fonts/riffic-free.ttf",
  display: "swap",
});

const AnimatedFlexibleSchedulingSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid grid-cols-1 divide-y-2 divide-[#121321] md:grid-cols-2 md:divide-x-2 md:divide-y-0"
    >
      <motion.div
        variants={itemVariants}
        className="w-full bg-[#FDFDFD] px-4 py-28 md:px-[6.25rem] md:py-[10.75rem]"
      >
        <motion.h2
          variants={itemVariants}
          className={`${riffic.className} text-center text-4xl leading-[1.2] md:text-left`}
        >
          Flexible scheduling
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-3 max-w-lg text-center md:text-left"
        >
          Tailored to meet your needs, we offer adaptable babysitting schedules
          to accommodate your unique requirements and ensure convenience for
          your family.
        </motion.p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex h-full min-h-80 w-full flex-col items-center justify-between bg-[#F7CD35]"
      >
        <motion.svg
          variants={itemVariants}
          width="200"
          height="97"
          viewBox="0 0 200 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.3754 -70.5244C48.8397 -88.7129 73.8786 -98.9481 100 -98.9776C126.122 -98.9479 151.161 -88.7123 169.625 -70.5239C188.088 -52.3362 198.47 -27.6818 198.5 -1.97041C198.47 23.7411 188.088 48.3957 169.625 66.5836C151.161 84.7722 126.122 95.0076 100 95.0373C73.8785 95.0078 48.8395 84.7725 30.3752 66.5838C11.9118 48.396 1.52999 23.7412 1.5 -1.97041C1.53009 -27.682 11.9119 -52.3366 30.3754 -70.5244ZM100.002 -42.7829L99.9988 -42.7829C89.028 -42.7706 78.5057 -38.4722 70.7414 -30.8238C62.9764 -23.1747 58.6043 -12.799 58.5917 -1.9716L58.5917 -1.9681C58.6043 8.85918 62.9764 19.2348 70.7415 26.8838C78.5058 34.532 89.0281 38.8302 99.9988 38.8423H100.002C110.973 38.8301 121.495 34.532 129.259 26.8837C137.024 19.2347 141.396 8.85906 141.408 -1.96813V-1.97156C141.396 -12.7988 137.024 -23.1746 129.259 -30.8237C121.495 -38.4721 110.973 -42.7705 100.002 -42.7829Z"
            fill="black"
            stroke="black"
            strokeWidth="3"
          />
        </motion.svg>
        <motion.svg
          variants={itemVariants}
          width="200"
          height="99"
          viewBox="0 0 200 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M189.099 10.7384C185.643 7.33388 181.54 4.6333 177.025 2.79081C172.509 0.948314 167.669 0 162.782 0C157.894 0 153.054 0.948314 148.539 2.79081C144.023 4.6333 139.92 7.33388 136.464 10.7384L100 46.6582L63.5359 10.7384C60.0798 7.33388 55.9769 4.6333 51.4614 2.79081C46.9458 0.948314 42.1061 0 37.2185 0C32.3309 0 27.4911 0.948314 22.9756 2.79081C18.46 4.6333 14.3571 7.33388 10.901 10.7384C7.44498 14.1428 4.70349 18.1845 2.83308 22.6327C0.962674 27.0808 0 31.8483 0 36.663C0 41.4777 0.962674 46.2452 2.83308 50.6933C4.70349 55.1415 7.44498 59.1832 10.901 62.5876L47.3652 98.5075L10.901 134.427C7.44499 137.832 4.70349 141.874 2.83308 146.322C0.962676 150.77 0 155.537 0 160.352C0 165.167 0.962676 169.934 2.83308 174.382C4.70349 178.83 7.44499 182.872 10.901 186.277C14.3571 189.681 18.46 192.382 22.9756 194.224C27.4911 196.067 32.3308 197.015 37.2184 197.015C42.106 197.015 46.9458 196.067 51.4613 194.224C55.9769 192.382 60.0798 189.681 63.5358 186.277L99.9999 150.357L136.464 186.277C139.92 189.681 144.023 192.382 148.539 194.224C153.054 196.067 157.894 197.015 162.781 197.015C167.669 197.015 172.509 196.067 177.024 194.224C181.54 192.382 185.643 189.681 189.099 186.277C192.555 182.872 195.296 178.83 197.167 174.382C199.037 169.934 200 165.167 200 160.352C200 155.537 199.037 150.77 197.167 146.322C195.296 141.874 192.555 137.832 189.099 134.427L152.635 98.5075L189.099 62.5876C192.555 59.1832 195.296 55.1415 197.167 50.6933C199.037 46.2452 200 41.4777 200 36.663C200 31.8484 199.037 27.0809 197.167 22.6327C195.297 18.1845 192.555 14.1428 189.099 10.7384Z"
            fill="black"
          />
        </motion.svg>
      </motion.div>
    </motion.section>
  );
};

export default AnimatedFlexibleSchedulingSection;
