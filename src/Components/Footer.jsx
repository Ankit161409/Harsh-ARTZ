/**CORE LIBRARIES IMPORT */
import React from "react";
import { motion } from "framer-motion";

/**ICONS IMPORT */
import { FaEnvelope,FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 }
        }
      }}
      style={{ position: "relative" }} // ensure absolute elements inside work
    >
      {/* Left corner small clickable credit */}
      <motion.a
        href="https://ankit-portfolio-001.vercel.app/" // put your desired link here
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          left: "1rem",
          bottom: "1rem",
          fontSize: "0.7rem",
          color: "#888",
          textDecoration: "none",
        }}
        whileHover={{ scale: 1.05, color: "#c8401a" }} // subtle hover effect
        whileTap={{ scale: 0.95 }}
      >
        Made with ❤️ by Ankit
      </motion.a>

      <motion.p
        className="section-text main-text"
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Ⓒ 2026 - Harsh Gautam. All rights reserved.
      </motion.p>

      <motion.p
        className="section-text main-text"
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our Shipping & Returns Policy, Privacy Policy, and Terms & Conditions govern all transactions and use of this website.
      </motion.p>

      <motion.div
        className="social-icons"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
       

        <motion.a
          href="https://www.instagram.com/harsh_artz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          className="section-text"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram />
        </motion.a>

        <motion.a
          href="https://youtube.com"
          className="section-text"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaYoutube />
        </motion.a>
         <motion.a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=harshartz56@gmail.com"
          className="section-text"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
        > 
          <FaEnvelope />
        </motion.a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;