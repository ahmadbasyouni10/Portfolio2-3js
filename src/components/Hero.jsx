import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  const [showEarth, setShowEarth] = useState(true);
  const [earthScale, setEarthScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Show Earth only on screens wider than 768px
      setShowEarth(width > 768);

      // Adjust Earth scale based on screen size
      if (width > 1200) {
        setEarthScale(1);
      } else if (width > 992) {
        setEarthScale(0.8);
      } else if (width > 768) {
        setEarthScale(0.6);
      } else {
        setEarthScale(0.4);
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#5e6bff]' />
          <div className='w-1 sm:h-80 h-40 bg-[#5e6bff]' />
        </div>

        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white`} style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
            <span className='text-[#5e6bff]'>Ahmad Basyouni</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100`} style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
            <span className='text-[#5e6bff]'>Software & AI/ML Engineer</span> majoring in Computer Engineering and CS at City University of New York CSI, aiming to create innovative solutions in the 
            field of AI. If you want to learn more, check out my resume, experience, and projects!
          </p>
        </div>
      </div>

      {showEarth && (
        <div className="absolute inset-0" style={{ transform: `scale(${earthScale})` }}>
          <EarthCanvas />
        </div>
      )}

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