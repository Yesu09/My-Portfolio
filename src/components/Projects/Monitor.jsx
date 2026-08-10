import { motion } from "framer-motion";
import Folder from "./Folder";
import projects from "./ProjectsData";

const Monitor = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        flex
        w-full
        flex-col
        items-center
        px-2
        sm:px-0
      "
    >
      {/* ================= Monitor ================= */}
      <motion.div
        whileHover={{
          rotateX: 3,
          rotateY: -3,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
        className="
          relative
          w-full
          max-w-[700px]
          aspect-[4/3]

          sm:aspect-[16/10]

          rounded-t-[22px]
          sm:rounded-t-[28px]

          bg-[#202124]

          p-2
          sm:p-4
          lg:p-5

          shadow-2xl
        "
      >
        {/* Camera */}
        <div
          className="
            absolute
            left-1/2
            top-1.5
            z-20
            h-1.5
            w-1.5
            -translate-x-1/2
            rounded-full
            bg-gray-700

            sm:top-2
            sm:h-2
            sm:w-2
          "
        />

        {/* ================= Screen ================= */}
        <div
          className="
            relative
            h-full
            w-full
            overflow-hidden
            rounded-xl
            sm:rounded-2xl
            bg-gradient-to-br
            from-[#4A90E2]
            via-[#2B5FC8]
            to-[#143D8F]
          "
        >
          {/* Wallpaper Glow */}
          <div
            className="
              absolute
              -right-16
              -top-16
              h-48
              w-48
              rounded-full
              bg-white/10
              blur-3xl
              sm:h-72
              sm:w-72
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              h-56
              w-56
              rounded-full
              bg-cyan-300/10
              blur-3xl
              sm:h-96
              sm:w-96
            "
          />

          {/* ================= Folder Grid ================= */}
          <div
            className="
              relative
              z-10
              grid
              grid-cols-3
              gap-x-1
              gap-y-2
              p-2

              sm:gap-x-4
              sm:gap-y-6
              sm:p-6

              lg:grid-cols-4
              lg:gap-x-5
              lg:gap-y-6
              lg:p-7
            "
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex min-w-0 justify-center"
              >
                <Folder project={project} />
              </div>
            ))}
          </div>

          {/* Glass Reflection */}
          <div
            className="
              pointer-events-none
              absolute
              right-5
              top-0
              h-full
              w-10
              skew-x-[-20deg]
              bg-white/10
              blur-sm
              sm:right-10
              sm:w-24
            "
          />
        </div>
      </motion.div>

      {/* ================= Bottom Bezel ================= */}
      <div
        className="
          flex
          h-10
          w-full
          max-w-[700px]
          items-center
          justify-center
          rounded-b-2xl
          bg-gradient-to-b
          from-[#E6E6E6]
          to-[#BEBEBE]
          shadow-lg

          sm:h-14
          sm:rounded-b-3xl
        "
      >
        <div
          className="
            h-3
            w-3
            rounded-full
            bg-gray-400

            sm:h-5
            sm:w-5
          "
        />
      </div>

      {/* ================= Stand ================= */}
      <div
        className="
          h-12
          w-16
          rounded-b-xl
          bg-gradient-to-b
          from-[#D9D9D9]
          to-[#A9A9A9]

          sm:h-16
          sm:w-24
        "
      />

      {/* ================= Base ================= */}
      <div
        className="
          h-3
          w-32
          rounded-full
          bg-gradient-to-b
          from-[#D8D8D8]
          to-[#9A9A9A]
          shadow-md

          sm:h-4
          sm:w-56
        "
      />
    </motion.div>
  );
};

export default Monitor;