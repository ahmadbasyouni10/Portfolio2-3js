import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import resumeUrl from '../assets/Ahmad_Basyouni_Resume.pdf';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ahmad_Basyouni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Story</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      <div className="mt-4 flex flex-col md:flex-row items-start justify-between relative">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a skilled software & machine learning developer with experience in Python, TypeScript, and JavaScript. I specialize in frameworks like React and Node.js, and have substantial experience in machine learning with PyTorch. As a junior with a 4.0 GPA, I am passionate about leveraging AI to solve complex problems. My practical experience spans back-end development, cloud services, and DevOps practices, making me a versatile and effective contributor in various tech environments.
        </motion.p>

        <div className="mt-4 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:transform flex flex-col items-center md:mr-8">
          <button
            onClick={handleDownload}
            className="py-3 px-6 rounded-full bg-[#5e6bff] text-white font-bold text-lg hover:bg-[#5e6bff] transition-colors duration-300"
          >
            Download my Resume
          </button>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");