import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, inView } from "framer-motion";

function Reveal({ children, width = "w-full" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const sildeControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      sildeControls.start("visible");
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
      <motion.div
        variants={{
          start: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={sildeControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="top-4 absolute bottom-4 left-0 right-0 bg-teal-500 z-20"
      />
    </div>
  );
}

export default Reveal;
