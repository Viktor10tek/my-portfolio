const Footer = () => {
  return (
    <footer className="px-6 py-10 md:px-12 lg:px-20 bg-[#09090e] border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* LOGO */}
          <a href="#home" className="text-xl font-bold tracking-tight">
            Victor<span className="text-primary">.</span>
          </a>

          {/* NAV */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#home"
              className="text-sm text-muted hover:text-primary transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-sm text-muted hover:text-primary transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-sm text-muted hover:text-primary transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-muted hover:text-primary transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-muted hover:text-primary transition"
            >
              Contact
            </a>
          </div>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-muted hover:text-primary transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-sm font-medium text-muted hover:text-primary transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted">
            © 2026 Adama Victor{" "}
            <span className="font-semibold text-white">(VikiTECH)</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
