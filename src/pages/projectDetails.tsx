import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen px-6 py-24 bg-[#0f0f17] flex items-center justify-center">
        <div className="text-center">
          <p className="text-primary font-semibold uppercase tracking-[0.25em] text-sm">
            404
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Project Not Found
          </h1>

          <p className="mt-4 text-muted">
            Sorry, the project you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="inline-flex mt-8 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-6 py-20 md:px-12 lg:px-20 bg-[#0f0f17]">
      <div className="max-w-6xl mx-auto">
        {/* BACK */}
        <Link
          to="/#projects"
          className="inline-flex items-center text-muted hover:text-primary transition"
        >
          ← Back to Projects
        </Link>

        {/* HEADER */}
        <div className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              {project.type}
            </span>

            <span
              className={`px-3 py-1.5 rounded-full border text-xs font-semibold ${
                project.status === "In Progress"
                  ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                  : "bg-primary/10 border-primary/30 text-primary"
              }`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {project.title}
            <span className="text-primary">.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-muted leading-8">
            {project.description}
          </p>
        </div>

        {/* IMAGE */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-border bg-[#09090e] shadow-2xl">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* INFORMATION */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* CONTRIBUTION */}
          {project.contribution && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                My Contribution
              </h2>

              <div className="mt-6 space-y-4">
                {project.contribution.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-accent text-primary text-sm font-bold">
                      ✓
                    </span>

                    <p className="text-muted leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TECHNOLOGIES */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Technologies</h2>

            <div className="flex flex-wrap gap-3 mt-6">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-4 py-2.5 bg-[rgb(23,23,34)] border border-border rounded-full text-sm font-medium text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CHALLENGES + LEARNING */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {project.challenges && (
            <div className="p-7 md:p-8 rounded-3xl bg-[rgb(23,23,34)] border border-border">
              <h2 className="text-2xl font-bold">Challenges</h2>

              <p className="mt-4 text-muted leading-8">{project.challenges}</p>
            </div>
          )}

          {project.learning && (
            <div className="p-7 md:p-8 rounded-3xl bg-[rgb(34,34,50)] border border-border">
              <h2 className="text-2xl font-bold">What I Learned</h2>

              <p className="mt-4 text-muted leading-8">{project.learning}</p>
            </div>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-4 mt-14">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark hover:-translate-y-1 transition"
            >
              Live Demo ↗
            </a>
          )}

          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 border border-border text-gray-300 rounded-full font-semibold hover:bg-primary hover:text-white hover:border-primary transition"
            >
              GitHub ↗
            </a>
          )}
        </div>

        {/* BACK */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            to="/#projects"
            className="font-semibold text-primary hover:text-white transition"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
