import { motion } from "framer-motion";
import React from "react";

const AnimatedWaveSVG = () => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "153px" }}
    >
      <motion.div
        className="absolute left-0 top-0 flex"
        animate={{ x: [0, -1440] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[0, 1].map((index) => (
          <svg
            key={index}
            width="1440"
            height="153"
            viewBox="0 0 1440 153"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-452 50.3884C-273.43 50.3884 -273.43 200.388 -94.8594 200.388C83.7109 200.388 83.7115 50.3884 262.283 50.3884C440.854 50.3884 440.853 200.388 619.424 200.388C797.993 200.388 797.993 50.3884 976.562 50.3884C1155.13 50.3884 1155.13 200.388 1333.7 200.388C1512.27 200.388 1512.27 50.3884 1690.84 50.3884C1869.41 50.3884 1869.41 200.388 2047.99 200.388C2226.56 200.388 2226.56 50.3884 2405.13 50.3884C2583.7 50.3884 2583.7 200.388 2762.27 200.388C2940.84 200.388 2940.84 50.3884 3119.42 50.3884C3297.99 50.3884 3297.99 200.388 3476.56 200.388C3655.13 200.388 3655.13 50.3884 3833.7 50.3884C4012.28 50.3884 4012.28 200.388 4190.85 200.388C4369.43 200.388 4369.43 50.3884 4548 50.3884"
              stroke="black"
              strokeWidth="100"
              strokeMiterlimit="10"
            />
          </svg>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedWaveSVG;
