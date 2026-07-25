export function Leftsection() {
    return (
        <div className="order-2 mt-4 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

            {/* Name */}
            <h1 className="mt-4 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
                Yesu{" "}
                <span className="text-blue-600">
                    Babu
                </span>
                <br />
                Yadala
            </h1>

            {/* Role */}
            <h2 className="mt-5 text-2xl font-semibold text-gray-800 sm:text-3xl">
                Full Stack Developer
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
                I build responsive and scalable web applications using
                <span className="font-semibold text-black">
                    {" "}React
                </span>,
                <span className="font-semibold text-black">
                    {" "}Node.js
                </span>,
                <span className="font-semibold text-black">
                    {" "}Express.js
                </span>,
                and
                <span className="font-semibold text-black">
                    {" "}MongoDB
                </span>.
                <br />
                Passionate about creating modern web experiences and solving
                real-world problems.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
                Available for Work
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">

                <a
                    href="/YesuResume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-black px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800"
                >
                    <i className="bi bi-file-earmark-text"></i>
                    Resume
                </a>

            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-5">

                <a
                    href="https://github.com/Yesu09"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 bg-white text-2xl text-gray-600 shadow-md transition duration-300 hover:-translate-y-2 hover:scale-110 hover:text-black hover:shadow-xl"
                >
                    <i className="bi bi-github"></i>
                </a>

                <a
                    href="https://www.linkedin.com/in/yesubabu-yadala-a9513127b/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 bg-white text-2xl text-gray-600 shadow-md transition duration-300 hover:-translate-y-2 hover:scale-110 hover:text-[#0A66C2] hover:shadow-xl"
                >
                    <i className="bi bi-linkedin"></i>
                </a>

                <a
                    href="https://www.instagram.com/___yesu__/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 bg-white text-2xl text-gray-600 shadow-md transition duration-300 hover:-translate-y-2 hover:scale-110 hover:text-pink-500 hover:shadow-xl"
                >
                    <i className="bi bi-instagram"></i>
                </a>

            </div>

        </div>
    )
}

export default Leftsection;