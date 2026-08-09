import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Hero from "../Components/Hero";
import AboutArtist from "../Components/AboutArtist";

import { homePaintings } from "../ArtGalleryData";

import "./Home.css";

import home1 from "../Images/mainpage/img2.jpeg";
import home2 from "../Images/mainpage/img1.jpeg";
import home3 from "../Images/mainpage/img3.jpeg";
import home4 from "../Images/mainpage/img4.jpeg";
import home5 from "../Images/mainpage/img5.jpeg";


/* ===================================================== */
/* IMAGE ANIMATION */
/* ===================================================== */

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


/* ===================================================== */
/* ARTWORK SLIDESHOW */
/* ===================================================== */

const ArtworkSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);


  /* ===================================================== */
  /* NEXT SLIDE */
  /* ===================================================== */

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === homePaintings.length - 1) {
        return 0;
      }

      return prevIndex + 1;
    });
  };


  /* ===================================================== */
  /* PREVIOUS SLIDE */
  /* ===================================================== */

  const previousSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return homePaintings.length - 1;
      }

      return prevIndex - 1;
    });
  };


  /* ===================================================== */
  /* AUTOMATIC SLIDESHOW */
  /* ===================================================== */

  useEffect(() => {
    if (isPaused || homePaintings.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === homePaintings.length - 1) {
          return 0;
        }

        return prevIndex + 1;
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);


  /* ===================================================== */
  /* NO PAINTINGS */
  /* ===================================================== */

  if (homePaintings.length === 0) {
    return null;
  }


  /* ===================================================== */
  /* CURRENT PAINTING */
  /* ===================================================== */

  const currentPainting = homePaintings[currentIndex];


  return (
    <div
      className="art-slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >

      {/* ================================================= */}
      {/* SLIDE IMAGE */}
      {/* ================================================= */}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="art-slide"

          style={{
            backgroundImage: `url(${currentPainting.img})`,
          }}

          initial={{
            x: "100%",
            opacity: 0,
          }}

          animate={{
            x: 0,
            opacity: 1,
          }}

          exit={{
            x: "-100%",
            opacity: 0,
          }}

          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >

          {/* ================================================= */}
          {/* HOVER OVERLAY */}
          {/* ================================================= */}

          <div className="art-slide-overlay">
            <span className="art-slide-name">
              {currentPainting.title}
            </span>
          </div>

        </motion.div>
      </AnimatePresence>


      {/* ================================================= */}
      {/* PREVIOUS BUTTON */}
      {/* ================================================= */}

      <button
        type="button"
        className="slide-btn slide-prev"
        onClick={previousSlide}
        aria-label="Previous artwork"
      >
        &#10094;
      </button>


      {/* ================================================= */}
      {/* NEXT BUTTON */}
      {/* ================================================= */}

      <button
        type="button"
        className="slide-btn slide-next"
        onClick={nextSlide}
        aria-label="Next artwork"
      >
        &#10095;
      </button>


      {/* ================================================= */}
      {/* DOTS */}
      {/* ================================================= */}

      <div className="slide-dots">
        {homePaintings.map((painting, index) => (
          <button
            type="button"
            key={`${painting.title}-${index}`}

            className={`slide-dot ${index === currentIndex ? "active" : ""
              }`}

            onClick={() => setCurrentIndex(index)}

            aria-label={`Go to ${painting.title}`}
          />
        ))}
      </div>

    </div>
  );
};


/* ===================================================== */
/* HOME COMPONENT */
/* ===================================================== */

const Home = () => {
  return (
    <>
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <Hero />


      {/* ================================================= */}
      {/* THE HAAT OF ART 2026 */}
      {/* ================================================= */}

      <section className="art-showcase">


        {/* ================================================= */}
        {/* TOP SECTION */}
        {/* ================================================= */}

        <motion.div
          className="art-top-bg"

          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

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

            {/* ================================================= */}
            {/* HEADING */}
            {/* ================================================= */}

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


            {/* ================================================= */}
            {/* TEXT + BUTTON */}
            {/* ================================================= */}

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


              {/* ================================================= */}
              {/* KNOW MORE */}
              {/* ================================================= */}

              <Link to="/Lets-connect">
                <motion.button
                  type="button"
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


        {/* ================================================= */}
        {/* IMAGE 1 + IMAGE 2 */}
        {/* ================================================= */}

        <div className="container-fluid  art-grid">
          <div className="row art-row">

            {/* IMAGE 1 */}

            <motion.div
              className="col-md-6 flip-front"

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
            >

              <div className="art-hover-overlay">
                <span className="artwork-name">
                  Charcoal Portrait
                </span>
              </div>

            </motion.div>


            {/* IMAGE 2 */}

            <motion.div
              className="col-md-6 flip-front"

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
            >

              <div className="art-hover-overlay">
                <span className="artwork-name">
                  Mixed Media Artwork
                </span>
              </div>

            </motion.div>

          </div>

        </div>


        {/* ================================================= */}
        {/* IMAGE 3 */}
        {/* ================================================= */}

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
            >

              <div className="art-hover-overlay">
                <span className="artwork-name">
                  Mixed Media
                </span>
              </div>

            </motion.div>

          </div>

        </div>


        {/* ================================================= */}
        {/* IMAGE 4 + IMAGE 5 */}
        {/* ================================================= */}

        <div className="art-grid">

          <div className="art-row">

            {/* IMAGE 4 */}

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
            >

              <div className="art-hover-overlay">
                <span className="artwork-name">
                  Charcoal Artwork
                </span>
              </div>

            </motion.div>


            {/* IMAGE 5 */}

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
            >

              <div className="art-hover-overlay">
                <span className="artwork-name">
                  Charcoal Artwork
                </span>
              </div>

            </motion.div>

          </div>

        </div>


        {/* ================================================= */}
        {/* HOME PAINTINGS SLIDESHOW */}
        {/* ================================================= */}

        <div className="art-grid">

          <div className="art-row slideshow-row">

            <ArtworkSlideshow />

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* ABOUT ARTIST */}
      {/* ================================================= */}

      <AboutArtist />

    </>
  );
};


export default Home;
