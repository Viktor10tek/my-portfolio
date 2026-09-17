const Skills = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Routes",
    "Controllers",
    "Middleware",
    "TypeScript Types",
    "MongoDB",
  ];

  const tools = ["Git", "GitHub", "VS Code", "Vercel", "Postman", "Figma"];

  return (
    <section id="skills" className="bg-[#0f0f17] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            My Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Tools I use to
            <span className="block text-primary">
              build digital experiences.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            I'm developing skills across the full development stack, from
            building responsive interfaces to creating backend applications and
            working with modern development tools.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* FRONTEND */}
          <div className="group rounded-3xl border border-border bg-[rgb(23,23,34)] p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-xl font-bold text-primary transition duration-300 group-hover:scale-110">
              &lt;/&gt;
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white">Frontend</h3>

            <p className="mt-3 leading-7 text-muted">
              Building responsive and interactive user interfaces with modern
              frontend technologies.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-[#0f0f17] px-3.5 py-2 text-sm font-medium text-gray-300 transition duration-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="group rounded-3xl border border-border bg-[rgb(23,23,34)] p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-xl font-bold text-primary transition duration-300 group-hover:scale-110">
              {"{ }"}
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white">Backend</h3>

            <p className="mt-3 leading-7 text-muted">
              Developing server-side applications, APIs, and the logic that
              powers web applications.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {backendSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-[#0f0f17] px-3.5 py-2 text-sm font-medium text-gray-300 transition duration-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="group rounded-3xl border border-border bg-[rgb(23,23,34)] p-8 transition duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 md:col-span-2 lg:col-span-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-xl text-primary transition duration-300 group-hover:scale-110">
              ⚙
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white">
              Tools & Workflow
            </h3>

            <p className="mt-3 leading-7 text-muted">
              Tools I use to write code, manage projects, collaborate, and
              deploy applications.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-[rgb(15,15,23)] px-3.5 py-2 text-sm font-medium text-gray-300 transition duration-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* STATEMENT */}
        <div className="mt-16 rounded-3xl bg-primary p-8 text-white md:p-10">
          <p className="max-w-4xl text-xl font-medium leading-relaxed md:text-2xl lg:text-3xl">
            "I'm not just learning technologies — I'm learning how to use
            technology to solve problems and turn ideas into working products."
          </p>

          <p className="mt-6 text-white/70">
            Always learning. Always building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
