import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        pointerEvents: "none",
      }}
      transition={{
        opacity: {
          duration: 0.7,
          delay: 1.8,
        },
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        flex-col
        items-center
        justify-center
        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-white
      "
    >
      {/* Portfolio Text */}
      <motion.h1
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          text-[clamp(1.8rem,8vw,3rem)]
          font-extrabold
          tracking-tight
        "
      >
        <motion.span
          className="text-gray-800"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            textShadow: [
              "0 0 0px rgba(31,41,55,0)",
              "0 0 15px rgba(31,41,55,0.2)",
              "0 0 0px rgba(31,41,55,0)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Yesu's{" "}
        </motion.span>

        <motion.span
          className="text-blue-600"
          animate={{
            opacity: [0.5, 1, 0.5],
            textShadow: [
              "0 0 0px rgba(37,99,235,0)",
              "0 0 18px rgba(37,99,235,0.35)",
              "0 0 0px rgba(37,99,235,0)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Portfolio
        </motion.span>
      </motion.h1>
    </motion.div>
  );
}

export default LoadingScreen;
