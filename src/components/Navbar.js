function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-black text-white px-10 py-4 flex justify-between z-50">

      <h1 className="font-bold">Kaushik</h1>

      <div className="space-x-6">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;