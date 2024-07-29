import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  const [showEarth, setShowEarth] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowEarth(window.innerWidth > window.screen.width / 2);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#5e6bff]' />
          <div className='w-1 sm:h-80 h-40 bg-[#5e6bff]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`} style={{ fontSize: '2.5rem' }}>
            <span className='text-[#5e6bff]'>Ahmad Basyouni</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100`} style={{ fontSize: '1.5rem' }}>
            <span className='text-[#5e6bff]'>Software & AI/ML Engineer</span> majoring in Computer Engineering and CS at City University of New York CSI, aiming to create innovative solutions in the 
            field of AI. If you want to learn more, check out my resume, experience, and projects!
          </p>
        </div>
      </div>

      {showEarth && <EarthCanvas />}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#5e6bff] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#5e6bff] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;