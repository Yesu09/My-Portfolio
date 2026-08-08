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
      className="flex flex-col items-center w-full px-2 sm:px-0"
    >
      {/* ================= Monitor + Bezel ================= */}
      <div className="w-full max-w-2xl">
        {/* Monitor */}
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
            aspect-[16/10]
            bg-[#202124]
            rounded-t-[28px]
            shadow-2xl
            p-3
            sm:p-4
            lg:p-5
          "
        >
          {/* Camera */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-700 z-20" />

          {/* Screen */}
          <div
            className="
              relative
              h-full
              w-full
              rounded-2xl
              overflow-hidden
              bg-gradient-to-br
              from-[#4A90E2]
              via-[#2B5FC8]
              to-[#143D8F]
            "
          >
            {/* Wallpaper Glow */}
            <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-300/10 blur-3xl" />

            {/* Folder Grid */}
            <div
              className="
                relative
                z-10
                grid
                grid-cols-2
                sm:grid-cols-3
                lg:grid-cols-4
                gap-y-8
                gap-x-6
                p-6
                sm:p-8
                lg:p-10
              "
            >
              {projects.map((project) => (
                <Folder
                  key={project.id}
                  project={project}
                />
              ))}
            </div>

            {/* Glass Reflection */}
            <div
              className="
                absolute
                top-0
                right-10
                w-24
                h-full
                bg-white/10
                skew-x-[-20deg]
                blur-sm
              "
            />
          </div>
        </motion.div>

        {/* ================= Bottom Bezel ================= */}
        <div
          className="
            w-full
            h-14
            bg-gradient-to-b
            from-[#E6E6E6]
            to-[#BEBEBE]
            rounded-b-3xl
            flex
            justify-center
            items-center
            shadow-lg
          "
        >
          <div className="w-5 h-5 rounded-full bg-gray-400" />
        </div>
      </div>

      {/* ================= Stand ================= */}
      <div
        className="
          w-20
          sm:w-24
          h-16
          bg-gradient-to-b
          from-[#D9D9D9]
          to-[#A9A9A9]
          rounded-b-xl
        "
      />

      {/* ================= Base ================= */}
      <div
        className="
          w-40
          sm:w-56
          h-4
          rounded-full
          bg-gradient-to-b
          from-[#D8D8D8]
          to-[#9A9A9A]
          shadow-md
        "
      />
    </motion.div>
  );
};

export default Monitor;