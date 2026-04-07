import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div className="bg-[#0b1220] text-white">

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4 scroll-mt-24">

        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="bg"
            className="w-[70%] max-w-3xl"
          />
        </div>

        <div className="z-10 text-center max-w-2xl">

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Hi, I'm <span>Kaushik</span> 👋
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl font-semibold mb-4"
          >
            I am a{" "}
            <span className="text-blue-400">
              <ReactTyped
                strings={[
                  "Full Stack Developer",
                  "Building Scalable Web Apps",
                  "MERN Stack Specialist",
                ]}
                typeSpeed={80}
                backSpeed={60}
                backDelay={1000}
                loop
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-300 text-sm md:text-base mb-6"
          >
            Building scalable web apps with MERN stack & real-world problem solving.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-5 text-xl mb-6"
          >
            <a href="https://www.linkedin.com/in/kaushik-ikke" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/kaushikikke" className="hover:text-blue-400">
              <FaGithub />
            </a>
          </motion.div>

          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="flex flex-col md:flex-row justify-center gap-4"
>
  <a
    href="/resume.pdf"
    download
    className="bg-blue-500 px-5 py-2 rounded-md hover:bg-blue-600 transition text-sm shadow-lg shadow-blue-500/30"
  >
    Download Resume
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-500 px-5 py-2 rounded-md hover:bg-blue-600 transition text-sm shadow-lg shadow-blue-500/30"
  >
    View Resume
  </a>
</motion.div>

          <motion.p
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-blue-400 text-sm mt-6"
          >
            Scroll Down ↓
          </motion.p>

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="min-h-screen flex items-center px-4 py-20 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center">
          <About />
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="min-h-screen flex items-center px-4 py-20 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <Projects />
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="min-h-screen flex items-center px-4 py-20 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center">
          <Contact />
        </div>
      </section>

    </div>
  );
}

export default Home;