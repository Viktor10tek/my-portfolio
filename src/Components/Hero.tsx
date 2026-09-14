import victorImage from "../assets/victor.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center px-6 py-16 md:px-12 lg:px-20 bg-[#0f0f17] overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-[-150px] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <div>
            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.25em] text-primary">
              Hello, I'm
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              Victor
              <span className="block">
                Adama<span className="text-primary">.</span>
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="w-10 h-[3px] bg-primary rounded-full" />

              <h2 className="text-xl md:text-2xl font-semibold">
                Full-Stack Developer
              </h2>
            </div>

            <p className="mt-7 max-w-xl text-base md:text-lg leading-8 text-muted">
              I build modern, responsive and user-focused web applications that
              turn ideas into functional digital experiences.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-9">
              <a
                href="#projects"
                className="px-7 py-3.5 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark hover:-translate-y-1 transition duration-300 shadow-lg shadow-primary/20"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white hover:-translate-y-1 transition duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-5 mt-10">
              <a
                href="https://github.com/Viktor10tek"
                className="text-sm font-medium text-muted hover:text-primary hover:underline transition"
              >
                GitHub ↗
              </a>

              <span className="text-border">/</span>

              <a
                href="https://www.linkedin.com/in/victor-adams-0a3b4c/"
                className="text-sm font-medium text-muted hover:text-primary transition"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* PHOTO */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* OUTER GLOW */}
              <div className="absolute inset-0 rounded-[2rem] bg-primary/20 blur-[50px] scale-90" />

              {/* DECORATIVE FRAME */}
              <div className="absolute -top-5 -right-5 w-full h-full rounded-[2rem] border-2 border-primary/30" />

              {/* IMAGE */}
              <div className="relative w-80 h-96 md:w-[380px] md:h-[460px] lg:w-[440px] lg:h-[540px] rounded-[2rem] overflow-hidden bg-accent shadow-2xl glow">
                <img
                  src={victorImage}
                  alt="Victor"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
                />
              </div>

              {/* DECORATIVE CIRCLE */}
              <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full border-2 border-primary/30 bg-[#0f0f17]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
