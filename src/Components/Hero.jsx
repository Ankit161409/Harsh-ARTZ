/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      
      {/* OVERLAY */}
      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* CONTENT */}
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        <motion.p
        style={{ color: "#FFD700" }}
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Explore His World
        </motion.p>

        <motion.h1
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Artist  <br /> HArsh GauTam
        </motion.h1>
      </motion.div>

    </section>
  );
};

export default Hero;
