import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto overflow-x-hidden flex flex-col justify-center items-center ${styles.padding}`}
    >
      <div
        className={`${styles.padding} absolute inset-0 top-[190px] max-w-8xl mx-auto flex flex-row items-start gap-4 sm:mx-auto`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="flex flex-col w-4 h-4 rounded-full bg-[hsla(259,90%,62%,1)]" />

          <div className="w-1 h-40 sm:h-80 violet-gradient"></div>
        </div>

        <div className="flex flex-col ml-5 ">
          <h1 className={`${styles.heroHeadText} overflow-hidden `}>
            Hi, I'm
            <span className="text-[#915eff] ml-4">Nikhil</span>
          </h1>

          <p className={`${styles.heroSubText} mt-10 mb-5 text-white-100 `}>
            I build immersive web apps powered by 3D visuals, motion, and smart
            engineering, to address modern real-life challenges.
          </p>
          <br />
        </div>
      </div>

      <div className="absolute xs:bottom-[3rem] md:bottom-0 md:shrink-0 bottom-10 w-full flex flex-col justify-center items-center mt-10">
        <div className="block text-l ">Click the Button Below</div>
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1.5 mt-6">
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
