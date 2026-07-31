  /**CORE LIBRARIES IMPORT */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

/**COMPONENTS IMPORT */
import Hero from "../Components/Hero";
import AboutArtist from "../Components/AboutArtist";
import  "./Home.css";
/**DATA IMPORT */
import { homePaintings } from "../Home";


const Home=()=>{
    return(
        <>
        {/**HERO SECTION */}
        {/* <Hero /> */}

        {/**AWARD SECTION WITH PAINTING IMAGES GRID */}
 <section className="art-showcase">

  {/* FULL WIDTH YELLOW BG */}
  <motion.div
    className="art-top-bg"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <motion.div
      className="art-top"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
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
          hidden: { y: 40, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        The Haat of Art – 2026
      </motion.h2>

      {/* TEXT + BUTTON */}
      <motion.div
        className="btn-wrapper"
        variants={{
          hidden: { y: 40, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="section-text">
        I had the privilege of presenting my artwork at <b>The Haat of Art 2026</b>, showcasing a diverse collection 
        of creative expressions. The exhibition featured my work across multiple mediums, including <b>charcoal &
           graphite sketches, digital art, colored pencil, ball pen art, mixed media, watercolor, and acrylic painting</b>. 
           I also presented <b>customized portraits, apparel and clothing designs, and hand-painted shoes,</b> demonstrating the 
           versatility of my practice and my ability to blend traditional and contemporary techniques. This exhibition was an opportunity to 
           connect with art enthusiasts, share my artistic vision, and celebrate the endless possibilities of creative expression.
         </p>

       <Link to='/Lets-connect'><motion.button
          className="art-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.25 }}
        >
          Know More
        </motion.button></Link> 
      </motion.div>
    </motion.div>
  </motion.div>

  {/* OVERLAPPING GRID */}
  <motion.div
    className="art-grid-wrapper"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.25 }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >
    <div className="art-grid ">
      {homePaintings.map((item, i) => (
        <motion.div
          className="flip-card"
          key={i}
          variants={{
            hidden: { y: 60, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flip-inner">
            <div
              className="flip-front"
              style={{ backgroundImage: `url(${item.img})` }}
            />
            <div className="flip-back">
              <h3>{item.title}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>

</section>

    {/**ABOUT THE ARTIST SECTION */}
    {/* <AboutArtist /> */}
        </>
    )
}

export default Home;