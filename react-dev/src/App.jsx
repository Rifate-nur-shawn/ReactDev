import "./App.css";
import { useState, useEffect } from "react";
import ProjectCard from "./components/ProjectCard";

// Sample project data
const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with shopping cart and payment integration",
    imageUrl:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2348",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/example",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and Tailwind CSS",
    imageUrl:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=2340",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/example",
  },
  {
    title: "Task Management App",
    description:
      "A productivity app to manage tasks and projects with drag-and-drop functionality",
    imageUrl:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=2340",
    tags: ["React", "Redux", "Firebase"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/example",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that provides real-time weather information based on location",
    imageUrl:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=2340",
    tags: ["JavaScript", "API Integration", "CSS"],
    demoLink: "https://example.com",
    codeLink: "https://github.com/example",
  },
];

// Skills data
const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "HTML/CSS", level: 95 },
  { name: "Tailwind CSS", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Git", level: 85 },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Get current year for footer
  const currentYear = new Date().getFullYear();

  // Handle scroll to track active section for nav highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "about", "contact"];
      const scrollPosition = window.scrollY + 64; // Adjust for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (section) => activeSection === section;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-indigo-600">
                  <span className="text-gray-800">John</span>Doe
                </h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-4 md:space-x-8">
                <a
                  href="#home"
                  className={`${
                    isActive("home")
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                >
                  Home
                </a>
                <a
                  href="#skills"
                  className={`${
                    isActive("skills")
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className={`${
                    isActive("projects")
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                >
                  Projects
                </a>
                <a
                  href="#about"
                  className={`${
                    isActive("about")
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className={`${
                    isActive("contact")
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden absolute w-full bg-white shadow-md">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className={`${
                  isActive("home")
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#skills"
                className={`${
                  isActive("skills")
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className={`${
                  isActive("projects")
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#about"
                className={`${
                  isActive("about")
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className={`${
                  isActive("contact")
                    ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div
        id="home"
        className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white overflow-hidden pt-16"
      >
        <div className="absolute inset-0">
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-white text-opacity-10"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2 translate-y-3/4 lg:translate-y-0 lg:translate-x-0"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa28"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-white text-opacity-10"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)"
            />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Hi, I'm John Doe
                <span className="block text-indigo-200 mt-2">
                  Full Stack Developer
                </span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-indigo-100 max-w-2xl">
                I create beautiful and functional web applications with modern
                technologies. Let's build something amazing together!
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                <a
                  href="#contact"
                  className="px-5 sm:px-6 py-2 sm:py-3 bg-white text-indigo-600 rounded-md shadow-md font-medium hover:bg-gray-50 transition-colors duration-300"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-5 sm:px-6 py-2 sm:py-3 border border-indigo-200 text-indigo-100 rounded-md font-medium hover:bg-indigo-700 hover:border-indigo-700 transition-colors duration-300"
                >
                  View My Work
                </a>
              </div>
              <div className="mt-6 sm:mt-8 flex justify-center md:justify-start space-x-5">
                <a
                  href="#"
                  className="text-indigo-100 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-6 w-6" // Reduced from h-6 w-6
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-indigo-100 hover:text-white transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6" // Reduced from h-6 w-6
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-indigo-100 hover:text-white transition-colors duration-300"
                  aria-label="Dribbble"
                >
                  <svg
                    className="h-6 w-6" // Reduced from h-6 w-6
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-indigo-100 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5" // Reduced from h-6 w-6
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative mx-auto w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2340"
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full text-white"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,250.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Skills
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-gray-900">
              My Technical Expertise
            </p>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 mx-auto">
              Here are the technologies I work with to build amazing digital
              experiences.
            </p>
          </div>

          <div className="mt-12 sm:mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 sm:p-6 shadow hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-base sm:text-lg text-gray-900">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-medium text-indigo-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-1000 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Projects
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-gray-900">
              My Recent Work
            </p>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 mx-auto">
              Take a look at some of the projects I've worked on recently.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <a
              href="#"
              className="inline-flex items-center px-5 sm:px-6 py-2 sm:py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
            >
              View All Projects
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="relative mx-auto max-w-md lg:max-w-none mb-12 lg:mb-0">
              <div className="relative lg:inset-0 h-72 sm:h-80 md:h-96">
                <div className="h-full overflow-hidden rounded-2xl shadow-xl bg-indigo-500 transform -rotate-6 transition-transform duration-300 hover:rotate-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2344"
                    alt="Person working on laptop"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-indigo-500 opacity-10 rounded-2xl transform rotate-3 translate-x-4 translate-y-4"></div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="text-center lg:text-left">
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  About Me
                </h2>
                <p className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-gray-900">
                  My Journey
                </p>
                <div className="mt-6 text-base sm:text-lg text-gray-500 space-y-4 sm:space-y-6">
                  <p>
                    I'm a passionate full-stack developer with over 5 years of
                    experience creating web applications that deliver
                    exceptional user experiences.
                  </p>
                  <p>
                    My journey in web development began when I built my first
                    website in college. Since then, I've worked with various
                    technologies and frameworks to create solutions for clients
                    across multiple industries.
                  </p>
                  <p>
                    When I'm not coding, you'll find me hiking, reading tech
                    blogs, or experimenting with new technologies to stay at the
                    forefront of web development.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                  <a
                    href="#contact"
                    className="px-5 sm:px-6 py-2 sm:py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#"
                    className="px-5 sm:px-6 py-2 sm:py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Contact
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-8 font-extrabold tracking-tight text-gray-900">
              Get In Touch
            </p>
            <p className="mt-4 max-w-2xl text-lg sm:text-xl text-gray-500 mx-auto">
              I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Send me a message
                </h3>
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="py-2 sm:py-3 px-3 sm:px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-5 sm:px-6 py-2 sm:py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg shadow-lg overflow-hidden text-white">
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg font-medium mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6" // Reduced from h-6 w-6
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base">+1 (123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6" // Reduced from h-6 w-6
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base">johndoe@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6" // Reduced from h-6 w-6
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">Social Profiles</h3>
                  <div className="flex space-x-5">
                    <a
                      href="#"
                      className="text-white hover:text-indigo-200 transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <svg
                        className="h-5 w-5" // Reduced from h-6 w-6
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-indigo-200 transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <svg
                        className="h-5 w-5" // Reduced from h-6 w-6
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-indigo-200 transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="h-5 w-5" // Reduced from h-6 w-6
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">
                <span className="text-white">John</span>
                <span className="text-indigo-400">Doe</span>
              </h2>
              <p className="text-gray-400">
                Full Stack Developer based in San Francisco, specializing in
                building exceptional digital experiences.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to receive updates and news.
              </p>
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full sm:w-auto rounded-t-md sm:rounded-tr-none sm:rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border-transparent text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 px-4 py-2 rounded-b-md sm:rounded-bl-none sm:rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-base text-gray-400">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
