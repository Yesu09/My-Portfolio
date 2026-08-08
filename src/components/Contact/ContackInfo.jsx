import { useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";

const ContactInfo = () => {
  const [copied, setCopied] = useState("");

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);

    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <div
      className="
        mt-12
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-6
        w-full
        max-w-3xl
        mx-auto
      "
    >
      {/* Email Card */}

      <motion.div
        whileHover={{
          y: -6,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={() =>
          copyText("yadalayesubabu9@gmail.com", "email")
        }
        className="
          cursor-pointer
          rounded-2xl
          bg-white/70
          backdrop-blur-md
          border
          border-blue-100
          shadow-lg
          p-5
          flex
          items-center
          gap-4
          transition-all
        "
      >
        <div
          className="
            w-14
            h-14
            rounded-full
            bg-blue-100
            flex
            items-center
            justify-center
          "
        >
          <MdEmail
            size={28}
            className="text-blue-600"
          />
        </div>

        <div>
          <h3 className="font-semibold text-slate-800">
            Email
          </h3>

          <p className="text-sm text-slate-500">
            yadalayesubabu9@gmail.com
          </p>

          {copied === "email" && (
            <span className="text-xs text-green-600">
              ✓ Copied!
            </span>
          )}
        </div>
      </motion.div>

      {/* Phone Card */}

      <motion.div
        whileHover={{
          y: -6,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={() =>
          copyText("+91 6305926979", "phone")
        }
        className="
          cursor-pointer
          rounded-2xl
          bg-white/70
          backdrop-blur-md
          border
          border-blue-100
          shadow-lg
          p-5
          flex
          items-center
          gap-4
          transition-all
        "
      >
        <div
          className="
            w-14
            h-14
            rounded-full
            bg-blue-100
            flex
            items-center
            justify-center
          "
        >
          <MdPhone
            size={28}
            className="text-blue-600"
          />
        </div>

        <div>
          <h3 className="font-semibold text-slate-800">
            Phone
          </h3>

          <p className="text-sm text-slate-500">
            +91 6305926979
          </p>

          {copied === "phone" && (
            <span className="text-xs text-green-600">
              ✓ Copied!
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;