import React from "react";
import { FaCodepen, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./assets/CSS/App.css";
import StarrySky from "./assets/SVGs/StarrySky";

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/sharnajh",
    icon: <FaGithub />
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sharnahossain/",
    icon: <FaLinkedinIn />
  },
  {
    label: "CodePen",
    href: "https://codepen.io/sharnajh",
    icon: <FaCodepen />
  }
];

const experience = [
  {
    title: "Software Engineer II",
    company: "Morgan Stanley",
    start: { month: 8, year: 2024 },
    end: null,
    description:
      "Focused on system design, modernization, and end-to-end delivery of distributed systems. Involved in planning architecture, defining service boundaries, and driving systems from design through production, with an emphasis on scalability, reliability, and real-world impact.",
    skills: [
      "Java",
      "Spring Boot",
      "Angular",
      "Linux",
      "Python",
      "SQL",
      "Docker",
      "Jenkins",
      "IBM MQ",
      "Apache Kafka",
      "Snowflake",
      "DB2"
    ],
    featured: true,
    current: true
  },
  {
    title: "Pro Bono Developer",
    company: "Global Poverty Research Lab",
    start: { month: 3, year: 2026 },
    end: null,
    description:
      "enhancing an open‑source, Quarto‑based data platform by supporting implementation of authentication, role‑based access controls, and early interactive analytics within an R/Python stack, improving secure and scalable data access for research and policy users. Part of my role at Morgan Stanley via the Firm's Tech Change Makers program.",
    skills: ["R", "Python", "SQL", "Google Cloud Platform", "Quarto", "Shiny"],
    current: true
  },
  {
    title: "Software Engineer I",
    company: "Morgan Stanley",
    start: { month: 1, year: 2024 },
    end: { month: 8, year: 2024 },
    description:
      "Built a microservice to replace a Mainframe-dependent settlements flow, enabling real-time processing and modernizing a critical system. Contributed to architecture through ADRs and C4 diagrams and improved data reliability across systems.",
    skills: [
      "Java",
      "Spring Boot",
      "Linux",
      "SQL",
      "Docker",
      "Jenkins",
      "IBM MQ",
      "Apache Kafka",
      "DB2"
    ]
  }
];

const education = [
  {
    school: "Columbia University",
    degree: "Coursework in Computer Science"
  },
  {
    school: "BMCC",
    degree: "Associate of Science in Computer Science"
  },
  {
    school: "New York Code + Design Academy",
    degree: "Coding Bootcamp"
  }
];

const formatMonthYear = ({ month, year }) => `${MONTH_LABELS[month - 1]} ${year}`;

const getDurationLabel = (start, end) => {
  const now = new Date();
  const endMonth = end ? end.month : now.getMonth() + 1;
  const endYear = end ? end.year : now.getFullYear();
  const totalMonths =
    (endYear - start.year) * 12 + (endMonth - start.month) + 1;

  if (totalMonths <= 0) {
    return "Less than 1 mo";
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years > 0) {
    parts.push(`${years} yr${years === 1 ? "" : "s"}`);
  }

  if (months > 0) {
    parts.push(`${months} mo${months === 1 ? "" : "s"}`);
  }

  return parts.join(" ");
};

const getExperienceMeta = (item) => {
  const range = `${formatMonthYear(item.start)} - ${
    item.end ? formatMonthYear(item.end) : "Present"
  }`;

  return {
    range,
    duration: getDurationLabel(item.start, item.end)
  };
};

const SparkleBullet = () => (
  <svg
    className="timeline-sparkle"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M12 0C13.7 7.2 16.8 10.3 24 12C16.8 13.7 13.7 16.8 12 24C10.3 16.8 7.2 13.7 0 12C7.2 10.3 10.3 7.2 12 0Z" />
  </svg>
);

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-shell">
      <StarrySky />
      <div className="atmosphere-gradient" />
      <div className="city-glow" />

      <main className="page">
        <section className="hero-card">
          <div className="hero-copy">
            <div className="hero-identity">
              <div className="hero-header">
                <h1>Sharna H.</h1>
                <p className="hero-line">Software Engineer</p>
                <p className="hero-line">
                  <span role="img" aria-label="Location pin">
                    📍
                  </span>{" "}
                  Brooklyn, New York
                </p>
              </div>
            </div>

            <p className="hero-copy-block">
              Hello there! I&apos;m a software engineer, and this is my little
              corner of the internet. I work at Morgan Stanley, modernizing
              legacy monolith systems into distributed systems and building
              reliable infrastructure for high-stakes financial workflows.
            </p>

            <p className="hero-copy-block">
              Outside of work, you can usually find me playing RPG video games,
              reading dark fantasy novels, taking photos with my Sony camera, or
              exploring new places.
            </p>

            <div className="link-row" aria-label="Contact details">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  className="contact-link"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-icon">{link.icon}</span>
                  <span className="contact-label">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="content-stack">
          <article className="panel">
            <div className="panel-heading">
              <h2>Experience</h2>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <div
                  key={`${item.title}-${item.company}`}
                  className={`timeline-item${item.featured ? " timeline-item-featured" : ""}`}
                >
                  <div className="timeline-dot">
                    <SparkleBullet />
                  </div>
                  <div>
                    <div className="timeline-heading">
                      <h3>{item.title}</h3>
                      <span className="item-separator" aria-hidden="true">
                        ●
                      </span>
                      <p className="item-inline-label">{item.company}</p>
                      {item.current && <span className="featured-badge">Current</span>}
                    </div>
                    <p className="item-meta item-subline">
                      <span>{getExperienceMeta(item).range}</span>
                      <span className="item-separator" aria-hidden="true">
                        ●
                      </span>
                      <span>{getExperienceMeta(item).duration}</span>
                    </p>
                    {item.description && (
                      <p className="timeline-description">{item.description}</p>
                    )}
                    {item.skills?.length ? (
                      <div
                        className="experience-skill-list"
                        aria-label={`${item.title} skills and tools`}
                      >
                        {item.skills.map((skill) => (
                          <span
                            key={`${item.title}-${skill}`}
                            className="experience-skill-badge"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <a
              className="resume-link"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>View my full resume</span>
              <svg
                className="resume-link-arrow"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 9H14M14 9L9.75 4.75M14 9L9.75 13.25"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </article>

          <article className="panel">
            <div className="panel-heading">
              <h2>Education</h2>
            </div>
            <div className="timeline timeline-education">
              {education.map((item) => (
                <div key={item.school} className="timeline-item timeline-item-compact">
                  <div className="timeline-dot">
                    <SparkleBullet />
                  </div>
                  <div>
                    <div className="timeline-heading">
                      <h3>{item.degree}</h3>
                      <span className="item-separator" aria-hidden="true">
                        ●
                      </span>
                      <p className="item-inline-label">{item.school}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="closing-panel">
          <p>Thank you for visiting :)</p>
          <button type="button" className="back-to-top" onClick={scrollToTop}>
            Back to top
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
