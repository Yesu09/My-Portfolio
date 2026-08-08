export function Leftsection() {
  return (
    <div
      className="
        flex
        w-full
        max-w-xl
        flex-col
        items-center
        text-center
        lg:items-start
        lg:text-left
      "
    >
      <p
                  className="
                    mb-2
                    text-center
                    text-lg
                    font-medium
                    text-gray-600
                    lg:text-left
                  "
                >
                  👋 Hey, there I am 
                </p>
      {/* Name */}
      <h1
        className="
          text-4xl
          font-extrabold
          leading-tight
          tracking-tight
          sm:text-5xl
          lg:text-6xl
          xl:text-7xl
        "
      >
        <span className="whitespace-nowrap">
          Yesu{" "}
          <span className="text-blue-600">Babu</span>
        </span>
        <br />
        <span className="whitespace-nowrap">Yadala</span>
      </h1>

      {/* Role */}
      <h2
        className="
          mt-4
          text-xl
          font-semibold
          text-gray-800
          sm:text-2xl
          lg:text-3xl
        "
      >
        Full Stack Developer
      </h2>

      {/* Availability */}
      <div
        className="
          mt-5
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-green-100
          px-5
          py-2
          text-sm
          font-medium
          text-green-700
        "
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
        Available for Work
      </div>

      {/* Resume */}
      <div className="mt-6">
        <a
          href="/YesuResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-black
            px-7
            py-3
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-gray-800
          "
        >
          <i className="bi bi-file-earmark-text" />
          Resume
        </a>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex gap-4">
        {/* GitHub */}
        <a
          href="https://github.com/Yesu09"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="
            flex h-12 w-12
            items-center justify-center
            rounded-full
            border border-gray-300
            bg-white
            text-xl text-gray-600
            shadow-md
            transition-all duration-300
            hover:-translate-y-2
            hover:scale-110
            hover:text-black
            hover:shadow-xl
            sm:h-14 sm:w-14
            sm:text-2xl
          "
        >
          <i className="bi bi-github" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yesubabu-yadala-a9513127b/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="
            flex h-12 w-12
            items-center justify-center
            rounded-full
            border border-gray-300
            bg-white
            text-xl text-gray-600
            shadow-md
            transition-all duration-300
            hover:-translate-y-2
            hover:scale-110
            hover:text-[#0A66C2]
            hover:shadow-xl
            sm:h-14 sm:w-14
            sm:text-2xl
          "
        >
          <i className="bi bi-linkedin" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/___yesu__/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="
            flex h-12 w-12
            items-center justify-center
            rounded-full
            border border-gray-300
            bg-white
            text-xl text-gray-600
            shadow-md
            transition-all duration-300
            hover:-translate-y-2
            hover:scale-110
            hover:text-pink-500
            hover:shadow-xl
            sm:h-14 sm:w-14
            sm:text-2xl
          "
        >
          <i className="bi bi-instagram" />
        </a>
      </div>
    </div>
  );
}

export default Leftsection;
