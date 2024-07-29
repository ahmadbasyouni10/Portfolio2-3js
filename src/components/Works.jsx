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
import Appwrite from "../constants/appwrite.png";
import googlemaps from "../constants/Google Maps API.png";
import applemaps from "../constants/apple maps.png";
import fastapi from "../constants/FastAPI.png";
import googlecloud from "../constants/cloud.png";
import expoo from "../constants/expoo.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const techImages = {
  "Next.js": next,
  Supabase: Supabase,
  Tailwind: tailwind,
  React: reactt,
  Python: python,
  Flask: flaskk,
  PyTorch: pytorch,
  SQLite3: sqlite3,
  Appwrite: Appwrite,
  "Google Maps API": googlemaps,
  "Apple Maps API": applemaps,
  FastAPI: fastapi,
  "Google Cloud": googlecloud,
  Expo: expoo,
  "React Native": reactt,
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  video,
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

  const isProxiLink = name === "ProxiLink";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full lg:w-[60%] xl:w-[80%] mx-auto mb-20"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-8 rounded-2xl w-full h-full flex flex-col shadow-xl"
      >
        <div className="relative w-full h-[400px] mb-6">
          {isProxiLink ? (
            <div className="relative w-full h-full flex justify-center items-center">
              {/* First Phone (Image) */}
              <div className="relative w-[220px] h-[440px] rounded-[2rem] bg-black p-2 shadow-xl transform -rotate-6 z-0">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
                <div className="w-full h-full rounded-[1.8rem] overflow-hidden">
                  <img
                    src={images[0]}
                    className="w-full h-full object-cover"
                    alt="ProxiLink App Screen 1"
                  />
                </div>
              </div>

              {/* Second Phone with Video (now on top) */}
              <div className="relative w-[220px] h-[440px] rounded-[2rem] bg-black p-2 shadow-xl transform rotate-6 -ml-16 z-10">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl"></div>
                <div className="w-full h-full rounded-[1.8rem] overflow-hidden">
                  {video ? (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={images[1] || images[0]}
                      className="w-full h-full object-cover"
                      alt="ProxiLink App Screen 2"
                    />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index} className="w-full h-[400px]">
                  <img
                    src={img}
                    alt={`project_image_${index}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </Slider>
          )}

          <div className="absolute top-0 right-0 m-3 card-img_hover z-10">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-white font-bold text-[32px] mb-4">{name}</h3>
          <p className="text-secondary text-[18px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 my-4">
          {tags.map((tag) => (
            <div
              key={tag.name}
              className="rounded-lg overflow-hidden relative group w-[70px] h-[70px]"
              style={{
                background: "linear-gradient(180deg, #041433 0%, #010918 100%)",
                transition: "transform 0.3s ease",
              }}
              title={tag.name}
            >
              <div
                className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                style={{ background: "rgba(0, 0, 0, 0.5)" }}
              >
                <span className="text-white text-xs font-poppins text-center px-1">
                  {tag.name}
                </span>
              </div>
              <div className="w-full h-full flex justify-center items-center p-2">
                <img
                  src={techImages[tag.name]}
                  alt={tag.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 group-hover:opacity-50 transition-transform duration-300 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
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

      <div className="w-full flex mb-20">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[20px] max-w-4xl leading-[30px] mx-auto text-center"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and hosted web applications. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="flex flex-col items-center gap-y-20">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
