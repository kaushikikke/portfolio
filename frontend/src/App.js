import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>

      <Navbar />

      <div className="pt-14">
        <Routes>

          {/* Main page with scrolling sections */}
          <Route path="/" element={<Home />} />

          {/* Separate page (optional) */}
          <Route path="/projects" element={<Projects />} />

        </Routes>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm bg-[#0b1220] border-t border-gray-700">
        <p>© 2026 Kaushik Ikke | Built with React 🚀</p>
        <p className="mt-2 text-blue-400 font-medium">
          Open to internship / full-time opportunities
        </p>
      </footer>

    </div>
  );
}

export default App;