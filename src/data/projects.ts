export type Project = {
  title: string;
  slug: string;
  type: string;
  status: "Completed" | "In Progress";
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  contribution?: string[];
  challenges?: string;
  learning?: string;
};

export const projects: Project[] = [
  {
    title: "Nexcent",
    slug: "nexcent",
    type: "Frontend Project",
    status: "Completed",

    description:
      "A responsive landing page built with a focus on clean layouts, reusable components and responsive design across different screen sizes.",

    technologies: ["React", "TypeScript", "Tailwind CSS"],

    image: "/src/assets/Nexcent.png",

    liveUrl: "#",
    githubUrl: "#",

    contribution: [
      "Converted the design into a responsive web interface.",
      "Built reusable React components.",
      "Implemented responsive layouts with Tailwind CSS.",
      "Practiced modern frontend development techniques.",
    ],

    challenges:
      "One of the main challenges was making the layout work properly across different screen sizes while keeping the design consistent.",

    learning:
      "This project helped me improve my understanding of React components, TypeScript and responsive design with Tailwind CSS.",
  },

  {
    title: "Worknest",
    slug: "worknest",
    type: "Full-Stack Group Project",
    status: "In Progress",

    description:
      "A job platform currently being developed as a collaborative full-stack project. The platform is designed to provide a clean and user-friendly experience for users interacting with job opportunities.",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    image: "/src/assets/Worknest.png",

    contribution: [
      "Contributing to the React and TypeScript frontend.",
      "Implementing interfaces based on the team's Figma design.",
      "Working on the Review & Submit section.",
      "Building input and form-related interactions.",
      "Implementing progress-step functionality.",
      "Collaborating with other team members during development.",
    ],

    challenges:
      "Working on a group project requires coordinating different parts of the application and making sure individual components fit properly into the overall design and functionality.",

    learning:
      "This project is helping me understand how a real-world application is developed collaboratively, while improving my React, TypeScript, Tailwind CSS and full-stack development skills.",
  },

  {
    title: "Youtube Clone",
    slug: "youtube-clone",
    type: "Frontend Project",
    status: "Completed",

    description:
      "A responsive recreation of the YouTube interface, focusing on layout, navigation, video cards and responsive design.",

    technologies: ["HTML", "CSS", "JavaScript"],

    image: "/src/assets/Youtube.png",

    liveUrl: "#",
    githubUrl: "#",

    contribution: [
      "Recreated the YouTube-style interface.",
      "Built responsive video-card layouts.",
      "Implemented navigation and sidebar sections.",
      "Practiced CSS Grid and Flexbox.",
      "Added hover effects and responsive behavior.",
    ],

    challenges:
      "Recreating a complex interface while maintaining proper spacing, alignment and responsive behavior was one of the main challenges.",

    learning:
      "The project strengthened my HTML, CSS and JavaScript fundamentals and improved my understanding of responsive layouts.",
  },

  {
    title: "Fylo Landing Page",
    slug: "Fylo",
    type: "Frontend Project",
    status: "Completed",

    description:
      "A responsive landing page built to practice modern layouts, typography, spacing, hover effects and responsive design.",

    technologies: ["HTML", "CSS"],

    image: "/src/assets/Fylo.jpg",

    liveUrl: "#",
    githubUrl: "#",

    contribution: [
      "Built the page structure using HTML.",
      "Styled the interface using CSS.",
      "Implemented responsive layouts.",
      "Practiced typography and spacing.",
      "Added interactive hover effects.",
    ],

    challenges:
      "Matching the original design while maintaining a responsive layout required careful attention to spacing, sizing and positioning.",

    learning:
      "This project improved my CSS layout skills and helped me become more comfortable translating designs into working web pages.",
  },
];
