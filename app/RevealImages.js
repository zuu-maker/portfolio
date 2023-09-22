import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, inView } from "framer-motion";

function RevealImages({ children, width = "w-fit" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className={"relative overflow-hidden" + width}>
      <motion.div
        variants={{
          start: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="start"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default RevealImages;
