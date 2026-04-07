function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0b1220]/80 backdrop-blur-md z-50 shadow-md">
      <div className="w-full px-6 py-4 flex justify-end">
        <div className="flex items-center gap-8 text-gray-300 text-sm md:text-base">

          <button onClick={() => scrollTo("home")} className="hover:text-blue-400 transition">
            Home
          </button>

          <button onClick={() => scrollTo("about")} className="hover:text-blue-400 transition">
            About
          </button>

          <button onClick={() => scrollTo("projects")} className="hover:text-blue-400 transition">
            Projects
          </button>

          <button onClick={() => scrollTo("contact")} className="hover:text-blue-400 transition">
            Contact
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;