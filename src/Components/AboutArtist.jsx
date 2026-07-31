/**CORE LIBRARIES IMPORT */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**IMAGE IMPORT */
import ArtistImg from "../Images/additionalImages/Harsh.jpeg";

const AboutArtist = () => {
  return (
    <section className="about-artist-section">
      <div className="content-wrapper">

        {/* IMAGE */}
        <motion.div
          className="artist-img"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={ArtistImg} alt="Artist Ishaan Mehra" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="artist-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Artist Harsh gautam
          </motion.h2>

          <motion.h3
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About Me
          </motion.h3>

          <motion.p
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
         Harsh Artz (Harsh Gautam) is a self-taught, India-based digital and sketch artist known for creating detailed, hyper-realistic portraits and fan art using Procreate and traditional media like charcoal and graphite. He specializes in anime, Marvel, and celebrity art, often sharing drawing processes on Instagram.   
        </motion.p>
         <motion.p variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
 <b>Artistic Focus:</b> He is known for high-detail, realistic pencil sketches and digital illustrations on the iPad Pro, frequently featuring characters from Marvel, Demon Slayer, and Jujutsu Kaisen.
</motion.p>
<motion.p variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ><b> Platform Presence: </b> Primarily active on Instagram (@harsh_artz) and Pinterest, showcasing his portraits and "2021 vs 2023" style art reels.
Commission Work: He takes orders for personalized sketches. </motion.p>
          {/* LINKS */}
     <br></br>
            <Link className="hero-link" to='/art-gallery'>Art Gallery</Link>
            <Link className="hero-link" to='/lets-connect'>Let&apos;s Connect</Link>
          </motion.div>
   

      </div>
    </section>
  );
};

export default AboutArtist;
