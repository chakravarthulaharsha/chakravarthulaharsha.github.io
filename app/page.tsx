"use client";

import { useState } from "react";
import Image from "next/image";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: "Published" | "Accepted";
  link?: string;
};

const publications: Publication[] = [
  {
    title: "iMediFood-Shield: Secure Edge AI for Food and Medication Interaction Screening",
    authors: "S. S. H. Chakravarthula, I. D. Siripurapu, L. Rachakonda, S. P. Mohanty, and E. Kougianos",
    venue: "Electronics, vol. 15",
    year: "2026",
    status: "Published",
    link: "https://doi.org/10.3390/electronics15173799",
  },
  {
    title: "cStick 2.0: An IoMT-Edge Based Vision-Enabled Smart System for Personalized Fall Prediction and Detection",
    authors: "L. Rachakonda, S. S. H. Chakravarthula, S. P. Mohanty, and E. Kougianos",
    venue: "Electronics, vol. 15",
    year: "2026",
    status: "Published",
    link: "https://doi.org/10.3390/electronics15153375",
  },
  {
    title: "Deepfake Audio Detection: Differentiating Modulated and Deepfake Audio",
    authors: "S. S. H. Chakravarthula, A. Mitra, S. P. Mohanty, and E. Kougianos",
    venue: "IEEE MetroCon",
    year: "2025",
    status: "Published",
    link: "https://ieeexplore.ieee.org/document/11405771",
  },
  {
    title: "Visiting Center Based Portable Emissary Approach for Data Gathering in Wireless Sensor Networks",
    authors: "M. V. Naresh, A. Akshith, C. H. Sai Sri Harsha, and M. Sai Kumar",
    venue: "ICCMC, pp. 1023–1028",
    year: "2019",
    status: "Published",
    link: "https://doi.org/10.1109/ICCMC.2019.8819746",
  },
  {
    title: "LLMTrustChain: A Hardware-Rooted Blockchain Framework for Tamper-Evident Verification of LLM Outputs",
    authors: "S. S. H. Chakravarthula, V. K. V. V. Bathalapalli, V. P. Yanambaka, L. Rachakonda, S. P. Mohanty, and E. Kougianos",
    venue: "IFIP IoT",
    year: "2026",
    status: "Accepted",
  },
  {
    title: "EdgeShield-LLM: Hardware-Rooted Integrity Verification for Edge LLM Deployment Bundles",
    authors: "S. S. H. Chakravarthula, V. P. Yanambaka, L. Rachakonda, S. P. Mohanty, and E. Kougianos",
    venue: "IEEE ISVLSI",
    year: "2026",
    status: "Accepted",
  },
  {
    title: "SANDS: Security-Aware Anomaly Detection for IoMT Systems",
    authors: "S. S. H. Chakravarthula, L. Rachakonda, S. P. Mohanty, and E. Kougianos",
    venue: "IEEE ISVLSI",
    year: "2026",
    status: "Accepted",
  },
  {
    title: "iMediFood-AI: Risk-Aware Dietary–Medication Interaction Prediction",
    authors: "I. D. Siripurapu, S. S. H. Chakravarthula, L. Rachakonda, S. P. Mohanty, and E. Kougianos",
    venue: "OCIT (revision required)",
    year: "2026",
    status: "Accepted",
  },
  {
    title: "SideShield: Runtime Side-Channel Leakage Detection for Edge LLMs",
    authors: "S. S. H. Chakravarthula, L. Rachakonda, S. P. Mohanty, and E. Kougianos",
    venue: "IEEE iSES",
    year: "2026",
    status: "Accepted",
  },
];

const research = [
  {
    number: "01",
    title: "Trustworthy AI & LLM Security",
    text: "Building ways to verify AI-generated content, detect tampering, and make large language models more reliable.",
    tags: ["LLM integrity", "Model security", "Provenance"],
  },
  {
    number: "02",
    title: "Edge & RAG Security",
    text: "Protecting intelligent systems that run on edge devices, including secure model deployment and retrieval-augmented generation.",
    tags: ["Edge AI", "RAG", "Secure deployment"],
  },
  {
    number: "03",
    title: "Healthcare AI & IoMT",
    text: "Applying machine learning and practical security to connected healthcare, smart assistive devices, and risk screening.",
    tags: ["IoMT", "Healthcare", "Anomaly detection"],
  },
  {
    number: "04",
    title: "Hardware-Rooted Security",
    text: "Exploring device identity, physical unclonable functions, and cryptographic methods that strengthen trust in connected systems.",
    tags: ["PUF", "Authentication", "Integrity"],
  },
];

const projects = [
  {
    title: "LLMTrustChain",
    kind: "Research framework",
    state: "Accepted research",
    description: "A hardware-rooted approach to checking the integrity and origin of LLM-generated outputs using tamper-evident records.",
    tags: ["LLMs", "Blockchain", "Provenance"],
  },
  {
    title: "iMediFood-Shield",
    kind: "Healthcare security",
    state: "Published",
    description: "Secure edge-AI research for screening food–medication interactions and communicating risk responsibly.",
    tags: ["Edge AI", "Healthcare", "ML"],
    link: "https://doi.org/10.3390/electronics15173799",
  },
  {
    title: "BlockShield & PUF Security",
    kind: "Hardware & systems",
    state: "Ongoing research",
    description: "Investigating hardware identity, authentication, and tamper-resistant trust for emerging connected systems.",
    tags: ["PUF", "Device trust", "Security"],
  },
  {
    title: "RAG & Edge Security",
    kind: "AI systems",
    state: "Ongoing research",
    description: "Exploring how retrieval-augmented generation and edge intelligence can help identify and respond to security threats.",
    tags: ["RAG", "LLMs", "Edge"],
  },
];

const courses = [
  { code: "CSCE 1010", name: "Introduction to Computer Science", term: "Spring & Fall 2026", text: "Programming fundamentals, debugging, labs, grading, and student support." },
  { code: "CSCE 4010", name: "Social Issues in Computing", term: "Summer 2026", text: "Supporting students as they discuss ethical and social questions in computing." },
  { code: "CSCE 4901", name: "Software Development Capstone I", term: "Spring 2026", text: "Helping senior students plan, build, document, and evaluate team projects." },
  { code: "CSCE 3055", name: "IT Project Management", term: "Spring 2026", text: "Project planning, documentation, teamwork, and assessment support." },
  { code: "CSCE 2100", name: "Foundations of Computing", term: "Fall 2025", text: "Algorithmic problem solving, computing concepts, and office hours." },
  { code: "CSCE 5150", name: "Analysis of Computer Algorithms", term: "Fall 2024", text: "Graduate-level algorithm analysis, coursework, and student support." },
];

const experience = [
  { role: "Doctoral Researcher", org: "University of North Texas", years: "2024 – Present", details: "Researching trustworthy AI, LLM security, edge computing, secure healthcare systems, and hardware-rooted trust." },
  { role: "Software Engineer", org: "Teksolve IT Solutions LLC", years: "2024", details: "Worked on backend and full-stack development, APIs, debugging, testing, and software maintenance." },
  { role: "Peer Mentor & Data Assistant", org: "University of North Texas · HSCC", years: "2022 – 2024", details: "Mentored school students, supported educational outreach, and worked on technical and data tasks." },
  { role: "Programmer Analyst", org: "Cognizant Technology Solutions", years: "2020 – 2021", details: "Developed enterprise software and database solutions, including API testing and Groovy-based automation." },
];

const navigation = ["About", "Research", "Publications", "Projects", "Teaching", "Experience", "Contact"];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow-icon">{diagonal ? "↗" : "→"}</span>;
}

function SectionHeading({ number, label, title, intro }: { number: string; label: string; title: string; intro?: string }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{number}</span><span className="kicker-line" />{label}</div>
      <div className="heading-row">
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  const [filter, setFilter] = useState<"All" | "Published" | "Accepted">("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const visiblePublications = publications.filter((p) => filter === "All" || p.status === filter);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <div className="shell header-inner">
          <a href="#top" className="brand" aria-label="Sai Sri Harsha Chakravarthula, homepage" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark">SH<span>.</span></span>
            <span className="brand-text">Sai Sri Harsha <small>Chakravarthula</small></span>
          </a>
          <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation" id="site-navigation">
            {navigation.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
            <a className="nav-cv" href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>View CV <ArrowIcon diagonal /></a>
          </nav>
          <button type="button" className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span /> <span /> <span />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-content">
              <p className="overline"><span className="tiny-dot" /> Ph.D. RESEARCHER · AI SECURITY · EDUCATOR</p>
              <h1 id="hero-title">Sai Sri Harsha<br /><em>Chakravarthula.</em></h1>
              <p className="hero-role">Cybersecurity in Emerging Systems <span className="hero-role-divider">/</span> University of North Texas</p>
              <p className="hero-description">I&apos;m a Ph.D. researcher working at the intersection of cybersecurity and artificial intelligence. My research focuses on making LLMs, edge devices, and connected healthcare systems more secure, reliable, and trustworthy.</p>
              <div className="hero-actions">
                <a href="#research" className="btn btn-primary">Explore research <ArrowIcon /></a>
                <a href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View my CV <ArrowIcon diagonal /></a>
              </div>
              <div className="hero-meta"><span>Research</span><span className="meta-separator" /><span>Teaching</span><span className="meta-separator" /><span>Real-world impact</span></div>
            </div>
            <div className="portrait-column">
              <div className="portrait-card">
                <div className="portrait-photo">
                  <Image className="portrait-image" src="/harsha-profile.webp" width={525} height={711} priority alt="Sai Sri Harsha Chakravarthula smiling in a light gray suit and black tie" />
                  <span className="portrait-corner-badge">UNT <span>·</span> CSE</span>
                </div>
                <div className="portrait-caption"><div><span className="portrait-label">RESEARCHER / ENGINEER / EDUCATOR</span><strong>Sai Sri Harsha Chakravarthula</strong><small>University of North Texas · Denton, TX</small></div><span className="portrait-star" aria-hidden="true">✳</span></div>
              </div>
              <div className="portrait-accent" aria-hidden="true"><span>RESEARCH ROOTED IN TRUST</span><span>01 / 04</span></div>
            </div>
          </div>
          <div className="shell hero-bottom"><span>CYBERSECURITY · TRUSTWORTHY AI · SECURE EDGE SYSTEMS</span><a href="#about">More about me <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="section about-section" id="about">
          <div className="shell">
            <SectionHeading number="01" label="ABOUT" title="Research built on curiosity.\nGrounded in real problems." />
            <div className="about-layout">
              <div className="about-story">
                <p className="lead">My work sits at the intersection of cybersecurity, artificial intelligence, and the systems people rely on every day.</p>
                <p>I started by working on intelligent healthcare systems. That experience led me toward a broader question: how do we make AI and connected devices more secure, trustworthy, and practical outside the lab?</p>
                <p>Today, my research spans secure edge AI, hardware-based trust, LLM security, and RAG/edge security. I also enjoy teaching and helping students approach difficult technical problems one step at a time.</p>
                <div className="about-links"><a href="mailto:saisriharshachakravarthula@gmail.com">Get in touch <ArrowIcon diagonal /></a><a href="https://github.com/chakravarthulaharsha" target="_blank" rel="noopener noreferrer">GitHub profile <ArrowIcon diagonal /></a></div>
              </div>
              <div className="education-panel">
                <p className="panel-title">ACADEMIC BACKGROUND</p>
                <div className="degree"><span className="degree-year">2024 — 2027 (expected)</span><h3>Ph.D., Computer Science & Engineering</h3><p>University of North Texas</p></div>
                <div className="degree"><span className="degree-year">2022 — 2023</span><h3>M.S., Artificial Intelligence</h3><p>University of North Texas</p></div>
                <div className="degree"><span className="degree-year">2015 — 2019</span><h3>B.E., Electronics & Communication Engineering</h3><p>Matrusri Engineering College · Osmania University</p></div>
                <div className="panel-footnote">Doctoral research focus: Cybersecurity in Emerging Systems</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="research">
          <div className="shell">
            <SectionHeading number="02" label="RESEARCH" title="Making intelligent systems\nmore trustworthy." intro="Four connected directions guide my work, from secure AI models to the devices and environments where they run." />
            <div className="research-grid">
              {research.map((area) => <article className="research-card" key={area.number}>
                <div className="research-top"><span>{area.number} / RESEARCH AREA</span><span className="research-symbol">↗</span></div>
                <h3>{area.title}</h3><p>{area.text}</p>
                <div className="research-tags">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>)}
            </div>
            <div className="research-bottom"><span className="tiny-dot" /><p><strong>Current direction.</strong> Building practical ways to verify AI outputs, protect edge deployments, and strengthen trust from hardware to application.</p></div>
          </div>
        </section>

        <section className="section" id="publications">
          <div className="shell">
            <SectionHeading number="03" label="PUBLICATIONS" title="Selected scholarly work." intro="A selection of published and accepted work. Publication status is kept visible for clarity." />
            <div className="pub-toolbar"><div className="pub-tabs" role="group" aria-label="Filter publications">
              {(["All", "Published", "Accepted"] as const).map((item) => <button key={item} type="button" aria-pressed={filter === item} className={filter === item ? "pub-tab active" : "pub-tab"} onClick={() => setFilter(item)}>{item}<span>{item === "All" ? publications.length : publications.filter(p => p.status === item).length}</span></button>)}
            </div><span className="pub-note">{visiblePublications.length} {visiblePublications.length === 1 ? "paper" : "papers"} shown</span></div>
            <div className="publication-list">
              {visiblePublications.map((pub, index) => <article className="publication-item" key={pub.title}>
                <span className="pub-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="pub-details"><div className="pub-status-line"><span className={pub.status === "Published" ? "pub-status published" : "pub-status"}>{pub.status}</span><span>{pub.year}</span></div><h3>{pub.title}</h3><p className="pub-authors">{pub.authors}</p><p className="pub-venue">{pub.venue}</p></div>
                {pub.link ? <a className="pub-link" href={pub.link} aria-label={`Open paper: ${pub.title}`} target="_blank" rel="noopener noreferrer"><ArrowIcon diagonal /></a> : <span className="pub-unlinked" aria-label="Paper link not yet added">—</span>}
              </article>)}
            </div>
            <p className="publication-footnote">For the full, most up-to-date publication record, please see my <a href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" target="_blank" rel="noopener noreferrer">curriculum vitae <ArrowIcon diagonal /></a>.</p>
          </div>
        </section>

        <section className="section section-tinted" id="projects">
          <div className="shell">
            <SectionHeading number="04" label="SELECTED PROJECTS" title="Research in practice." intro="A closer look at a few research projects, including work currently in progress." />
            <div className="project-grid">
              {projects.map((project, index) => <article className="project-card" key={project.title}>
                <div className="project-top"><span>PROJECT / {String(index + 1).padStart(2, "0")}</span><span className="project-status">{project.state}</span></div>
                <div className="project-body"><span className="project-type">{project.kind}</span><h3>{project.title}</h3><p>{project.description}</p></div>
                <div className="project-bottom"><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Read ${project.title} paper`}>↗</a>}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section" id="teaching">
          <div className="shell">
            <SectionHeading number="05" label="TEACHING" title="Helping students learn\nto solve the next problem." intro="Teaching is an important part of my academic work. I focus on clear explanations, approachable feedback, and hands-on practice." />
            <div className="teaching-layout"><div className="teaching-intro"><span className="quote-mark">“</span><p>I want students to understand not just what works, but why it works — and feel comfortable trying again when it doesn’t.</p><div className="teaching-note"><strong>Professional development</strong><span>Completed UNT’s SEED teaching development program · Fall 2026</span></div></div>
              <div className="course-list">{courses.map(course => <article className="course" key={course.code}><span className="course-code">{course.code}</span><div><h3>{course.name}</h3><p>{course.text}</p></div><span className="course-term">{course.term}</span></article>)}</div>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="experience">
          <div className="shell">
            <SectionHeading number="06" label="EXPERIENCE & SERVICE" title="A background across\nresearch and industry." />
            <div className="experience-layout"><div className="experience-list">{experience.map(item => <article className="experience-item" key={item.role}><div className="experience-date">{item.years}</div><div><h3>{item.role}</h3><span>{item.org}</span><p>{item.details}</p></div></article>)}</div>
              <aside className="service-panel"><p className="panel-title">SERVICE & RECOGNITION</p><h3>Beyond research.</h3><p>Peer reviewer for journals and conferences including SN Computer Science, IFIP IoT, IEEE iSES, IEEE ISVLSI, and OCIT.</p><div className="service-divider" /><p>Student outreach and mentoring through UNT’s HSCC program, along with teaching support across undergraduate and graduate computing courses.</p><div className="service-divider" /><p>Recognition includes the Mission Critical Award at Cognizant and Employee of the Month through HSCC.</p></aside>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-layout"><div><p className="overline">07 / GET IN TOUCH</p><h2>Let’s work on what<br /><em>comes next.</em></h2><p>I’m open to research collaborations, academic conversations, and opportunities where trustworthy AI and cybersecurity can make a meaningful difference.</p></div>
            <div className="contact-actions"><a className="contact-email" href="mailto:saisriharshachakravarthula@gmail.com">saisriharshachakravarthula@gmail.com <ArrowIcon diagonal /></a><a href="https://github.com/chakravarthulaharsha" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon diagonal /></a><a href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" target="_blank" rel="noopener noreferrer">View Curriculum Vitae <ArrowIcon diagonal /></a></div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="shell footer-inner"><span>© 2026 Sai Sri Harsha Chakravarthula</span><span>Designed for clarity, curiosity, and trust.</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
