 

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { homePaintings } from "../ArtGalleryData";
import { Paintings } from "../ImportImages/PaintingsImport";
import  {Charcoal}  from "../ImportImages/CharcoalImport.js";
import  {digitalArt}  from "../ImportImages/DigitalImport.js";
import  {Water}  from "../ImportImages/WaterColorPaintingImport.js";
import  { Coloured}  from "../ImportImages/ColouredImport.js";
import  { Mixed}  from "../ImportImages/MixedMediaImport.js";
import  { Pen}  from "../ImportImages/PenSketchesImport.js";





// import { Acrylic } from "../ImportImages/AcrylicImport";

import "./ArtGallery.css";
import { motion } from "framer-motion";

const PaintingDetails = () => {
  const { apiType, id } = useParams();
  const navigate = useNavigate();


   
  let painting;

  switch (apiType) {
    case "home":
      painting = homePaintings[Number(id)];
      break;

    case "PaintingsImport":
      painting = Paintings[Number(id)];
      break;

    case "CharcoalImport":
      painting = Charcoal[Number(id)];
      break;
 
      case "artgallery":
      painting = homePaintings[Number(id)];
      break;

       case "digital":
      painting = digitalArt[Number(id)];
      break;

        case "Water":
      painting = Water[Number(id)];
      break;

        case "Pencil":
      painting = Coloured[Number(id)];
      break;

       case "Mixed":
      painting = Mixed[Number(id)];
      break;

          case "Pen":
      painting = Pen[Number(id)];
      break;

  
    default:
      painting = null;
  }

  
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
       <p className='left '> {painting.title}   </p>
          </motion.h1>

          <motion.p
            style={{ marginTop: "20px", fontSize: "1.1rem" }}
            variants={item}
          >
            {painting.description}
          </motion.p>


          <motion.p
            style={{ marginTop: "20px", fontSize: "1.1rem" }}
            variants={item}
          >
          <p className='h2'>  Price :  {painting.price}</p>
          </motion.p>
          

          <motion.button
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
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