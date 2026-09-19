import { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="px-6 py-24 md:px-12 lg:px-20 bg-[rgb(23,23,34)]">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            About Me
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Building with purpose,
            <span className="block text-primary">learning with passion.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-16">
          {/* TEXT */}
          <div>
            <p className="text-lg leading-8 text-muted">
              I'm a Full-Stack Developer with a background in Business
              Administration and management. My journey into technology came
              from a genuine passion for creating, solving problems and
              understanding how technology can transform ideas into real
              solutions.
            </p>

            <p className="text-lg leading-8 text-muted mt-6">
              My background in business and management has taught me the
              importance of communication, organization, leadership and
              understanding the needs behind a project.
            </p>

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-8 inline-flex items-center mr-4 gap-3 px-6 py-3.5 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark hover:-translate-y-1 transition duration-300"
            >
              {showMore ? "Show Less" : "Read My Journey"}
              <span className="text-lg">{showMore ? "↑" : "→"}</span>
            </button>

            {showMore && (
              <div className="mt-8 p-7 md:p-8 bg-[#0f0f17] rounded-3xl border border-border">
                <p className="text-muted leading-8">
                  Coming from a business administration and management
                  background, technology initially felt like a completely
                  different world. But the more I discovered what could be built
                  with code, the more interested I became.
                </p>

                <p className="text-muted leading-8 mt-5">
                  I decided to make a career transition into technology and
                  started learning web development from the fundamentals. From
                  HTML and CSS to JavaScript, React, TypeScript and backend
                  development, every new concept has been another step toward
                  becoming the developer I want to be.
                </p>

                <p className="text-muted leading-8 mt-5">
                  I'm not leaving my previous experience behind. I'm combining
                  both worlds — business understanding and technical skills — to
                  become a developer who can understand a problem from both the
                  user's and the business's perspective.
                </p>
              </div>
            )}

            <a
              href="#contact"
              className="inline-flex items-center mt-8 font-semibold text-primary hover:text-primary-dark hover:underline"
            >
              Let's work together
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                icon: "💼",
                title: "Business Mindset",
                text: "My background in management helps me understand the bigger picture behind a project.",
              },
              {
                icon: "💻",
                title: "Tech Passion",
                text: "I'm passionate about building modern and useful digital experiences.",
              },
              {
                icon: "🧩",
                title: "Problem Solver",
                text: "I enjoy breaking complex problems into practical solutions.",
              },
              {
                icon: "🚀",
                title: "Always Learning",
                text: "I'm continuously learning and improving my technical skills.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-7 bg-[#0f0f17] rounded-3xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-accent text-2xl group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-muted leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QUOTE */}
        <div className="mt-20 pt-10 border-t border-border">
          <p className="max-w-4xl text-2xl md:text-3xl font-semibold leading-relaxed">
            "I believe great technology starts with understanding the problem
            before writing the solution."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
