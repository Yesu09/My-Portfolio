import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "text-yellow-400",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-sky-500",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-600",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-800",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-500",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-600",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-slate-900",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-yellow-500",
  },
];

const SkillGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            type: "tween"
          }}
          whileHover={{
            y: -10,
            scale: 1.05,
            transition: {
                duration: 0.1,
                ease: "easeOut"
            },
          }}
          className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl"
        >
          <div
            className={`text-6xl flex justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${skill.color}`}
          >
            {skill.icon}
          </div>

          <h3 className="mt-6 text-center text-xl font-semibold text-slate-800">
            {skill.name}
          </h3>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillGrid;