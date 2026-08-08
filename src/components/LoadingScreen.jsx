import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
        pointerEvents: "none",
      }}
      transition={{
        opacity: {
          duration: 0.7,
          delay: 1.2,
        },
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-white
      "
    >
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          text-3xl
          font-extrabold
          tracking-tight
          text-gray-800
          sm:text-5xl
        "
      >
        Yesu's{" "}
        <span className="text-blue-600">
          Portfolio
        </span>
      </motion.h1>
    </motion.div>
  );
}

export default LoadingScreen;
