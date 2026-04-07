function ProjectCard({ title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>

      <div className="mt-4 flex gap-3">
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          Live
        </button>
        <button className="border px-4 py-1 rounded">
          GitHub
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;