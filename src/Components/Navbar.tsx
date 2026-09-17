import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import vikitekLogo from "../assets/Vikitek.png";

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
        block: "start",
      });
    } else {
      navigate(`/#${section}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-[#0f0f17]/95 px-6 py-5 backdrop-blur-md md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center"
            aria-label="Go to homepage"
          >
            <img src={vikitekLogo} alt="Vikitek Logo" className="h-9 w-auto" />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => handleSectionClick("home")}
              className="text-sm font-medium text-gray-300 transition duration-300 hover:text-primary"
            >
              Home
            </button>

            <button
              onClick={() => handleSectionClick("about")}
              className="text-sm font-medium text-gray-300 transition duration-300 hover:text-primary"
            >
              About
            </button>

            <button
              onClick={() => handleSectionClick("skills")}
              className="text-sm font-medium text-gray-300 transition duration-300 hover:text-primary"
            >
              Skills
            </button>

            <button
              onClick={() => handleSectionClick("projects")}
              className="text-sm font-medium text-gray-300 transition duration-300 hover:text-primary"
            >
              Projects
            </button>

            <button
              onClick={() => handleSectionClick("contact")}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Contact
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-white transition hover:bg-accent md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            type="button"
          >
            <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="mt-5 rounded-2xl border border-border bg-[rgb(23,23,34)] p-5 shadow-2xl md:hidden">
            <div className="flex flex-col gap-5">
              <button
                onClick={() => handleSectionClick("home")}
                className="text-left font-medium text-gray-300 transition hover:text-primary"
                type="button"
              >
                Home
              </button>

              <button
                onClick={() => handleSectionClick("about")}
                className="text-left font-medium text-gray-300 transition hover:text-primary"
                type="button"
              >
                About
              </button>

              <button
                onClick={() => handleSectionClick("skills")}
                className="text-left font-medium text-gray-300 transition hover:text-primary"
                type="button"
              >
                Skills
              </button>

              <button
                onClick={() => handleSectionClick("projects")}
                className="text-left font-medium text-gray-300 transition hover:text-primary"
                type="button"
              >
                Projects
              </button>

              <button
                onClick={() => handleSectionClick("contact")}
                className="w-full rounded-full bg-primary px-5 py-3 text-center font-medium text-white transition hover:bg-primary-dark"
                type="button"
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
