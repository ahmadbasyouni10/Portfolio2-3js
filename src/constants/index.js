import {
  nodejs,
  creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import pytorch from './pytorch.png'
import native from './1174949_js_react js_logo_react_react native_icon.png'
import futhubb from './futhub1.PNG'
import campuscal from './campuscal.PNG'
import campuscal2 from './campuscal2.PNG'
import campuscal4 from './campuscal4.PNG'
import futhubb2 from './futhubb2.PNG'
import aws from './aws.png'
import ai_reccs from './ai_reccs.png'
import video from './video.mov'
import { color } from "framer-motion";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: nodejs,
  },
  {
    title: "Machine Learning/AI Engineer",
    icon: pytorch,
  },
  {
    title: "React Native Developer",
    icon: native,
  },
  {
    title: "Cloud Engineer",
    icon: aws,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Machine Learning/AI Researcher",
    company_name: "NYU (New York University)",
    icon: shopify,  // Add the appropriate icon for NYU
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Researched GPT's (LLM) emotional intelligence capabilities, benchmarking against advanced PyTorch models (Torchmoji and BERT).",
      "Applied vectorization methods for Natural Language Processing and utilized LSTM networks to improve DeepMoji’s model accuracy by 30%.",
      "Trained and fine-tuned a Reinforcement Learning PyTorch model, optimizing for stressed and anxious emotions by 70%.",
      "Engineered 10 new emojis into the emotion mapping of a Federated Learning-based BERT model and tracked backward loss, resulting in a 40% increase in prediction accuracy on a dataset of 300 sentences mapped with emojis.",
      "Explored Deep Learning implementations and ML algorithms' trade-offs, focusing on theoretical foundations and ML project lifecycle.",
      "Utilized Langchain to facilitate context grounding and prompt engineering by chunking queries and incorporating sequencing operations.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "New EIC",
    icon: tesla,  // Add the appropriate icon for New EIC
    iconBg: "#E6DEDD",
    date: "May 2024 - Present",
    points: [
      "Led the Software Development Life Cycle for a school system web application, integrating data-based charts, analytics, and AI features using React, Node.js, OpenAI, and MongoDB, resulting in a platform now utilized by over 1000 students in China.",
      "Launched 50+ Express routes to expand backend functionalities/API capabilities and implemented lazy loading for scalable performance.",
      "Collaborated with a team of 15 engineers to produce detailed technical and product documentation, while conducting rigorous code reviews, resulting in a notable reduction in inquiries and enhanced software quality standards.",
      "Implemented CI/CD pipelines, reducing deployment time by 30% for timely updates and enhancements to the school system platform, while also initiating the initial development stages of an iOS dashboard app using Swift and Xcode.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "SEO Tech Developer - Goldman Sachs",
    icon: meta,  // Add the appropriate icon for Goldman Sachs
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Completed 300+ hours of software engineering training led by Goldman Sachs engineers, focusing on full-stack development.",
      "Gained proficiency in DevOps using Ansible/Terraform, preparing for cloud-based integration/systems testing.",
      "Engaged in data engineering tasks, focused on data integrity and security principles within a Linux environment, utilizing version control and agile methodologies, including paired programming, scrum, and application resiliency.",
      "Led development of Valorant Helper, an AI-powered web application that enhances player strategy with real-time game stats and answers.",
      "Optimized data retrieval efficiency by 80% over the Valorant API by integrating Python with Flask and Next.js, utilizing SQLite3 for data management, and streamlining CI/CD workflows and testing processes.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Dyali Interiors",
    icon: starbucks,  // Add the appropriate icon for Dyali Interiors
    iconBg: "#E6DEDD",
    date: "May 2023 - September 2023",
    points: [
      "Built and maintained a web app using HTML, CSS, and Javascript (D3.js) to present interactive architectural visualizations for clients, resulting in a notable 20% increase in customer engagement.",
    ],
  },
];


const projects = [
  {
    name: "ProxiLink",
    description: "AI-driven app that enhances social connections by offering personalized venue recommendations, smart itineraries, and seamless group planning features, enabling users to discover and enjoy optimal social experiences effortlessly.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "Google Cloud",
        color: "pink-text-gradient",
      },
    ],
    images: [ai_reccs], // Your static image
    video: video, // Your video file
    website_link: "https://www.proxilink.info/",
    source_code_link: "https://github.com/headStarter-Travel-app/travelAppUI",
  },
  {
    name: "Fut Hub",
    description:
      "Web application that allows soccer/football fans and communities to interact and socialize by sharing videos, images, and posts, as well as editing profiles and adding friends.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    images: [futhubb, futhubb2],
    website_link: "https://fut-hub.vercel.app/",
    source_code_link: "https://github.com/ahmadbasyouni10/FutHub-CodepathWEB102-FinalProject",
  },
  {
    name: "CampusCal",
    description:
    "Web application that helps students organize their time and track performance while preparing for coding assessments. Providing personalized study plans through a ML model.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "PyTorch",
        color: "pink-text-gradient",
      },
      {
        name: "SQLite3",
        color: "pink-text-gradient",
      }
    ],
    images: [campuscal4, campuscal], 
    source_code_link: "https://github.com/ahmadbasyouni10/CampusCal",
    website_link: "https://campuscal-frontend.onrender.com/"
  },
];

export { services, technologies, experiences, projects };