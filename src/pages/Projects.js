import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Carbon Emission Tracker",
      desc: "A full-stack MERN application to track and analyze carbon emissions with real-time data visualization.",
      features: [
        "User authentication & data management",
        "REST API for emission records",
        "Interactive charts for analytics"
      ],
      tech: ["React", "Node.js", "MongoDB","Python"],
      
    },
    {
      title: "NGO Website",
      desc: "A fully responsive NGO website optimized for performance and accessibility.",
      features: [
        "Responsive UI for all devices",
        "Optimized performance",
        "Reusable React components"
      ],
      tech: ["React", "CSS", "JavaScript"],
      
    },
    {
      title: "SmartKick AI",
      desc: "Built a football analytics dashboard that visualizes player performance using heatmaps and statistical insights.",
      features: [
                "Interactive player performance tracking",
                "Heatmap visualization using canvas",
                "Data-driven insights with charts"
                ],
      tech: ["React","Python", "Chart.js"],
      
    }
  ];

  return (
    <div id="projects" className="min-h-screen bg-[#0b1220] text-white px-6 py-20">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        My Projects
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
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-lg"
          >
            {/* Title */}
            <h3 className="text-xl font-bold mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-3">
              {project.desc}
            </p>

            {/* Features */}
            <ul className="text-gray-400 text-sm mb-4 list-disc ml-4">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            

          </motion.div>
        ))}

      </div>
    </div>
  );
}

export default Projects;