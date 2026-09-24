import React from "react";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Network,
  Sparkles,
  Sun,
  Terminal,
  X
} from "lucide-react";

const resumePath = "/resume/Ayesha_JabeenV.pdf";

const skills = {
  "Data Engineering": [
    "Microsoft Fabric",
    "Lakehouse",
    "Warehouse",
    "OneLake",
    "ETL",
    "Data Ingestion",
    "Data Pipelines",
    "Medallion Architecture"
  ],
  "Programming & Processing": [
    "Python",
    "SQL",
    "PySpark",
    "Spark",
    "DataFrames",
    "Joins",
    "Aggregations",
    "CTEs",
    "Views",
    "Window Functions",
    "UDFs"
  ],
  "Cloud & Tools": [
    "Azure",
    "Azure Storage",
    "Entra ID",
    "Data Factory",
    "Power BI",
    "SQL Server",
    "SSMS",
    "Git",
    "GitHub",
    "VS Code"
  ]
};

const experiences = [
  {
    company: "Quadrant Technologies",
    role: "Software Engineer — Data Engineering",
    date: "Dec 2025 — Present",
    location: "Hyderabad, India",
    current: true,
    bullets: [
      "Developing hands-on expertise in Microsoft Fabric for data engineering workflows, including Lakehouse, Warehouse, OneLake, Notebooks, Spark, Data Factory, and Power BI.",
      "Developing SQL solutions for data extraction and transformation using joins, aggregations, CTEs, views, and window functions such as LEAD and LAG.",
      "Working with PySpark DataFrames to perform data transformation, joins, aggregations, UDF-based processing, window operations, and caching.",
      "Building familiarity with Fabric Data Factory for data ingestion, pipeline orchestration, activities, triggers, and data validation workflows.",
      "Applying the Medallion Architecture to organize data processing across Bronze, Silver, and Gold layers, supporting structured transformations and data quality.",
      "Working with SQL Server and SSMS for query development, database operations, and validation of data processing results.",
      "Completed foundational Azure training in Entra ID, Azure Storage, networking, and cloud infrastructure, building knowledge of cloud-based data environments."
    ]
  }
];

const projects = [
  {
    number: "01",
    title: "Microsoft Fabric Data Engineering Capstone",
    subtitle: "End-to-end supply chain data platform",
    stack: ["Fabric", "PySpark", "SQL", "Data Factory", "Power BI"],
    description:
      "Designed an end-to-end supply chain data engineering pipeline using Microsoft Fabric to ingest, transform, validate, and organize data through Bronze, Silver, and Gold Medallion Architecture layers.",
    points: [
      "Ingested raw CSV data into a Fabric Lakehouse and performed profiling, cleansing, and validation using PySpark Notebooks and SQL.",
      "Implemented business transformations across Silver and Gold layers, including inventory calculations, status classification, delay categories, and analytical preparation.",
      "Worked with Fabric Data Factory, OneLake, Warehouse, and Power BI concepts for orchestration, storage, and reporting workflows."
    ]
  },
  {
    number: "02",
    title: "Traffictelligence",
    subtitle: "Traffic volume estimation application",
    stack: ["Python", "Pandas", "Scikit-learn", "Flask"],
    description:
      "Developed a traffic volume estimation application using historical traffic, weather, and environmental data to support current and one-hour-ahead traffic prediction.",
    points: [
      "Performed data preprocessing, exploratory data analysis, feature engineering, and regression modeling to prepare datasets and identify factors influencing traffic patterns.",
      "Evaluated model performance with a reported 95% accuracy.",
      "Integrated prediction results into a Flask-based application for data-driven traffic monitoring and planning."
    ]
  }
];

const certifications = [
  {
    title: "Fabric Data Engineer Associate",
    issuer: "Microsoft",
    code: "DP-700"
  },
  {
    title: "Fabric Analytics Engineer Associate",
    issuer: "Microsoft",
    code: "DP-600"
  },
  {
    title: "Azure Enterprise Database Administrator Associate",
    issuer: "Microsoft",
    code: "DP-800"
  },
  {
    title: "Azure Administrator Associate",
    issuer: "Microsoft",
    code: "AZ-104"
  },
  {
    title: "SQL AI Developer Associate",
    issuer: "Microsoft",
    code: "Aug 2026"
  },
  {
    title: "Salesforce Revenue Cloud Consultant",
    issuer: "Salesforce",
    code: "May 2026"
  },
  {
    title: "ServiceNow CIS — Data Foundations",
    issuer: "ServiceNow",
    code: "May 2026"
  },
  {
    title: "Programming in Java — Elite",
    issuer: "NPTEL / IIT Madras",
    code: "2024"
  }
];

function App() {
  const [dark, setDark] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">AJ</span>
            <span>
              <strong>Ayesha Jabeen</strong>
              <small>Data Engineer</small>
            </span>
          </a>

          <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
            <a className="nav-resume" href={resumePath} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Resume <ExternalLink size={15} />
            </a>
          </div>

          <div className="nav-actions">
            <button
              className="icon-button"
              aria-label="Toggle theme"
              onClick={() => setDark((value) => !value)}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="icon-button menu-button"
              aria-label="Open menu"
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="pulse-dot" />
                DATA ENGINEER · MICROSOFT CERTIFIED
              </div>

              <h1>
                Turning raw data into
                <span> reliable systems.</span>
              </h1>

              <p className="hero-text">
                I’m Ayesha Jabeen, a Data-focused Software Engineer working with
                Microsoft Fabric, PySpark, SQL and Azure to build practical,
                scalable data engineering solutions.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Explore my work <ArrowUpRight size={18} />
                </a>
                <a className="button secondary" href={resumePath} target="_blank" rel="noreferrer">
                  View resume <ExternalLink size={17} />
                </a>
                <a className="download-link" href={resumePath} download>
                  <Download size={16} /> Download PDF
                </a>
              </div>

              <div className="social-row">
                <a href="https://www.linkedin.com/in/ayesha-jabeen-80b633249" target="_blank" rel="noreferrer">
                  <Linkedin size={17} /> LinkedIn
                </a>
                <a href="https://github.com/AyeshaJabeen10" target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
                <a href="mailto:ayeshajabeen1012@gmail.com">
                  <Mail size={17} /> Email
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Data engineering visual">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="data-card">
                <div className="data-card-top">
                  <span className="mini-label"><Database size={15} /> DATA PIPELINE</span>
                  <span className="status"><span /> LIVE</span>
                </div>
                <div className="pipeline">
                  <PipelineNode icon={<Cloud size={18} />} title="Source" />
                  <span className="connector" />
                  <PipelineNode icon={<Network size={18} />} title="Transform" />
                  <span className="connector" />
                  <PipelineNode icon={<BarChart3 size={18} />} title="Insight" />
                </div>
                <div className="data-metrics">
                  <div><strong>Bronze</strong><span>Ingest</span></div>
                  <div><strong>Silver</strong><span>Clean</span></div>
                  <div><strong>Gold</strong><span>Serve</span></div>
                </div>
              </div>
              <div className="floating-chip chip-a"><Sparkles size={15} /> Microsoft Fabric</div>
              <div className="floating-chip chip-b"><Code2 size={15} /> PySpark + SQL</div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><ChevronDown size={18} /> Scroll to explore</a>
        </section>

        <section id="about" className="section">
          <div className="container two-column">
            <SectionHeading
              kicker="01 / ABOUT"
              title="A data engineer with a software engineering foundation."
            />
            <div className="about-copy">
              <p>
                Data-focused Software Engineer with hands-on experience in
                Microsoft Fabric, PySpark, SQL, and Microsoft Azure.
              </p>
              <p>
                My work centers on data ingestion, transformation, pipeline
                orchestration, analytical processing, and structured data
                platforms using Lakehouse, Warehouse, OneLake, Spark and
                Medallion Architecture.
              </p>
              <div className="stat-grid">
                <Stat icon={<Database />} value="Fabric" label="Data platform" />
                <Stat icon={<Terminal />} value="PySpark" label="Processing" />
                <Stat icon={<Cloud />} value="Azure" label="Cloud" />
                <Stat icon={<BarChart3 />} value="Power BI" label="Analytics" />
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section section-tint">
          <div className="container">
            <SectionHeading
              kicker="02 / EXPERIENCE"
              title="Building practical data engineering capability."
              text="Professional experience grounded in cloud data platforms, transformation workflows and SQL-driven processing."
            />
            <div className="timeline">
              {experiences.map((item) => (
                <article className="experience-card" key={item.company}>
                  <div className="timeline-dot"><BriefcaseBusiness size={17} /></div>
                  <div className="experience-main">
                    <div className="experience-heading">
                      <div>
                        <p className="company">{item.company}</p>
                        <h3>{item.role}</h3>
                      </div>
                      <div className="date-block">
                        <span>{item.date}</span>
                        <small>{item.location}</small>
                      </div>
                    </div>
                    <ul className="clean-list">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}><Check size={16} /> <span>{bullet}</span></li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionHeading
              kicker="03 / PROJECTS"
              title="Selected work."
              text="Projects that bring together data engineering, machine learning and application development."
            />
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-number">{project.number}</div>
                  <div className="project-title-row">
                    <div>
                      <p className="project-kicker">{project.subtitle}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <ArrowUpRight className="project-arrow" />
                  </div>
                  <p className="project-description">{project.description}</p>
                  <ul className="clean-list project-list">
                    {project.points.map((point) => (
                      <li key={point}><Check size={16} /> <span>{point}</span></li>
                    ))}
                  </ul>
                  <div className="tag-row">
                    {project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section section-dark">
          <div className="container">
            <SectionHeading
              dark
              kicker="04 / SKILLS"
              title="Tools I work with."
              text="A focused stack for data engineering, processing, cloud and analytics."
            />
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <article className="skill-card" key={category}>
                  <div className="skill-icon">
                    {category === "Data Engineering" ? <Database /> : category === "Programming & Processing" ? <Code2 /> : <Cloud />}
                  </div>
                  <h3>{category}</h3>
                  <div className="tag-row">
                    {items.map((skill) => <span className="tag dark-tag" key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              kicker="05 / CERTIFICATIONS"
              title="Microsoft-certified and continuously learning."
              text="Certifications and learning milestones listed in my current resume."
            />
            <div className="cert-grid">
              {certifications.map((cert) => (
                <article className="cert-card" key={cert.title}>
                  <Award size={21} />
                  <div>
                    <p>{cert.issuer}</p>
                    <h3>{cert.title}</h3>
                    <span>{cert.code}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="resume-band">
          <div className="container resume-inner">
            <div>
              <span className="eyebrow">FULL RESUME</span>
              <h2>Want the complete picture?</h2>
              <p>Open the PDF for the complete professional profile, experience, projects, certifications and education.</p>
            </div>
            <div className="resume-actions">
              <a className="button light-button" href={resumePath} target="_blank" rel="noreferrer">
                View Resume <ExternalLink size={17} />
              </a>
              <a className="button outline-light" href={resumePath} download>
                Download PDF <Download size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div>
              <SectionHeading
                kicker="06 / CONTACT"
                title="Let’s build something useful with data."
                text="For professional opportunities, collaboration, or questions about my work, feel free to reach out."
              />
            </div>
            <div className="contact-card">
              <a href="mailto:ayeshajabeen1012@gmail.com">
                <span className="contact-icon"><Mail size={19} /></span>
                <span><small>Email</small><strong>ayeshajabeen1012@gmail.com</strong></span>
                <ArrowUpRight />
              </a>
              <a href="https://www.linkedin.com/in/ayesha-jabeen-80b633249" target="_blank" rel="noreferrer">
                <span className="contact-icon"><Linkedin size={19} /></span>
                <span><small>LinkedIn</small><strong>Connect professionally</strong></span>
                <ArrowUpRight />
              </a>
              <a href="https://github.com/AyeshaJabeen10" target="_blank" rel="noreferrer">
                <span className="contact-icon"><Github size={19} /></span>
                <span><small>GitHub</small><strong>View my code</strong></span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Ayesha Jabeen</span>
          <span>Data Engineering · Microsoft Fabric · Azure</span>
        </div>
      </footer>
    </div>
  );
}

function PipelineNode({ icon, title }) {
  return (
    <div className="pipeline-node">
      <span>{icon}</span>
      <small>{title}</small>
    </div>
  );
}

function Stat({ icon, value, label }) {
  return (
    <div className="stat">
      <span>{icon}</span>
      <div><strong>{value}</strong><small>{label}</small></div>
    </div>
  );
}

function SectionHeading({ kicker, title, text, dark = false }) {
  return (
    <div className={`section-heading ${dark ? "on-dark" : ""}`}>
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default App;