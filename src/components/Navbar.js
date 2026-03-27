function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0b1220]/80 backdrop-blur-md z-50 shadow-md">
      
        <div className="w-full px-6 py-4 flex justify-end">
        <div className="flex items-center gap-8 text-gray-300 text-sm md:text-base">

          <a href="/" className="hover:text-blue-400 transition">
            Home
          </a>

          <a href="/about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="/projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="/contact" className="hover:text-blue-400 transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;