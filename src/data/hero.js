import { SiNodedotjs, SiPostgresql, SiRedis, SiDocker } from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { TbBrandNodejs } from "react-icons/tb";

export const heroData = {
  badge: "🚀 Available for Full-Time Opportunities",

  title: "Node.js Backend Engineer",

  description:
    "Building scalable backend systems that power fintech, cloud applications, and enterprise platforms using Node.js, AWS, PostgreSQL, Redis, and Docker.",

  buttons: {
    primary: "View Projects",
    secondary: "Download Resume",
  },

  technologies: [
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#5FA04E",
    },
    {
      name: "Express",
      icon: TbBrandNodejs,
      color: "#444444",
    },
    {
      name: "AWS",
      icon: FaAws,
      color: "#FF9900",
    },
    {
      name: "Postgres",
      icon: SiPostgresql,
      color: "#336791",
    },
    {
      name: "Redis",
      icon: SiRedis,
      color: "#DC382D",
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
    },
  ],

  availability: ["Immediate Joiner", "Remote", "Backend Consultant"],
};
