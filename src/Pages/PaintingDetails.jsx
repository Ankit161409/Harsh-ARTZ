// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { homePaintings } from "../ArtGalleryData";
// import './ArtGallery.css';
// import { motion } from "framer-motion";


// const PaintingDetails = () => {
//   const { id } = useParams();
//   const painting = homePaintings[id];
//   const navigate = useNavigate();

//   if (!painting) return <p>Painting not found</p>;

//   return (
//    <div className="container-fluid top" style={{ padding: "40px" }}>
//    <div className="row">
//     <div className="col-md-5 d-flex justify-content-center">
//       <div>
       
//         <img
//           src={painting.img}
//           alt={painting.title}
//           style={{ maxWidth: "600px", width: "100%", borderRadius: "15px" }}
//         />
//       </div>
//     </div>
//     <div className="col-md-7">
//         <motion.div
//         className="btn-wrapper"
//         variants={{
//           hidden: { y: 40, opacity: 0 },
//           visible: { y: 0, opacity: 1 },
//         }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//       > <h1 className="text-center lefts">{painting.title}</h1>
//       </motion.div> 
//       <p style={{ marginTop: "20px", fontSize: "1.1rem" }}>{painting.description}</p>
//       <button
//         onClick={() => navigate("/art-gallery")}
//         style={{
//           marginTop: "30px",
//           padding: "10px 20px",
//           backgroundColor: "#6c63ff",
//           color: "white",
//           border: "none",
//           borderRadius: "8px",
//           cursor: "pointer",
//         }}
//       >
//         Back to Gallery
//       </button>
//     </div>
//   </div>
// </div>
//   );
// };

// export default PaintingDetails;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { homePaintings } from "../ArtGalleryData";
import "./ArtGallery.css";
import { motion } from "framer-motion";

const PaintingDetails = () => {
  const { id } = useParams();
  const painting = homePaintings[id];
  const navigate = useNavigate();

  if (!painting) return <p>Painting not found</p>;

  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="container-fluid top"
      style={{ padding: "40px" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="row">
        
        {/* Animated Image */}
        <div className="col-md-5 d-flex justify-content-center">
          <motion.img
            src={painting.img}
            alt={painting.title}
            variants={item}
            transition={{ duration: 0.8 }}
            style={{
              maxWidth: "600px",
              width: "100%",
              borderRadius: "15px",
            }}
          />
        </div>

        {/* Animated Text Section */}
        <div className="col-md-7">
          
          <motion.h1
            className="text-center lefts"
            variants={item}
            transition={{ duration: 0.8 }}
          >
            {painting.title}
          </motion.h1>

          <motion.p
            style={{ marginTop: "20px", fontSize: "1.1rem" }}
            variants={item}
          >
            {painting.description}
          </motion.p>

          {/* Animated Button */}
          <motion.button
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/art-gallery")}
            style={{
              marginTop: "30px",
              padding: "10px 20px",
              backgroundColor: "#6c63ff",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Back to Gallery
          </motion.button>

        </div>
      </div>
    </motion.div>
  );
};

export default PaintingDetails;