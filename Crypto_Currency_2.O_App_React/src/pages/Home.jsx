import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-black bg-opacity-90 w-full h-85vh flex flex-col items-center justify-center">
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <img
          className="w-full h-full object-contain filter grayscale"
          src={btcSrc}
          alt="Bitcoin"
        />
      </motion.div>

      <p className="text-6xl text-center font-bold text-white opacity-70 mt-[-20px]">
        Crypto Currency 2.O
      </p>
    </div>
  );
};

export default Home;
