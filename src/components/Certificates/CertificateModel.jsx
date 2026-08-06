import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

const CertificateModel = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-md
            p-4
          "
        >
          {/* Close Button */}

          <button
            onClick={onClose}
            className="
              absolute
              top-5
              right-5
              z-50
              p-2
              rounded-full
              bg-slate-800
              hover:bg-slate-700
              transition
            "
          >
            <IoClose
              size={28}
              className="text-white"
            />
          </button>

          {/* Certificate */}

          <motion.div
            initial={{
              scale: 0.85,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.85,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              flex
              items-center
              justify-center
              w-full
              h-full
            "
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="
                max-w-full
                max-h-[90vh]
                object-contain
                rounded-xl
                bg-white
                shadow-2xl
              "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModel;