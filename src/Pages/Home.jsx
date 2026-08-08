  /**CORE LIBRARIES IMPORT */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

/**COMPONENTS IMPORT */
import Hero from "../Components/Hero";
import AboutArtist from "../Components/AboutArtist";
import  "./Home.css";
/**DATA IMPORT */
// import { Mixed } from "../ImportImages/MixedMediaImport";
import home1 from '../Images/mainpage/img2.jpeg';
import home2 from '../Images/mainpage/img1.jpeg';
import home3 from '../Images/mainpage/img3.jpeg';



const Home=()=>{
    return(
        <>
        {/**HERO SECTION */}
        <Hero />  

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
        transition: {duration: 0.7, ease: "easeOut",
          staggerChildren: 0.15,
        },
      },
    }}
  >
    {/* <div className="art-grid ">
      {Mixed.map((item, i) => (
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
    </div> */}


    
    {/* <div className="art-grid"> */}

 
 
{/* </div> */}
 
 <div className="art-grid">
 <div className="art-row"  >
    <div
      className="flip-front "
      style={{ backgroundImage: `url(${home1})` }}
    ></div>

    <div
      className="flip-front"
      style={{ backgroundImage: `url(${home2})` }}
    ></div>
  </div>
  </div>
  

  <div className="art-grid">
 <div className="art-row"  > 
  
    <div
      className="art-new"
      style={{ backgroundImage: `url(${home3})` }}
    ></div>
  </div>
  </div>
  
 <div className="art-grid">
 <div className="art-row"  >
    <div
      className="flip-front "
      style={{ backgroundImage: `url(${home1})` }}
    ></div>

    <div
      className="flip-front"
      style={{ backgroundImage: `url(${home2})` }}
    ></div>
  </div>
  </div>
  

  <div className="art-grid">
 <div className="art-row"  > 
  
    <div
      className="art-new"
      style={{ backgroundImage: `url(${home3})` }}
    ></div>
  </div>
  </div>
  
  
   </motion.div>
</section>

    {/**ABOUT THE ARTIST SECTION */}
    <AboutArtist />
        </>
    )
}

export default Home;



// copy in App.css 

// .art-grid {
//   /* max-width:2000px; */
//   height:2000px;
//   /* height: auto; */
//  border: 1px solid red;
//   /* margin: auto; */
//   display: grid;
//   grid-template-columns: repeat(2, 2fr);
//   gap: 20px;
//    /* padding: 0px 40px 0px; */
//    /* justify-content: center; */
//     width: 100%;
//   max-width: 1400px;
//   margin: 0 auto;   
//   padding: 0 20px;
//   box-sizing: border-box; 

// }

// .flip-card {
//   perspective: 1200px;
//   width: 300px;
//   height:900px;
//   border: 1px solid red;
 
// }

// .flip-inner {
//   width: 800px;
//   height:800px;
//   position: relative;
//   transform-style: preserve-3d;
//   transition: transform 0.7s ease;
//   border: 1px solid rgb(0, 110, 255);
//    background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
  

// }

// .flip-card:hover .flip-inner {
//   transform: rotateX(180deg);
// }

// .flip-front {
//   position: absolute;
//   inset: 0;
//   background-size: cover;
//   background-position: center;
//   backface-visibility: hidden;
//   width:400px;
// }
