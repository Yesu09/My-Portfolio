import { motion } from "framer-motion";

import DeveloperIllustration from "./DeveloperIllustration";
import ContactInfo from "./ContackInfo";
import SocialLinks from "./SocialLinks";

const Contact = () => {
    return (
        <section
            id="contact"
            className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-slate-100
        px-4
        md:px-8
        py-2
      "
        >
            {/* Background Blur */}

            <div className="absolute top-10 left-10 w-60 h-60 bg-blue-300/20 rounded-full blur-3xl" />

            <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl" />

            {/* Grid Background */}

            <div
                className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(#2563eb_1px,transparent_1px),linear-gradient(90deg,#2563eb_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
            />

            {/* Main Content */}

            <div
                className="
          relative
          z-10
          max-w-6xl
          mx-auto
          h-full
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
            text-3xl
            md:text-3xl
            font-bold
            text-slate-800
            text-center
          "
                >
                    Let's Connect
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="
            mt-2
            text-center
            text-slate-500
            text-sm
            md:text-base
            max-w-xl
          "
                >
                    Have an opportunity or an interesting project?
                    I'd love to hear from you.
                </motion.p>

                {/* Developer Illustration */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="
                        mt-2
                        flex
                        justify-center
                        items-center
                        w-full
                    "
                >
                    <div className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[430px]">
                        <DeveloperIllustration />
                    </div>
                </motion.div>

                {/* Contact Info */}

                <div className=" w-full">
                    <ContactInfo />
                </div>

                {/* Social Links */}

                <div className="mt-3">
                    <SocialLinks />
                </div>

                {/* Footer */}

                {/* Footer */}

                <div className="mt-6 flex flex-col items-center gap-2">

                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="
      text-lg
      md:text-xl
      font-semibold
      text-slate-800
    "
                    >
                        Thank You for Visiting!
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="
      text-xs
      md:text-sm
      text-slate-500
    "
                    >
                        Built with ❤️ by <span className="font-semibold text-blue-600">Yesubabu</span>
                    </motion.p>

                </div>
            </div>
        </section>
    );
};

export default Contact;