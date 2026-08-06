import { useState } from "react";
import { motion } from "framer-motion";

import certificates from "../Certificates/CertificatesData";
import CertificateCard from "../Certificates/CertificateCard";
import CertificateModel from "../Certificates/CertificateModel";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="certificates"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        lg:px-8
        py-6
        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-slate-100
      "
    >
      <div className="w-full max-w-7xl">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold
            text-center
            text-slate-800
          "
        >
          Certificates
        </motion.h2>

        {/* Underline */}

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-1 bg-blue-600 rounded-full mx-auto mt-3"
        />

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mt-3
            text-center
            text-slate-500
            text-sm
            md:text-base
          "
        >
          Click any certificate to preview it.
        </motion.p>

        {/* Certificates Grid */}

        <div
          className="
            mt-8
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4
            lg:gap-5
            place-items-center
          "
        >
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onClick={setSelectedCertificate}
            />
          ))}
        </div>

        <CertificateModel
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      </div>
    </section>
  );
};

export default Certificates;