 
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Hero from "../Components/Hero";
import AboutArtist from "../Components/AboutArtist";

import "./Home.css";

import home1 from "../Images/mainpage/img2.jpeg";
import home2 from "../Images/mainpage/img1.jpeg";
import home3 from "../Images/mainpage/img3.jpeg";
import home4 from "../Images/mainpage/img4.jpeg";
import home5 from "../Images/mainpage/img5.jpeg";
import home6 from "../Images/mainpage/img6.jpeg";


const imageVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

const imageTransition = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
};

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* ============================= */}
      {/* THE HAAT OF ART 2026 SECTION */}
      {/* ============================= */}

      <section className="art-showcase">

        {/* ============================= */}
        {/* TOP SECTION */}
        {/* ============================= */}

        <motion.div
          className="art-top-bg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="art-top"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={{
              hidden: {},

              visible: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
          >
            {/* HEADING */}

            <motion.h2
              className="section-heading"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              The Haat of Art – 2026
            </motion.h2>

            {/* TEXT + BUTTON */}

            <motion.div
              className="btn-wrapper"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
            >
              <p className="section-text">
                I had the privilege of presenting my artwork at{" "}
                <b>The Haat of Art 2026</b>, showcasing a diverse collection
                of creative expressions. The exhibition featured my work
                across multiple mediums, including{" "}
                <b>
                  charcoal &amp; graphite sketches, digital art, colored
                  pencil, ball pen art, mixed media, watercolor, and acrylic
                  painting
                </b>
                . I also presented{" "}
                <b>
                  customized portraits, apparel and clothing designs, and
                  hand-painted shoes
                </b>
                , demonstrating the versatility of my practice and my ability
                to blend traditional and contemporary techniques. This
                exhibition was an opportunity to connect with art enthusiasts,
                share my artistic vision, and celebrate the endless
                possibilities of creative expression.
              </p>

              <Link to="/Lets-connect">
                <motion.button
                  className="art-btn"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  Know More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ============================= */}
        {/* IMAGE SECTION */}
        {/* ============================= */}

        <div className="art-grid-wrapper">

          {/* IMAGE 1 + IMAGE 2 */}

          <div className="art-grid">
            <div className="art-row">

              <motion.div
                className="flip-front"
                style={{
                  backgroundImage: `url(${home1})`,
                }}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={imageTransition}
              />

              <motion.div
                className="flip-front"
                style={{
                  backgroundImage: `url(${home2})`,
                }}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  ...imageTransition,
                  delay: 0.15,
                }}
              />

            </div>
          </div>

          {/* IMAGE 3 */}

          <div className="art-grid">
            <div className="art-row">

              <motion.div
                className="art-new"
                style={{
                  backgroundImage: `url(${home3})`,
                }}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={imageTransition}
              />

            </div>
          </div>

          {/* IMAGE 1 + IMAGE 2 AGAIN */}

          <div className="art-grid">
            <div className="art-row">

              <motion.div
                className="flip-front"
                style={{
                  backgroundImage: `url(${home4})`,
                }}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={imageTransition}
              />

              <motion.div
                className="flip-front"
                style={{
                  backgroundImage: `url(${home5})`,
                }}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  ...imageTransition,
                  delay: 0.15,
                }}
              />

            </div>
          </div>

          {/* IMAGE 3 AGAIN */}

          <div className="art-grid">
            <div className="art-row">

              <motion.div
                className="art-new"
                style={{
                  backgroundImage: `url(${home6})`,
                }}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={imageTransition}
              />

            </div>
          </div>

        </div>
      </section>

      {/* ABOUT THE ARTIST */}

      <AboutArtist />
    </>
  );
};

export default Home;
