import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-x-hidden flex flex-col justify-center items-center ${styles.padding}`}>
      <div
        className={`${styles.padding} absolute inset-0 top-[190px] max-w-8xl mx-auto flex flex-row items-start gap-4 sm:mx-auto`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="flex flex-col w-4 h-4 rounded-full bg-[hsla(259,90%,62%,1)]" />

          <div className="w-1 h-40 sm:h-80 violet-gradient"></div>
        </div>

        <div className="flex flex-col ml-5">
          <h1 className={`${styles.heroHeadText} `}>
            Hi, I'm
            <span className="text-[#915eff] ml-4">Nikhil</span>
          </h1>

          <p className={`${styles.heroSubText} mt-10 text-white-100`}>
            I develop Software & Web Applications with 3D visuals{" "}
            <br className="sm:block hidden" /> to solve modern real-life
            problems.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-0 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1.5 mt-6">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
