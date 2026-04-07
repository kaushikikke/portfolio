import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "SmartKick AI (Full Stack AI Platform)",
      desc: "AI-powered football performance analysis platform where users upload videos and receive heatmaps, radar charts, and tactical insights using computer vision.",
      features: [
        "Video upload & AI-based analysis",
        "Heatmaps & radar charts visualization",
        "Real-time performance insights"
      ],
      tech: [
        "React", "Node.js", "MongoDB",
        "FastAPI", "MediaPipe", "OpenCV"
      ],
      github: "https://github.com/kaushikikke/smartkick-ai",
      live: "https://smartkick-ai.vercel.app/"
    },
    
    {
  title: "Personal Portfolio Website",
  desc: "A modern, responsive portfolio website built to showcase my projects, skills, and experience with smooth navigation and interactive UI.",
  features: [
    "Smooth scrolling + React Router navigation",
    "Interactive animations with Framer Motion",
    "Responsive design for all devices"
  ],
  tech: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
  github: "https://github.com/kaushikikke/portfolio",
  live: "https://portfolio-kaushik.vercel.app/"
},
{
      title: "Carbon Emission Tracker",
      desc: "A full-stack MERN application to track and analyze carbon emissions with real-time data visualization.",
      features: [
        "User authentication & data management",
        "REST API for emission records",
        "Interactive charts for analytics"
      ],
      tech: ["React", "Node.js", "MongoDB", "Python"],
      
    },
    {
      title: "NGO Website",
      desc: "A fully responsive NGO website optimized for performance and accessibility.",
      features: [
        "Responsive UI for all devices",
        "Optimized performance",
        "Reusable components"
      ],
      tech: ["React", "CSS", "JavaScript"],
      
    }
  ];

  return (
    <div className="bg-[#0b1220] text-white px-6 py-20">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16"
      >
        🚀 My Projects
      </motion.h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-blue-500/20 transition duration-300"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition"></div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 relative z-10">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-3 relative z-10">
              {project.desc}
            </p>

            {/* Features */}
            <ul className="text-gray-400 text-sm mb-4 list-disc ml-4 relative z-10">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4 relative z-10">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4 relative z-10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded hover:bg-white/20 transition"
              >
                <FaGithub /> Code
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Projects;