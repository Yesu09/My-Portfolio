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
      className="
        flex
        w-full
        max-w-[85px]
        flex-col
        items-center
        gap-1
        outline-none

        sm:max-w-[110px]
        sm:gap-2
        lg:max-w-[130px]
      "
    >
      {/* Folder */}
      <div className="relative">

        {/* Selection Background */}
        {selected && (
          <motion.div
            layoutId="selection"
            className="
              absolute
              -inset-1.5
              rounded-xl
              bg-blue-500/30
              sm:-inset-2
            "
          />
        )}

        {/* Folder Tab */}
        <div
          className="
            absolute
            left-1
            top-0
            z-10
            h-2
            w-7
            rounded-t-md
            bg-[#F7D56B]

            sm:left-2
            sm:h-3
            sm:w-10
          "
        />

        {/* Folder Body */}
        <div
          className="
            relative
            mt-1.5
            h-11
            w-16
            overflow-hidden
            rounded-lg
            bg-gradient-to-b
            from-[#FFD969]
            to-[#E9B735]
            shadow-xl

            sm:mt-2
            sm:h-14
            sm:w-20
          "
        >
          {/* Shine */}
          <div
            className="
              absolute
              left-1.5
              top-1.5
              h-1.5
              w-9
              rounded-full
              bg-white/40

              sm:left-2
              sm:top-2
              sm:h-2
              sm:w-12
            "
          />

          {/* Bottom Shadow */}
          <div
            className="
              absolute
              bottom-0
              h-2
              w-full
              bg-black/10

              sm:h-3
            "
          />
        </div>
      </div>

      {/* Folder Name */}
      <span
        className="
          block
          w-full
          overflow-hidden
          px-0.5
          text-center
          text-[10px]
          font-medium
          leading-tight
          text-white
          drop-shadow-lg
          break-words

          sm:text-sm
          sm:leading-tight
        "
      >
        {project.title}
      </span>
    </motion.button>
  );
};

export default Folder;