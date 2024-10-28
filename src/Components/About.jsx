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
        To summarize, I'm a versatile full-stack developer specializing in
        creating cutting-edge, dynamically scalable web applications using the
        MERN stack, React, TailwindCSS, and Next.js with server-side
        rendering (SSR).
        I specialize in building responsive, high-performance websites that come
        alive with smooth animations from GSAP and interactive 3D experiences
        using Three.js. My goal is to create engaging visuals and fluid
        animations while ensuring fast, efficient rendering through SSR. Driven
        by a commitment to clean code and innovative solutions, I strive to
        deliver exceptional user experiences that push the boundaries of web
        development.
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
