import { motion } from "framer-motion";

const SkillsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="uppercase tracking-[0.35em] text-cyan-600 font-semibold">
        My Skills
      </p>

      <div className="mt-2 flex justify-center">
        <div className="h-1 w-24 rounded-full bg-cyan-500"></div>
      </div>
    </motion.div>
  );
};

export default SkillsHeader;