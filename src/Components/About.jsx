import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import SectionWrapper from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="webdev" className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-center text-[20px]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          style={{ fontSize: "25px", fontWeight: "200" }}
          className={styles.sectionSubText}
        >
          Introduction
        </p>
        <br />
        <h1
          style={{ fontSize: "40px", fontWeight: "400" }}
          className={styles.sectionHeadText}
        >
          Overview in a Nutshell.
        </h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        style={{
          fontFamily: "Poppins",
          fontSize: "20px",
          fontWeight: "400",
          letterSpacing: "0.15px",
        }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a full-stack developer crafting web experiences that aren’t just
        fast — they’re alive. From high-performance apps built with the MERN
        stack, React, and Next.js (SSR) to scalable solutions designed
        for real impact, I blend performance with precision. My creative edge?
        Seamless GSAP animations and interactive Three.js 3D visuals that turn
        static interfaces into dynamic, immersive experiences. Whether it’s a
        slick dashboard or an animated product showcase, I design with intent
        and build for wow. With clean code, intuitive UI/UX, and an obsession
        with innovation, I don’t just follow trends — I shape the future of the
        web.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 overflow-hidden p-2">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
