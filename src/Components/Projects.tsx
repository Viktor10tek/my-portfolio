import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 py-24 md:px-12 lg:px-20 bg-[rgb(23,23,34)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            My Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Projects I've
            <span className="block text-primary">built so far.</span>
          </h2>

          <p className="mt-6 text-lg text-muted leading-8 max-w-2xl">
            A selection of projects I've worked on while developing my skills in
            frontend and full-stack development.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group overflow-hidden rounded-3xl bg-[#0f0f17] border border-border hover:border-primary/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-[#09090e]">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />

                {/* TYPE */}
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-2 rounded-full bg-[#0f0f17]/90 backdrop-blur-md border border-border text-xs font-semibold text-primary">
                    {project.type}
                  </span>
                </div>

                {/* STATUS */}
                <div className="absolute top-5 right-5">
                  <span
                    className={`px-4 py-2 rounded-full backdrop-blur-md border text-xs font-semibold ${
                      project.status === "In Progress"
                        ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                        : "bg-primary/10 border-primary/30 text-primary"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-muted leading-7">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3.5 py-2 bg-[rgb(44,44,63)] border border-border rounded-full text-sm font-medium text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition duration-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className="flex flex-wrap gap-3 mt-7">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="px-5 py-2.5 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary-dark hover:-translate-y-0.5 transition duration-300"
                  >
                    View Details →
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 border border-border rounded-full text-sm font-semibold text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition duration-300"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-lg text-muted">
            Interested in seeing more of my work?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center font-semibold text-primary hover:text-white transition"
          >
            Let's work together
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
