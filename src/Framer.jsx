import React from "react";
import "./Framer.css";
import { motion } from "framer-motion";

const Framer = () => {
  return (
    <>
      <motion.div animate={{ opacity: 0.75 }} className="b">
        <motion.div
          animate={{ scale: 1.5, borderRadius: "50%" }}
          className="d"
        ></motion.div>
        <motion.h2
          animate={{ color: "#1a4012", x: 100, y: -100 }}
          className="d1"
        >
          Welcome to T page
        </motion.h2>
        <motion.button animate={{ rotate: 14, scale: 1.5 }} className="b1">
          Click Me
        </motion.button>
      </motion.div>
    </>
  );
};

export default Framer;
