import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const icons = [
  { icon: <FaJsSquare className="text-5xl text-yellow-400" />, angle: 0 },
  { icon: <FaReact className="text-6xl text-cyan-400" />, angle: 45 },
  { icon: <FaNodeJs className="text-5xl text-green-500" />, angle: 90 },
  { icon: <SiMongodb className="text-5xl text-green-600" />, angle: 135 },
  { icon: <SiMysql className="text-5xl text-blue-500" />, angle: 180 },
  { icon: <FaPython className="text-5xl text-blue-500" />, angle: 225 },
  { icon: <FaHtml5 className="text-5xl text-orange-500" />, angle: 270 },
  { icon: <FaCss3Alt className="text-5xl text-blue-600" />, angle: 315 },
];

export default function Middlesection() {
  const radius = 140;

  return (
    <div className="relative hidden h-[500px] w-full items-center justify-center lg:flex lg:order-2">
      {/* Orbit */}
      <motion.div
        className="relative h-[360px] w-[360px]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {icons.map((item, index) => {
          const x = radius * Math.cos((item.angle * Math.PI) / 180);
          const y = radius * Math.sin((item.angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                x,
                y,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{ rotate: -360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {item.icon}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}