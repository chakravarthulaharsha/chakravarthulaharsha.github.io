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
    venue: "OCIT 2026",
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
    title: "LLM Security & Trustworthy AI",
    text: "Studying how to verify LLM-generated outputs, detect unauthorized changes, and maintain trustworthy records of their origin.",
    tags: ["LLM integrity", "Tamper detection", "Provenance"],
  },
  {
    number: "02",
    title: "Secure Edge AI & RAG Systems",
    text: "Studying secure AI deployment on edge devices and the use of retrieval-augmented generation (RAG) to analyze security threats in distributed systems.",
    tags: ["Edge AI", "RAG security", "Secure deployment"],
  },
  {
    number: "03",
    title: "AI for Healthcare & IoMT",
    text: "Developing and evaluating machine-learning approaches for assistive healthcare devices, food–medication interaction screening, and security monitoring in connected medical systems.",
    tags: ["IoMT", "Healthcare AI", "Anomaly detection"],
  },
  {
    number: "04",
    title: "Hardware-Based Security",
    text: "Investigating physical unclonable functions (PUFs), device authentication, and hardware-backed methods for protecting connected systems.",
    tags: ["PUFs", "Authentication", "Device integrity"],
  },
];

const projects = [
  {
    title: "LLMTrustChain",
    kind: "Research framework",
    state: "Accepted paper",
    description: "A research framework for verifying LLM outputs using cryptographic hashing, hardware-rooted trust, and tamper-evident records.",
    tags: ["LLMs", "Blockchain", "Provenance"],
  },
  {
    title: "iMediFood-Shield",
    kind: "Healthcare security",
    state: "Published",
    description: "A secure edge-AI framework for screening food–medication interactions and reporting risk classifications with appropriate caution.",
    tags: ["Edge AI", "Healthcare", "ML"],
    link: "https://doi.org/10.3390/electronics15173799",
  },
  {
    title: "BlockShield & PUF Research",
    kind: "Hardware & systems",
    state: "Ongoing research",
    description: "Ongoing work on BlockShield and physical unclonable functions, with a focus on device identity, authentication, and system integrity.",
    tags: ["PUF", "Device trust", "Security"],
  },
  {
    title: "RAG-Based Edge Security",
    kind: "AI systems",
    state: "Ongoing research",
    description: "Exploring how retrieval-augmented generation can support security-threat detection and analysis in distributed and resource-constrained edge systems.",
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
  { role: "Doctoral Researcher", org: "University of North Texas", years: "2024 – Present", details: "Conducting research in AI and cybersecurity, with projects in LLM integrity, secure edge computing, healthcare AI, and hardware-based trust." },
  { role: "Software Engineer", org: "Teksolve IT Solutions LLC", years: "2024", details: "Developed and maintained backend and full-stack applications, including API development, debugging, testing, and software support." },
  { role: "Peer Mentor & Data Assistant", org: "University of North Texas · HSCC", years: "2022 – 2024", details: "Supported middle- and high-school outreach, student mentoring, application development, and data analysis." },
  { role: "Programmer Analyst", org: "Cognizant Technology Solutions", years: "2020 – 2021", details: "Worked on enterprise and backend software, databases, API testing, and automation using SoapUI and Groovy." },
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
              <p className="overline"><span className="tiny-dot" /> DOCTORAL RESEARCHER · CYBERSECURITY · AI</p>
              <h1 id="hero-title">Sai Sri Harsha<br /><em>Chakravarthula.</em></h1>
              <p className="hero-role">Ph.D. Student in Computer Science &amp; Engineering <span className="hero-role-divider">/</span> University of North Texas</p>
              <p className="hero-description">I&apos;m pursuing a Ph.D. at the University of North Texas, focusing on cybersecurity in emerging systems. My research covers LLM security, trustworthy AI, secure edge computing, and connected healthcare technologies.</p>
              <div className="hero-actions">
                <a href="#research" className="btn btn-primary">Explore research <ArrowIcon /></a>
                <a href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View my CV <ArrowIcon diagonal /></a>
              </div>
              <div className="hero-meta"><span>LLM Security</span><span className="meta-separator" /><span>Secure Edge AI</span><span className="meta-separator" /><span>Healthcare AI</span></div>
            </div>
            <div className="portrait-column">
              <div className="portrait-card">
                <div className="portrait-photo">
                  <Image className="portrait-image" src="/harsha-profile.webp" width={525} height={711} priority alt="Sai Sri Harsha Chakravarthula smiling in a light gray suit and black tie" />
                  <span className="portrait-corner-badge">UNT <span>·</span> CSE</span>
                </div>
                <div className="portrait-caption"><div><span className="portrait-label">DOCTORAL RESEARCHER / TEACHING ASSISTANT</span><strong>Sai Sri Harsha Chakravarthula</strong><small>University of North Texas · Denton, TX</small></div><span className="portrait-star" aria-hidden="true">✳</span></div>
              </div>
              <div className="portrait-accent" aria-hidden="true"><span>RESEARCH · TEACHING · SERVICE</span><span>DENTON · TEXAS</span></div>
            </div>
          </div>
          <div className="shell hero-bottom"><span>CYBERSECURITY · TRUSTWORTHY AI · SECURE EDGE SYSTEMS</span><a href="#about">More about me <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="section about-section" id="about">
          <div className="shell">
            <SectionHeading number="01" label="ABOUT" title="From healthcare AI to\nsecure intelligent systems." />
            <div className="about-layout">
              <div className="about-story">
                <p className="lead">My research brings together cybersecurity, artificial intelligence, and connected systems, especially in healthcare and edge computing.</p>
                <p>My earlier work focused on smart healthcare devices and AI-based healthcare applications. That experience led me to study how to protect the AI models, data, and devices these systems depend on.</p>
                <p>Today, I work on LLM output verification, secure edge AI, RAG-based security, and hardware-based authentication. I also enjoy teaching and helping students work through technical problems step by step.</p>
                <div className="about-links"><a href="mailto:saisriharshachakravarthula@gmail.com">Contact me <ArrowIcon diagonal /></a><a href="https://github.com/chakravarthulaharsha" target="_blank" rel="noopener noreferrer">GitHub profile <ArrowIcon diagonal /></a></div>
              </div>
              <div className="education-panel">
                <p className="panel-title">ACADEMIC BACKGROUND</p>
                <div className="degree"><span className="degree-year">Aug. 2024 — May 2027 (expected)</span><h3>Ph.D. in Computer Science &amp; Engineering</h3><p>University of North Texas</p></div>
                <div className="degree"><span className="degree-year">Jan. 2022 — Dec. 2023</span><h3>M.S. in Artificial Intelligence</h3><p>University of North Texas</p></div>
                <div className="degree"><span className="degree-year">2015 — 2019</span><h3>B.E. in Electronics &amp; Communication Engineering</h3><p>Matrusri Engineering College · Osmania University</p></div>
                <div className="panel-footnote">Doctoral research focus: Cybersecurity in Emerging Systems</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="research">
          <div className="shell">
            <SectionHeading number="02" label="RESEARCH" title="Research interests and\ncurrent directions." intro="My work focuses on security challenges in AI, edge devices, connected healthcare, and hardware-based authentication." />
            <div className="research-grid">
              {research.map((area) => <article className="research-card" key={area.number}>
                <div className="research-top"><span>{area.number} / RESEARCH AREA</span><span className="research-symbol">↗</span></div>
                <h3>{area.title}</h3><p>{area.text}</p>
                <div className="research-tags">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>)}
            </div>
            <div className="research-bottom"><span className="tiny-dot" /><p><strong>Current focus.</strong> Improving the integrity, authentication, and secure deployment of AI and connected systems.</p></div>
          </div>
        </section>

        <section className="section" id="publications">
          <div className="shell">
            <SectionHeading number="03" label="PUBLICATIONS" title="Peer-reviewed publications." intro="Selected journal and conference papers, with published and accepted work clearly distinguished." />
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
            <p className="publication-footnote">For my complete publication list, please see my <a href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" target="_blank" rel="noopener noreferrer">curriculum vitae <ArrowIcon diagonal /></a>.</p>
          </div>
        </section>

        <section className="section section-tinted" id="projects">
          <div className="shell">
            <SectionHeading number="04" label="SELECTED PROJECTS" title="Projects and ongoing work." intro="Examples of my published and ongoing research in AI, healthcare, and systems security." />
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
            <SectionHeading number="05" label="TEACHING" title="Helping students build\nconfidence in computing." intro="As a teaching assistant, I focus on clear explanations, hands-on practice, and feedback that helps students improve." />
            <div className="teaching-layout"><div className="teaching-intro"><span className="quote-mark">“</span><p>I want students to understand why something works, feel comfortable asking questions, and learn from mistakes as they practice.</p><div className="teaching-note"><strong>Professional development</strong><span>Completed UNT’s SEED professional development program · Fall 2026</span></div></div>
              <div className="course-list">{courses.map(course => <article className="course" key={course.code}><span className="course-code">{course.code}</span><div><h3>{course.name}</h3><p>{course.text}</p></div><span className="course-term">{course.term}</span></article>)}</div>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="experience">
          <div className="shell">
            <SectionHeading number="06" label="EXPERIENCE & SERVICE" title="Experience across research,\neducation, and industry." />
            <div className="experience-layout"><div className="experience-list">{experience.map(item => <article className="experience-item" key={item.role}><div className="experience-date">{item.years}</div><div><h3>{item.role}</h3><span>{item.org}</span><p>{item.details}</p></div></article>)}</div>
              <aside className="service-panel"><p className="panel-title">SERVICE & RECOGNITION</p><h3>Academic service and outreach.</h3><p>Served as a peer reviewer for SN Computer Science (Springer Nature), IFIP IoT, IEEE iSES, IEEE ISVLSI, and OCIT.</p><div className="service-divider" /><p>Mentored students through UNT’s HSCC outreach program and supported undergraduate and graduate computing courses as a teaching assistant.</p><div className="service-divider" /><p>Recognition includes the Mission Critical Award at Cognizant and Employee of the Month through HSCC.</p></aside>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-layout"><div><p className="overline">07 / GET IN TOUCH</p><h2>Let’s connect and<br /><em>collaborate.</em></h2><p>I welcome research collaborations, academic opportunities, and conversations about cybersecurity, AI, and secure computing systems.</p></div>
            <div className="contact-actions"><a className="contact-email" href="mailto:saisriharshachakravarthula@gmail.com">saisriharshachakravarthula@gmail.com <ArrowIcon diagonal /></a><a href="https://github.com/chakravarthulaharsha" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon diagonal /></a><a href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" target="_blank" rel="noopener noreferrer">View Curriculum Vitae <ArrowIcon diagonal /></a></div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="shell footer-inner"><span>© 2026 Sai Sri Harsha Chakravarthula</span><span>Research · Teaching · Service</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
