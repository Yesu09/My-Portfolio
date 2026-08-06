import { motion } from "framer-motion";

const CertificateCard = ({ certificate, onClick }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{ duration: 0.25 }}
      onClick={() => onClick(certificate)}
      className="
        cursor-pointer
        rounded-xl
        overflow-hidden
        bg-white
        shadow-md
        border
        border-slate-200
        group
        w-full
        max-w-[240px]
      "
    >
      {/* Certificate Image */}

      <div className="overflow-hidden">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="
            w-full
            h-32
            md:h-36
            lg:h-40
            object-cover
            transition-all
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Details */}

      <div className="px-3 py-2">
        <h3 className="text-sm font-semibold truncate">
          {certificate.title}
        </h3>

        <p className="text-xs text-slate-500 truncate">
          {certificate.issuer}
        </p>
      </div>
    </motion.div>
  );
};

export default CertificateCard;