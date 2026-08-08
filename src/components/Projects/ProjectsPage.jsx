import { motion } from "framer-motion";
import Monitor from "./Monitor";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
      relative
      overflow-hidden
      lg:py-7
      "
    >
      {/* ================= Background ================= */}

      <div
        className="
        absolute
        inset-0
        -z-10

        bg-[#EEF8FF]

        bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)]

        bg-[size:55px_55px]
        "
      />

      {/* Floating Blur */}

      <div
        className="
        absolute
        top-0
        right-0
        w-80
        h-80
        rounded-full
        bg-blue-200/40
        blur-[120px]
        -z-10
        "
      />

      <div
        className="
        absolute
        bottom-0
        left-0
        w-96
        h-96
        rounded-full
        bg-cyan-200/30
        blur-[150px]
        -z-10
        "
      />

      {/* ================= Content ================= */}

      <div
        className="
        max-w-7xl
        mx-auto
        px-5
        flex
        flex-col
        items-center
        "
      >
        {/* Heading */}

        <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
            text-2xl
            md:text-2xl
            lg:text-3xl
            font-bold
            text-center
            text-slate-800
          "
      >
        My Projects
      </motion.h2>

        {/* Blue Brush Line */}

        <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-1 bg-blue-600 rounded-full mx-auto my-3"
      />

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
          mt-2
          text-gray-600
          text-center
          text-sm
          md:text-base
          max-w-xl
          "
        >
          Click on any project folder to open the live demo.
        </motion.p>

        {/* Monitor */}

        <div className="w-full mt-6 lg:mt-6">
          <Monitor />
        </div>
      </div>
    </section>
  );
};

export default Projects;