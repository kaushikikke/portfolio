import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      {/* 🔥 FOOTER */}
      <footer className="text-center py-6 text-gray-400 text-sm bg-[#0b1220]">
        © 2026 Kaushik Ikke | Built with React 🚀
      </footer>


    </div>
  );
}

export default App;