import { motion } from "framer-motion";
import developer from "../../assets/Developer.png";

const DeveloperIllustration = () => {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex justify-center items-center w-full"
    >
      <div className="relative">
        {/* Background Glow */}

        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-blue-300/20
            blur-3xl
            scale-90
          "
        />

        {/* Developer Image */}

        <img
          src={developer}
          alt="Developer Working"
          draggable={false}
          className="
            relative
            w-[220px]
            sm:w-[280px]
            md:w-[340px]
            lg:w-[400px]
            xl:w-[450px]
            h-auto
            select-none
            object-contain
          "
        />
      </div>
    </motion.div>
  );
};

export default DeveloperIllustration;