import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    icon: <FaGithub />,
    url: "https://github.com/Yesu09",
    label: "GitHub",
    hoverColor: "#181717",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/yesubabu-yadala-a9513127b/",
    label: "LinkedIn",
    hoverColor: "#0A66C2",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/___yesu__/",
    label: "Instagram",
    hoverColor:
      "linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)",
  },
];

const SocialLinks = () => {
  return (
    <div className="mt-12 flex justify-center items-center gap-6 flex-wrap">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          whileHover={{
            scale: 1.15,
            y: -8,
            rotate: 8,
          }}
          whileTap={{ scale: 0.9 }}
          className="
            group
            relative
            w-16
            h-16
            rounded-full
            bg-white
            shadow-lg
            border
            border-slate-200
            flex
            items-center
            justify-center
            text-3xl
            transition-all
            duration-300
            overflow-hidden
          "
        >
          {/* Background */}

          <div
            className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{
              background: social.hoverColor,
            }}
          />

          {/* Icon */}

          <div className="relative z-10 text-slate-700 group-hover:text-white transition-colors duration-300">
            {social.icon}
          </div>

          {/* Glow */}

          <div
            className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-all duration-300 -z-10"
            style={{
              background:
                social.label === "Instagram"
                  ? "#DD2A7B"
                  : social.hoverColor,
            }}
          />

          {/* Tooltip */}

          <span
            className="
              absolute
              -bottom-9
              text-xs
              bg-slate-900
              text-white
              px-3
              py-1
              rounded-lg
              opacity-0
              group-hover:opacity-100
              transition
              whitespace-nowrap
            "
          >
            {social.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;