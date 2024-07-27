import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import next from "../constants/next.png";
import Supabase from "../constants/Supabase.png";
import tailwind from "../constants/tailwind.png";
import reactt from "../constants/reactjs.png";
import python from "../constants/python.png";
import flaskk from "../constants/Flask.svg";
import pytorch from "../constants/pytorch.png";
import sqlite3 from "../constants/sqlite3.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the techImages mapping
const techImages = {
  "Next.js": next,
  Supabase: Supabase,
  Tailwind: tailwind,
  "React": reactt,
  "Python": python,
  "Flask": flaskk,
  "PyTorch": pytorch,
  "SQLite3": sqlite3,
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,  // Change this from 'image' to 'images'
  source_code_link,
  website_link,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full lg:w-[90%] xl:w-[90%] mx-auto mb-20"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-8 rounded-2xl w-full h-full flex flex-col shadow-xl'
      >
        <div className='relative w-full h-[500px] mb-6'>
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="w-full h-[500px]">
                <img
                  src={img}
                  alt={`project_image_${index}`}
                  className='w-full h-full object-cover rounded-2xl'
                />
              </div>
            ))}
          </Slider>

          <div className='absolute top-0 right-0 m-3 card-img_hover z-10'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>


        <div className='flex-grow'>
          <h3 className='text-white font-bold text-[32px] mb-4'>{name}</h3>
          <p className='text-secondary text-[18px] leading-relaxed'>{description}</p>
        </div>

        <div className="flex justify-center space-x-4 my-4 items-center">
          {tags.map((tag) => (
            <div
              key={tag.name}
              className="rounded-lg overflow-hidden relative group"
              style={{
                background: "linear-gradient(180deg, #041433 0%, #010918 100%)",
                padding: "10px",
                transition: "transform 0.3s ease",
              }}
              title={tag.name}
            >
              <div
                className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                style={{ background: "rgba(0, 0, 0, 0.5)" }}
              >
                <span className="text-white text-xs font-poppins">{tag.name}</span>
              </div>
              <img
                src={techImages[tag.name]}
                alt={tag.name}
                width={50}
                height={50}
                className="group-hover:scale-110 group-hover:opacity-50 transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>

        <div className='flex justify-center'>
          <button
            onClick={() => window.open(website_link, "_blank")}
            className="py-3 px-6 rounded-full bg-[#5e6bff] text-white font-bold text-lg hover:bg-[#4e5bff] transition-colors duration-300"
          >
            Website
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mb-10`}>Projects</h2>
      </motion.div>

      <div className='w-full flex mb-20'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[20px] max-w-4xl leading-[30px] mx-auto text-center'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and hosted web applications. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='flex flex-col items-center gap-y-20'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");