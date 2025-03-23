import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import "../styles/HomePage.css";
import "../styles/Sections.css"; // Add this import

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

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Add animation classes to elements
    document.querySelectorAll(".service-card").forEach((card, index) => {
      card.classList.add("animate-on-scroll");
      card.style.animationDelay = `${index * 0.1}s`;
    });

    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="portfolio">
        <PortfolioPreview />
      </section>

      <section id="team">
        <TeamSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>About Presync.tech</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            We're a forward-thinking software engineering company dedicated to
            delivering innovative solutions for businesses of all sizes.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card animate-on-scroll">
            <div className="about-card-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3>Our Mission</h3>
            <p>
              To empower businesses through innovative technology solutions that
              drive growth and operational excellence.
            </p>
          </div>

          <div
            className="about-card animate-on-scroll"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="about-card-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h3>Our Vision</h3>
            <p>
              To be a global leader in software engineering, recognized for our
              expertise, innovation, and client-focused approach.
            </p>
          </div>

          <div
            className="about-card animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="about-card-icon">
              <i className="fas fa-gem"></i>
            </div>
            <h3>Our Values</h3>
            <p>
              Excellence, innovation, integrity, and client success are at the
              core of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "Building responsive, high-performance web applications using MERN stack (MongoDB, Express, React, Node.js).",
    },
    {
      icon: "fas fa-server",
      title: "Backend Engineering",
      description:
        "Robust backend services with Java, Spring Boot, Go, and enterprise-grade database solutions with PostgreSQL.",
    },
    {
      icon: "fas fa-robot",
      title: "AI & ML Solutions",
      description:
        "Cutting-edge artificial intelligence and machine learning solutions for data analysis, prediction, and automation.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App Development",
      description:
        "Cross-platform and native mobile applications that provide seamless user experiences across all devices.",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Solutions",
      description:
        "Scalable cloud architecture and deployment solutions leveraging AWS, Azure, and Google Cloud.",
    },
    {
      icon: "fas fa-cubes",
      title: "SaaS Solutions",
      description:
        "End-to-end software-as-a-service platforms with scalable architecture, multi-tenancy support, and subscription management.",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Comprehensive software solutions tailored to your business needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link
                to={`/services#${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="service-link"
              >
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStackSection = () => {
  const techStack = [
    { name: "React", image: "/assets/images/tech/react.svg" },
    { name: "Node.js", image: "/assets/images/tech/node.svg" },
    { name: "MongoDB", image: "/assets/images/tech/mongodb.svg" },
    { name: "PostgreSQL", image: "/assets/images/tech/postgres.svg" },
    { name: "Java", image: "/assets/images/tech/java.svg" },
    { name: "Go", image: "/assets/images/tech/go.svg" },
    { name: "Spring Boot", image: "/assets/images/tech/spring.svg" },
    { name: "TensorFlow", image: "/assets/images/tech/tensorflow.svg" },
    { name: "AWS", image: "/assets/images/tech/aws.svg" },
    { name: "Docker", image: "/assets/images/tech/docker.svg" },
    { name: "Kubernetes", image: "/assets/images/tech/kubernetes.svg" },
    { name: "Python", image: "/assets/images/tech/python.svg" },
  ];

  return (
    <section className="tech-stack-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Tech Stack</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            We leverage cutting-edge technologies to build robust, scalable
            solutions.
          </p>
        </div>

        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div
              className="tech-item animate-on-scroll"
              key={index}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img src={tech.image} alt={tech.name} className="tech-icon" />
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PortfolioPreview = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A fully-featured e-commerce platform with real-time inventory management and AI-powered recommendations.",
      image: "/assets/images/portfolio/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "/portfolio/e-commerce-platform",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Advanced analytics platform using machine learning to predict market trends and customer behavior.",
      image: "/assets/images/portfolio/project3.jpg",
      technologies: ["Python", "TensorFlow", "AWS"],
      link: "/portfolio/ai-analytics",
    },
    {
      title: "Supply Chain Solution",
      description:
        "Blockchain-based supply chain management system ensuring transparency and traceability.",
      image: "/assets/images/portfolio/project6.jpg",
      technologies: ["Blockchain", "Go", "React"],
      link: "/portfolio/supply-chain",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-preview-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Explore some of our successful projects and see how we've helped
            businesses transform.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              className="portfolio-item animate-on-scroll"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span className="tech-tag" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={project.link} className="portfolio-link">
                  View Case Study <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/portfolio" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Md. Mahbub Alam",
      role: "AI/ML Lead & Co-Founder",
      description:
        "Expert in neural architecture search, transformer-based NLP models, and computer vision algorithms.",
      image: "/assets/images/team/member1.jpg",
    },
    {
      name: "Likhon Sarker",
      role: "Software Engineering Lead & Co-Founder",
      description:
        "Distinguished architect specializing in distributed systems and microservices orchestration.",
      image: "/assets/images/team/member2.jpg",
    },
    {
      name: "Mark Shawn",
      role: "Marketing Lead & Co-Founder",
      description:
        "Strategic marketer with expertise in SaaS growth models and B2B customer acquisition.",
      image: "/assets/images/team/member3.jpg",
    },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Expert Team</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Meet our founding team of industry experts who lead Presync.tech's
            innovation and growth.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              className="team-member animate-on-scroll"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-content">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Ready to start your project? Contact us today for a consultation.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Our Location</h4>
                <p>Block-B, Sayed Nagar, Vatara, Dhaka-1212</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email Us</h4>
                <p>presync.tech@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+8801997125063, +8801726131573</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
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
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            What our clients are saying about their experience working with us.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              className="testimonial-card animate-on-scroll"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="author-image"
                />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content animate-on-scroll">
          <h2>Ready to transform your business with technology?</h2>
          <p>Contact us today for a free consultation</p>
          <Link to="/contact" className="btn btn-cta">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
