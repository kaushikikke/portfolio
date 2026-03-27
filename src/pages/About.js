import { motion } from "framer-motion";

function About() {
  return (
    <div id="about" className="min-h-screen bg-[#0b1220] text-white px-6 py-20">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10"
      >
        About Me
      </motion.h2>

      {/* Container */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>

          <p className="text-gray-400 mb-4">
            Full Stack Developer with internship experience building scalable web applications using MERN stack.
          </p>

          <p className="text-gray-400">
            I specialize in creating responsive UI and optimized backend systems.
          </p>

          {/* Skills */}
          <h3 className="text-xl font-semibold mt-6 mb-3">Skills</h3>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "ExpressJS",
              "MongoDB",
              "Responsive Design",
              "Bootstrap",
              "JAVA",
              "Python",
              "DSA (Basics)",
              
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-blue-500/20 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE (EXPERIENCE TIMELINE) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>

          {/* Card 1 */}
          <div className="mb-6 border-l-2 border-blue-500 pl-4">
            <h4 className="font-bold">Full Stack Developer Intern</h4>
            <p className="text-sm text-gray-400">orelse.ai (Remote)</p>
            <p className="text-gray-400 text-sm">
              Built carbon emission tracking app using MERN stack and REST APIs.<br>
              
              </br>
              Built a fully responsive NGO website with optimized performance across
              desktop and mobile devices
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-bold">Web Developer Intern</h4>
            <p className="text-sm text-gray-400">SparkLab IT Solutions</p>
            <p className="text-gray-400 text-sm">
              Developed responsive UI and integrated backend APIs.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

export default About;