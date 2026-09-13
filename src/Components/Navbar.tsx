import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSectionClick = (section: string) => {
    closeMenu();

    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <nav className="w-full px-6 py-5 md:px-12 lg:px-20 bg-[#0f0f17]/95 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-tight"
          >
            Victor<span className="text-primary">.</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleSectionClick("home")}
              className="text-sm font-medium text-gray-300 hover:text-primary transition duration-300"
            >
              Home
            </button>

            <button
              onClick={() => handleSectionClick("about")}
              className="text-sm font-medium text-gray-300 hover:text-primary transition duration-300"
            >
              About
            </button>

            <button
              onClick={() => handleSectionClick("skills")}
              className="text-sm font-medium text-gray-300 hover:text-primary transition duration-300"
            >
              Skills
            </button>

            <button
              onClick={() => handleSectionClick("projects")}
              className="text-sm font-medium text-gray-300 hover:text-primary transition duration-300"
            >
              Projects
            </button>

            <button
              onClick={() => handleSectionClick("contact")}
              className="px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark hover:-translate-y-0.5 transition duration-300"
            >
              Contact
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-border text-white hover:bg-accent transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-5 p-5 rounded-2xl border border-border bg-light shadow-2xl">
            <div className="flex flex-col gap-5">
              <button
                onClick={() => handleSectionClick("home")}
                className="text-left font-medium text-gray-300 hover:text-primary transition"
              >
                Home
              </button>

              <button
                onClick={() => handleSectionClick("about")}
                className="text-left font-medium text-gray-300 hover:text-primary transition"
              >
                About
              </button>

              <button
                onClick={() => handleSectionClick("skills")}
                className="text-left font-medium text-gray-300 hover:text-primary transition"
              >
                Skills
              </button>

              <button
                onClick={() => handleSectionClick("projects")}
                className="text-left font-medium text-gray-300 hover:text-primary transition"
              >
                Projects
              </button>

              <button
                onClick={() => handleSectionClick("contact")}
                className="w-full text-center px-5 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
