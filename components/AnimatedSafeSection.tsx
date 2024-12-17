import { motion } from "framer-motion";
import localFont from "next/font/local";
import React from "react";

const riffic = localFont({
  src: "../fonts/riffic-free.ttf",
  display: "swap",
});

const AnimatedSafeSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const bouncyCircleVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rotatingXVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="grid grid-cols-1 divide-y-2 divide-[#121321] md:grid-cols-2 md:divide-x-2 md:divide-y-0">
      <div className="w-full bg-[#FDFDFD] px-4 py-28 md:px-[6.25rem]">
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className={`${riffic.className} text-center text-4xl leading-[1.2] md:text-left`}
        >
          Safe and clean environment
        </motion.h2>
        <p className="mt-3 max-w-lg text-center md:text-left">
          Our priority is providing a secure and hygienic setting. We ensure a
          safe and clean environment for your peace of mind and your childs
          well-being.
        </p>
      </div>
      <div className="flex h-full w-full items-center justify-center bg-[#F8D0E0]">
        <div className="flex flex-col gap-14 md:flex-row">
          <motion.svg
            initial="hidden"
            animate={["visible", "animate"]}
            variants={{
              ...itemVariants,
              ...bouncyCircleVariants,
            }}
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70 0C51.4413 0.0210107 33.6487 7.40274 20.5257 20.5257C7.40275 33.6487 0.0210107 51.4413 0 70C0.0210108 88.5587 7.40275 106.351 20.5257 119.474C33.6488 132.597 51.4413 139.979 70 140C88.5587 139.979 106.351 132.597 119.474 119.474C132.597 106.351 139.979 88.5587 140 70C139.979 51.4413 132.597 33.6488 119.474 20.5258C106.351 7.40278 88.5587 0.0210373 70 0ZM97.9357 70C97.9273 77.4064 94.9814 84.507 89.7443 89.7441C84.5071 94.9812 77.4064 97.9271 70 97.9355C62.5936 97.9272 55.493 94.9813 50.2559 89.7442C45.0187 84.5071 42.0727 77.4064 42.0643 70C42.0574 66.327 42.7748 62.6887 44.1756 59.2932C45.5764 55.8978 47.633 52.8119 50.2278 50.2123C52.8225 47.6126 55.9044 45.5501 59.2972 44.1429C62.69 42.7357 66.327 42.0113 70 42.0113C73.673 42.0113 77.31 42.7357 80.7028 44.1429C84.0956 45.5501 87.1775 47.6126 89.7722 50.2123C92.367 52.8119 94.4236 55.8978 95.8244 59.2932C97.2252 62.6887 97.9426 66.327 97.9357 70Z"
              fill="black"
            />
          </motion.svg>

          <motion.svg
            initial="hidden"
            animate={["visible", "animate"]}
            variants={{
              ...itemVariants,
              ...rotatingXVariants,
            }}
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M132.37 7.63079C129.95 5.21153 127.078 3.29248 123.917 1.98319C120.757 0.673897 117.369 0 113.947 0C110.526 0 107.138 0.673897 103.977 1.98319C100.816 3.29248 97.9445 5.21153 95.5253 7.63079L70.0002 33.1556L44.4754 7.63079C42.0562 5.21153 39.1842 3.29245 36.0233 1.98315C32.8624 0.67386 29.4746 0 26.0533 0C22.6319 0 19.244 0.67386 16.0831 1.98315C12.9222 3.29245 10.0502 5.21153 7.63093 7.63079C5.21167 10.05 3.29259 12.9221 1.9833 16.083C0.674002 19.2439 0.000141573 22.6317 0.000141573 26.053C0.000141573 29.4744 0.674002 32.8622 1.9833 36.0231C3.29259 39.184 5.21167 42.0561 7.63093 44.4753L33.1557 69.9996L7.63064 95.5246C5.2114 97.9439 3.29244 100.816 1.98315 103.977C0.673869 107.138 0 110.525 0 113.947C0 117.368 0.673869 120.756 1.98315 123.917C3.29244 127.078 5.2114 129.95 7.63064 132.369C12.5165 137.255 19.1433 140 26.053 140C32.9627 140 39.5893 137.255 44.4752 132.369L70.0001 106.844L95.525 132.369C100.411 137.255 107.038 140 113.947 140C120.857 140 127.483 137.255 132.369 132.369C137.255 127.483 140 120.856 140 113.947C140 107.037 137.255 100.411 132.369 95.5246L106.845 69.9996L132.37 44.4748C137.255 39.5889 140 32.9624 140 26.0528C140 19.1432 137.255 12.5167 132.37 7.63079Z"
              fill="black"
            />
          </motion.svg>

          <motion.svg
            initial="hidden"
            animate={["visible", "animate"]}
            variants={{
              ...itemVariants,
              ...bouncyCircleVariants,
            }}
            width="140"
            height="140"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M70 0C51.4413 0.0210107 33.6487 7.40274 20.5257 20.5257C7.40275 33.6487 0.0210107 51.4413 0 70C0.0210108 88.5587 7.40275 106.351 20.5257 119.474C33.6488 132.597 51.4413 139.979 70 140C88.5587 139.979 106.351 132.597 119.474 119.474C132.597 106.351 139.979 88.5587 140 70C139.979 51.4413 132.597 33.6488 119.474 20.5258C106.351 7.40278 88.5587 0.0210373 70 0ZM97.9357 70C97.9273 77.4064 94.9814 84.507 89.7443 89.7441C84.5071 94.9812 77.4064 97.9271 70 97.9355C62.5936 97.9272 55.493 94.9813 50.2559 89.7442C45.0187 84.5071 42.0727 77.4064 42.0643 70C42.0574 66.327 42.7748 62.6887 44.1756 59.2932C45.5764 55.8978 47.633 52.8119 50.2278 50.2123C52.8225 47.6126 55.9044 45.5501 59.2972 44.1429C62.69 42.7357 66.327 42.0113 70 42.0113C73.673 42.0113 77.31 42.7357 80.7028 44.1429C84.0956 45.5501 87.1775 47.6126 89.7722 50.2123C92.367 52.8119 94.4236 55.8978 95.8244 59.2932C97.2252 62.6887 97.9426 66.327 97.9357 70Z"
              fill="black"
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSafeSection;
