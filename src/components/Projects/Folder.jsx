import { motion } from "framer-motion";
import { useState } from "react";

const Folder = ({ project }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(true);

    setTimeout(() => {
      window.open(project.live, "_blank");
      setSelected(false);
    }, 180);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{
        scale: 1.08,
        y: -4,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="flex flex-col items-center gap-2 outline-none"
    >
      {/* Folder */}

      <div className="relative">

        {/* Selection Background */}

        {selected && (
          <motion.div
            layoutId="selection"
            className="absolute -inset-2 rounded-xl bg-blue-500/30"
          />
        )}

        {/* Folder Tab */}

        <div
          className="
          absolute
          top-0
          left-2
          w-10
          h-3
          rounded-t-md
          bg-[#F7D56B]
          z-10
          "
        />

        {/* Folder Body */}

        <div
          className="
          relative
          mt-2
          w-20
          h-14
          rounded-lg
          bg-gradient-to-b
          from-[#FFD969]
          to-[#E9B735]
          shadow-xl
          overflow-hidden
          "
        >
          {/* Shine */}

          <div
            className="
            absolute
            top-2
            left-2
            w-12
            h-2
            rounded-full
            bg-white/40
            "
          />

          {/* Bottom Shadow */}

          <div className="absolute bottom-0 w-full h-3 bg-black/10" />
        </div>

      </div>

      {/* Folder Name */}

      <span
        className="
        text-white
        text-sm
        font-medium
        text-center
        drop-shadow-lg
        "
      >
        {project.title}
      </span>
    </motion.button>
  );
};

export default Folder;