import React, { useEffect } from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import "../styles/HomePage.css";

const HomePage = () => {
  useEffect(() => {
    // Animate elements on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        ".animate-on-scroll:not(#home *)"
      );

      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (elementPosition < viewportHeight - 100) {
          element.classList.add("animated");
        }
      });
    };

    // Add animation classes to service cards, portfolio items and team members
    document
      .querySelectorAll(".bg-white.bg-opacity-10.p-8.rounded-lg")
      .forEach((card, index) => {
        card.classList.add("animate-on-scroll");
        card.style.animationDelay = `${index * 0.1}s`;
      });

    document
      .querySelectorAll("#portfolio .rounded-lg")
      .forEach((item, index) => {
        item.classList.add("animate-on-scroll");
        item.style.animationDelay = `${index * 0.1}s`;
      });

    document.querySelectorAll("#team .rounded-lg").forEach((member, index) => {
      member.classList.add("animate-on-scroll");
      member.style.animationDelay = `${index * 0.1}s`;
    });

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run on page load

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  // Portfolio filtering function
  const filterProjects = (category) => {
    const projects = document.querySelectorAll(".portfolio-item");

    if (category === "all") {
      projects.forEach((project) => {
        project.style.display = "block";
      });
    } else {
      projects.forEach((project) => {
        if (project.dataset.category === category) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    }
  };

  return (
    <div className="home-page">
      <section id="home">
        <Hero />
      </section>

      <section
        id="about"
        className="py-20 text-white relative overflow-hidden px-12"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Presync.tech
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We're a forward-thinking software engineering company dedicated to
              delivering innovative solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl border border-blue-500 border-opacity-20 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <i className="fas fa-lightbulb text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                Our Mission
              </h3>
              <p className="text-gray-300 text-center">
                To empower businesses through innovative technology solutions
                that drive growth and operational excellence.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl border border-blue-500 border-opacity-20 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <i className="fas fa-eye text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                Our Vision
              </h3>
              <p className="text-gray-300 text-center">
                To be a global leader in software engineering, recognized for
                our expertise, innovation, and client-focused approach.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl border border-blue-500 border-opacity-20 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                <i className="fas fa-gem text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                Our Values
              </h3>
              <p className="text-gray-300 text-center">
                Excellence, innovation, integrity, and client success are at the
                core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-20 text-white relative overflow-hidden px-12"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive software solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl border-b-4 border-blue-500 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-code text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Web Development
              </h3>
              <p className="text-gray-300 mb-4">
                Building responsive, high-performance web applications using
                MERN stack (MongoDB, Express, React, Node.js).
              </p>
              <a
                href="#contact"
                className="text-blue-300 hover:text-blue-400 font-semibold inline-flex items-center"
                aria-label="Learn more about our Web Development services"
              >
                Learn More{" "}
                <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </a>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl border-b-4 border-blue-500 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-server text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Backend Engineering
              </h3>
              <p className="text-gray-300 mb-4">
                Robust backend services with Java, Spring Boot, Go, and
                enterprise-grade database solutions with PostgreSQL.
              </p>
              <a
                href="#contact"
                className="text-blue-300 hover:text-blue-400 font-semibold inline-flex items-center"
                aria-label="Learn more about our Backend Engineering services"
              >
                Learn More{" "}
                <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </a>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl border-b-4 border-blue-500 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-robot text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                AI & ML Solutions
              </h3>
              <p className="text-gray-300 mb-4">
                Cutting-edge artificial intelligence and machine learning
                solutions for data analysis, prediction, and automation.
              </p>
              <a
                href="#contact"
                className="text-blue-300 hover:text-blue-400 font-semibold inline-flex items-center"
                aria-label="Learn more about our AI & ML Solutions"
              >
                Learn More{" "}
                <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </a>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl border-b-4 border-blue-500 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <i
                  className="fas fa-mobile-alt text-2xl"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Mobile App Development
              </h3>
              <p className="text-gray-300 mb-4">
                Cross-platform and native mobile applications that provide
                seamless user experiences across all devices.
              </p>
              <a
                href="#contact"
                className="text-blue-300 hover:text-blue-400 font-semibold inline-flex items-center"
                aria-label="Learn more about our Mobile App Development"
              >
                Learn More{" "}
                <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </a>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl border-b-4 border-blue-500 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-cloud text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Cloud Solutions
              </h3>
              <p className="text-gray-300 mb-4">
                Scalable cloud architecture and deployment solutions leveraging
                AWS, Azure, and Google Cloud.
              </p>
              <a
                href="#contact"
                className="text-blue-300 hover:text-blue-400 font-semibold inline-flex items-center"
                aria-label="Learn more about our Cloud Solutions"
              >
                Learn More{" "}
                <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </a>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl border-b-4 border-blue-500 hover:transform hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <i className="fas fa-cubes text-2xl" aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                SaaS Solutions
              </h3>
              <p className="text-gray-300 mb-4">
                End-to-end software-as-a-service platforms with scalable
                architecture, multi-tenancy support, and subscription
                management.
              </p>
              <a
                href="#contact"
                className="text-blue-300 hover:text-blue-400 font-semibold inline-flex items-center"
                aria-label="Learn more about our SaaS Solutions"
              >
                Learn More{" "}
                <i className="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-white relative overflow-hidden px-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Tech Stack
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "React", src: "/assets/images/tech/react.svg" },
              { name: "Node.js", src: "/assets/images/tech/node.svg" },
              { name: "MongoDB", src: "/assets/images/tech/mongodb.svg" },
              { name: "PostgreSQL", src: "/assets/images/tech/postgres.svg" },
              { name: "Java", src: "/assets/images/tech/java.svg" },
              { name: "Go", src: "/assets/images/tech/go.svg" },
              { name: "Spring Boot", src: "/assets/images/tech/spring.svg" },
              { name: "TensorFlow", src: "/assets/images/tech/tensorflow.svg" },
              { name: "AWS", src: "/assets/images/tech/aws.svg" },
              { name: "Docker", src: "/assets/images/tech/docker.svg" },
              { name: "Kubernetes", src: "/assets/images/tech/kubernetes.svg" },
              { name: "Python", src: "/assets/images/tech/python.svg" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg hover:bg-opacity-20 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="h-16 mb-4 filter invert"
                />
                <p className="font-medium text-white">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="py-20 text-white relative overflow-hidden px-12"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Portfolio
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore our successful projects and see how we've helped
              businesses transform through advanced software engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A fully-featured e-commerce platform with real-time inventory management and AI-powered recommendations.",
                image: "/assets/images/portfolio/project1.jpg",
                tech: ["React", "Node.js", "MongoDB"],
              },
              {
                title: "AI-Powered Analytics",
                description:
                  "Advanced analytics platform using machine learning to predict market trends and customer behavior.",
                image: "/assets/images/portfolio/project3.jpg",
                tech: ["Python", "TensorFlow", "AWS"],
              },
              {
                title: "Supply Chain Solution",
                description:
                  "Blockchain-based supply chain management system ensuring transparency and traceability.",
                image: "/assets/images/portfolio/project6.jpg",
                tech: ["Blockchain", "Go", "React"],
              },
              {
                title: "Enterprise Resource Planning",
                description:
                  "Comprehensive ERP software solution integrating operations, finance, HR, and supply chain management.",
                image: "/assets/images/portfolio/project2.jpg",
                tech: ["Java", "Spring Boot", "PostgreSQL"],
              },
              {
                title: "Custom CRM System",
                description:
                  "Tailored customer relationship management software with advanced analytics and automation features.",
                image: "/assets/images/portfolio/project4.jpg",
                tech: ["Vue.js", ".NET Core", "SQL Server"],
              },
              {
                title: "Intelligent Education Platform",
                description:
                  "Adaptive learning software with personalized curriculum delivery, real-time progress analytics, and AI-driven student engagement tools.",
                image: "/assets/images/portfolio/project5.jpg",
                tech: ["React Native", "Python", "Machine Learning"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:transform hover:-translate-y-2 transition duration-300 border border-white border-opacity-20"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  width="400"
                  height="192"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500 bg-opacity-30 text-blue-100 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="text-blue-300 hover:text-blue-400 font-medium inline-flex items-center"
                    aria-label={`View ${project.title} case study`}
                  >
                    View Case Study{" "}
                    <i
                      className="fas fa-arrow-right ml-2"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl inline-block border border-blue-500 border-opacity-20"
              aria-label="Start your software project with Presync.tech"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      <section
        id="team"
        className="py-20 text-white relative overflow-hidden px-12"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Expert Team
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Meet our founding team of industry experts who lead Presync.tech's
              innovation and growth.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Md. Mahbub Alam",
                  role: "AI/ML Lead & Co-Founder",
                  description:
                    "Expert in neural architecture search, transformer-based NLP models, and computer vision algorithms with extensive experience in deploying ML systems at scale.",
                  image: "/assets/images/team/member1.jpg",
                  socials: {
                    linkedin: "#",
                    github: "https://github.com/iammahbubalam",
                    twitter: "#",
                  },
                },
                {
                  name: "Likhon Sarker",
                  role: "Software Engineering Lead & Co-Founder",
                  description:
                    "Distinguished architect specializing in distributed systems, microservices orchestration, and high-throughput event-driven architectures with DevOps integration.",
                  image: "/assets/images/team/member2.jpg",
                  socials: {
                    linkedin: "#",
                    github: "https://github.com/Likhon22",
                    twitter: "#",
                  },
                },
                {
                  name: "Mark Shawn",
                  role: "Marketing Lead & Co-Founder",
                  description:
                    "Strategic marketer with expertise in SaaS growth models, B2B customer acquisition funnels, and data-driven market penetration strategies for tech verticals.",
                  image: "/assets/images/team/member3.jpg",
                  socials: {
                    linkedin: "#",
                    github: "https://github.com/Rifate-nur-shawn",
                    twitter: "#",
                  },
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden text-center shadow-xl hover:transform hover:-translate-y-2 transition duration-300 border border-white border-opacity-20"
                >
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Presync.tech`}
                    className="w-full h-60 object-cover"
                    width="400"
                    height="240"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-300 mb-3">{member.role}</p>
                    <p className="text-gray-300 mb-4">{member.description}</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.socials.linkedin}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <i
                          className="fab fa-linkedin text-lg"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a
                        href={member.socials.github}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <i
                          className="fab fa-github text-lg"
                          aria-hidden="true"
                        ></i>
                      </a>
                      <a
                        href={member.socials.twitter}
                        className="text-gray-300 hover:text-blue-400 transition-colors"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <i
                          className="fab fa-twitter text-lg"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-white relative overflow-hidden px-12">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Testimonials
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              What our clients are saying about their experience working with
              us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Presync.tech transformed our business with their exceptional e-commerce platform. Their team was professional, responsive, and delivered beyond our expectations.",
                name: "Michael Brown",
                position: "CEO, RetailX",
                image: "/assets/images/testimonials/client1.jpg",
              },
              {
                quote:
                  "The AI solution developed by Presync.tech increased our operational efficiency by 40%. Their expertise in machine learning is unmatched in the industry.",
                name: "Jennifer Lee",
                position: "CTO, DataFlow Inc.",
                image: "/assets/images/testimonials/client2.jpg",
              },
              {
                quote:
                  "Working with Presync.tech on our healthcare platform was a game-changer. Their attention to security and compliance was impeccable, and the end product exceeded our expectations.",
                name: "Robert Martinez",
                position: "Founder, MedConnectPro",
                image: "/assets/images/testimonials/client3.jpg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl hover:transform hover:-translate-y-2 transition duration-300 border border-white border-opacity-20"
              >
                <div className="text-blue-300 mb-4">
                  <i className="fas fa-quote-left text-4xl"></i>
                </div>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 text-white relative overflow-hidden px-12"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? Contact us today for a consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-xl border border-white border-opacity-20">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full mr-4 shadow-lg">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Our Location</h4>
                    <p className="text-gray-300">
                      Block-B, Sayed Nagar, Vatara, Dhaka-1212
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full mr-4 shadow-lg">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email Us</h4>
                    <p className="text-gray-300">presync.tech@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full mr-4 shadow-lg">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Call Us</h4>
                    <p className="text-gray-300">
                      +8801997125063, +8801726131573
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full mr-4 shadow-lg">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Working Hours</h4>
                    <p className="text-gray-300">
                      24/7 - We're always available for a consultation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/105935955/admin/page-posts/published/"
                    className="bg-white bg-opacity-10 hover:bg-opacity-20 text-blue-300 p-3 rounded-full transition duration-300"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-white bg-opacity-10 hover:bg-opacity-20 text-blue-300 p-3 rounded-full transition duration-300"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-white bg-opacity-10 hover:bg-opacity-20 text-blue-300 p-3 rounded-full transition duration-300"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-white bg-opacity-10 hover:bg-opacity-20 text-blue-300 p-3 rounded-full transition duration-300"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
