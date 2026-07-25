import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="my-5">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-cyan-600 font-semibold uppercase tracking-[0.3em]">
            About Me
          </p>

          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 rounded-full bg-cyan-500"></div>
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -5 }}
          className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className="space-y-8 text-lg leading-9 text-slate-600">

            <p>
              I'm an <span className="font-semibold text-slate-900">Electronics and Communication Engineering (ECE) graduate</span> with
              a strong passion for Full Stack Web Development and building
              practical, user-focused web applications. I enjoy transforming
              ideas into responsive, scalable, and efficient digital solutions
              while continuously expanding my knowledge of modern web
              technologies.
            </p>

            <p>
              My expertise lies in the <span className="font-semibold text-cyan-600">MERN Stack</span>,
              where I build applications using React, Node.js, Express.js,
              and MongoDB. I also have experience with HTML, CSS,
              Tailwind CSS, and JavaScript for creating responsive user
              interfaces, along with designing REST APIs,
              implementing authentication, and integrating databases.
            </p>

            <p>
              Throughout my learning journey, I've built several real-world
              projects including a <span className="font-semibold text-slate-900">Healthcare Management System</span>,
              an <span className="font-semibold text-slate-900">E-commerce Platform</span>,
              a <span className="font-semibold text-slate-900">Real-Time Chat Application</span>,
              and my personal developer portfolio. These projects have
              strengthened my understanding of frontend development,
              backend architecture, and software design principles.
            </p>

            <p>
              Alongside development, I regularly practice
              <span className="font-semibold text-slate-900"> Data Structures and Algorithms </span>
              to improve my analytical thinking and problem-solving skills.
              I enjoy learning new technologies, taking on challenging
              projects, and continuously improving through hands-on
              experience.
            </p>

            <p>
              My goal is to grow as a
              <span className="font-semibold text-cyan-600">
                {" "}Software Developer
              </span>
              , contribute to meaningful products, collaborate with talented
              teams, and build applications that create real value while
              continuing to learn and evolve every day.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Story;