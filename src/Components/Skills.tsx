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
    <section id="skills" className="px-6 py-24 md:px-12 lg:px-20 bg-[rgb(15,15,23)]">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            My Skills
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Tools I use to
            <span className="block text-primary">
              build digital experiences.
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted leading-8 max-w-2xl">
            I'm developing skills across the full development stack, from
            building responsive interfaces to creating backend applications and
            working with modern development tools.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {/* FRONTEND */}
          <div className="group p-8 rounded-3xl border border-border bg-[rgb(23,23,34)] hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 transition duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-accent text-primary text-xl font-bold group-hover:scale-110 transition duration-300">
              &lt;/&gt;
            </div>

            <h3 className="mt-7 text-2xl font-bold">Frontend</h3>

            <p className="mt-3 text-muted leading-7">
              Building responsive and interactive user interfaces with modern
              frontend technologies.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-7">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 bg-[#0f0f17] border border-border rounded-full text-sm font-medium text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="group p-8 rounded-3xl border border-border bg-[hsl(240,19%,11%)] hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 transition duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-accent text-primary text-xl font-bold group-hover:scale-110 transition duration-300">
              {"{ }"}
            </div>

            <h3 className="mt-7 text-2xl font-bold">Backend</h3>

            <p className="mt-3 text-muted leading-7">
              Developing server-side applications, APIs and the logic that
              powers web applications.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-7">
              {backendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 bg-[#0f0f17] border border-border rounded-full text-sm font-medium text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="group p-8 rounded-3xl border border-border bg-[rgb(23,23,34)] hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 transition duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-accent text-primary text-xl group-hover:scale-110 transition duration-300">
              ⚙
            </div>

            <h3 className="mt-7 text-2xl font-bold">Tools & Workflow</h3>

            <p className="mt-3 text-muted leading-7">
              Tools I use to write code, manage projects, collaborate and deploy
              applications.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-7">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3.5 py-2 bg-[#0f0f17] border border-border rounded-full text-sm font-medium text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* STATEMENT */}
        <div className="mt-16 p-8 md:p-10 rounded-3xl bg-primary text-white">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed max-w-4xl">
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
