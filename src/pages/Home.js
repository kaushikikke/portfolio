import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0b1220] text-white overflow-hidden pt-20">

      {/* Background Illustration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <img
          src="https://illustrations.popsy.co/gray/web-design.svg"
          alt="bg"
          className="w-[70%] max-w-3xl"
        />
      </div>

      {/* Content */}
      <div className="z-10 text-center px-4 max-w-2xl">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-2"
          
        ><br></br>
           Hi, I'm <span className="text-white">Kaushik</span> 👋
        </motion.h1>
        <br></br>

        {/* Role */}
        <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-3xl md:text-4xl font-semibold mb-4"
        >
       <span className="text-white">I am a </span>
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

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed"
        >
          A passionate problem-solver, using design and code to build scalable web applications.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-5 text-xl mb-6"
        >
          <a href="https://www.linkedin.com/in/kaushik-ikke" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="https://github.com/kaushikikke" className="hover:text-blue-400"><FaGithub /></a>
          
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-4 mb-6 flex-wrap"
        >
          <br></br>
           <a
            href="/resume.pdf"
            download
            className="bg-blue-500 px-5 py-2 rounded-md hover:bg-blue-600 transition text-sm"
            >
            Download Resume
            </a>

          {/* View */}
          <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 px-5 py-2 rounded-md hover:bg-blue-600 transition text-sm"
          >
           View Resume
          </a>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.p
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-blue-400 text-sm"
        >
          Scroll Down ↓
        </motion.p>

      </div>
    </div>
  );
}

export default Home;