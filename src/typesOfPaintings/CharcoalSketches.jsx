
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Charcoal } from "../ImportImages/CharcoalImport.js";
 

// import '../ArtGallery.css';

  const Charcoals = () => {
  const navigate = useNavigate();

  const trimWords = (text = "", wordLimit = 15) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };
 
 
  return (
    <div className="background">
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
                   <motion.h1
                   className="side"
                   style={{ color: "black" }}
                            variants={{
                              hidden: { y: 40, opacity: 0 },
                              visible: { y: 0, opacity: 1 },
                            }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          >
                          Charcoal Arts
                           
                          </motion.h1>
                        </motion.div>
      {/* Navbar */}
 
      {/* Gallery */}
      <motion.div
        className="gallery-container top"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
         
        {Charcoal.map((painting, index) => (
          <motion.div
            key={painting.id || index}
            className="art-card"
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{
              y: -15,
              scale: 1.02,
              boxShadow: "0 35px 60px -20px rgba(0,0,0,0.4)",
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            // onClick={() => navigate(`/painting/${index}`)}
                        onClick={() => navigate(`/painting/CharcoalImport/${index}`)}
 
          >
            <div className="card-image-container">
              <img
                src={painting.img}
                alt={painting.title}
                className="card-image"
              />

              <div className="image-overlay">
                <motion.div
                  className="view-details-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.div>
              </div>
            </div>

            <div className="card-content">
              <motion.h1
                className="card-title"
                whileHover={{ color: "#a855f7" }}
              >
                {painting.title}
              </motion.h1>

              <p className="card-description">
                {trimWords(painting.description, 50)}
              </p>

              <div className="card-footer">
                <span className="artist-name">
                  by {painting.artist || "Unknown"}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};


 export default Charcoals;
 
