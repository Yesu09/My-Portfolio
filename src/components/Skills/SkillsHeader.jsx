import { motion } from "framer-motion";

const SkillsHeader = () => {
  return (
    <>
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
        My Skills
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-1 bg-blue-600 rounded-full mx-auto mt-3 mb-7"
      />
    </>
  );
};

export default SkillsHeader;