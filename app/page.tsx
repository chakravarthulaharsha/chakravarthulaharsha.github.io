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
    text: "Working on ways to verify LLM-generated outputs, detect tampering, and track their origin using cryptographic and tamper-evident methods.",
    tags: ["LLM integrity", "Tamper detection", "Provenance"],
  },
  {
    number: "02",
    title: "Secure Edge AI & RAG Systems",
    text: "Studying how to protect AI deployed on edge devices and exploring how retrieval-augmented generation (RAG) can help analyze security threats.",
    tags: ["Edge AI", "RAG security", "Secure deployment"],
  },
  {
    number: "03",
    title: "AI for Healthcare & IoMT",
    text: "My healthcare research includes assistive devices, food–medication interaction screening, and anomaly detection in connected medical systems.",
    tags: ["IoMT", "Healthcare AI", "Anomaly detection"],
  },
  {
    number: "04",
    title: "Hardware-Based Security",
    text: "Investigating how physical unclonable functions (PUFs) can support device identity, authentication, and stronger security for edge and IoT systems.",
    tags: ["PUFs", "Authentication", "Device integrity"],
  },
];

const projects = [
  {
    title: "LLMTrustChain",
    kind: "Research framework",
    state: "Accepted paper",
    description: "A hardware-rooted framework that uses cryptographic hashing and tamper-evident records to help verify LLM-generated outputs.",
    tags: ["LLMs", "Blockchain", "Provenance"],
  },
  {
    title: "iMediFood-Shield",
    kind: "Healthcare security",
    state: "Published",
    description: "An edge-AI framework that screens possible food–medication interactions and evaluates the uncertainty of its predictions.",
    tags: ["Edge AI", "Healthcare", "ML"],
    link: "https://doi.org/10.3390/electronics15173799",
  },
  {
    title: "BlockShield",
    kind: "Edge & systems security",
    state: "Ongoing research",
    description: "Developing BlockShield to study blockchain-backed integrity checks and authentication for edge and connected systems.",
    tags: ["Blockchain", "Integrity", "Edge security"],
  },
  {
    title: "PUF-Based Device Security",
    kind: "Hardware security",
    state: "Ongoing research",
    description: "Investigating physical unclonable functions (PUFs) for device identification, key generation, and authentication.",
    tags: ["PUFs", "Device identity", "Authentication"],
  },
  {
    title: "RAG-Based Edge Security",
    kind: "AI systems",
    state: "Ongoing research",
    description: "Exploring how RAG can support the detection and analysis of security threats in distributed and resource-constrained edge systems.",
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
  { role: "Doctoral Researcher", org: "University of North Texas", years: "2024 – Present", details: "Researching LLM integrity, security for edge and connected systems, healthcare AI, and hardware-rooted trust." },
  { role: "Software Engineer", org: "Teksolve IT Solutions LLC", years: "Feb. – Aug. 2024", details: "Developed and maintained backend and full-stack applications using Java, JavaScript, Spring Boot, REST APIs, React, and databases." },
  { role: "Peer Mentor & Data Assistant", org: "University of North Texas · HSCC", years: "2022 – 2024", details: "Mentored middle- and high-school students through outreach activities and supported application development and data analysis." },
  { role: "Programmer Analyst", org: "Cognizant Technology Solutions", years: "Jan. 2020 – Dec. 2021", details: "Worked on enterprise software and databases, including backend development, API testing with SoapUI, and automation using Groovy." },
  { role: "Systems Engineer", org: "Raster Technologies", years: "2019", details: "Developed application and automation scripts using Python, SQL, PL/SQL, and AutoLISP, and supported data-processing workflows." },
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
              <p className="overline"><span className="tiny-dot" /> PH.D. STUDENT · CYBERSECURITY · AI</p>
              <h1 id="hero-title">Sai Sri Harsha<br /><em>Chakravarthula</em></h1>
              <p className="hero-role">Ph.D. Student in Computer Science &amp; Engineering <span className="hero-role-divider">·</span> University of North Texas</p>
              <p className="hero-description">I am a Ph.D. student at the University of North Texas, where I study cybersecurity in emerging systems. My work focuses on the security of large language models, edge AI, and connected healthcare technologies.</p>
              <div className="hero-actions">
                <a href="#research" className="btn btn-primary">Explore research <ArrowIcon /></a>
                <a href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View my CV <ArrowIcon diagonal /></a>
              </div>
              <div className="hero-meta"><span>LLM Security</span><span className="meta-separator" /><span>Edge &amp; IoMT Security</span><span className="meta-separator" /><span>Healthcare AI</span></div>
            </div>
            <div className="portrait-column">
              <div className="portrait-card">
                <div className="portrait-photo">
                  <Image className="portrait-image" src="/harsha-profile.webp" width={525} height={711} priority alt="Sai Sri Harsha Chakravarthula smiling in a light gray suit and black tie" />
                  <span className="portrait-corner-badge">UNT <span>·</span> CSE</span>
                </div>
                <div className="portrait-caption"><div><span className="portrait-label">PH.D. STUDENT · GRADUATE TEACHING ASSISTANT</span><strong>Sai Sri Harsha Chakravarthula</strong><small>University of North Texas · Denton, TX</small></div><span className="portrait-star" aria-hidden="true">✳</span></div>
              </div>
              <div className="portrait-accent" aria-hidden="true"><span>RESEARCH · TEACHING · SERVICE</span><span>DENTON · TEXAS</span></div>
            </div>
          </div>
          <div className="shell hero-bottom"><span>CYBERSECURITY · AI SECURITY · CONNECTED SYSTEMS</span><a href="#about">More about me <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="section about-section" id="about">
          <div className="shell">
            <SectionHeading number="01" label="ABOUT" title="From healthcare systems to AI security." />
            <div className="about-layout">
              <div className="about-story">
                <p className="lead">My research combines cybersecurity and artificial intelligence, with an emphasis on connected healthcare and edge devices.</p>
                <p>I started with smart healthcare devices and AI applications, including fall-detection systems and food–medication interaction screening. These projects led me to explore how to protect AI models, verify their outputs, and secure the devices that run them.</p>
                <p>My current work includes LLM output verification, security for edge AI, retrieval-augmented generation (RAG) for threat analysis, and hardware-based device authentication. I also support computing courses and enjoy helping students work through problems step by step.</p>
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
            <SectionHeading number="02" label="RESEARCH" title="Research interests and current work." intro="I study how to protect AI models, verify their outputs, and improve security in edge and connected systems." />
            <div className="research-grid">
              {research.map((area) => <article className="research-card" key={area.number}>
                <div className="research-top"><span>{area.number} / RESEARCH AREA</span><span className="research-symbol">↗</span></div>
                <h3>{area.title}</h3><p>{area.text}</p>
                <div className="research-tags">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>)}
            </div>
            <div className="research-bottom"><span className="tiny-dot" /><p><strong>Current focus.</strong> Verifying AI outputs, securing edge deployments, and strengthening device authentication.</p></div>
          </div>
        </section>

        <section className="section" id="publications">
          <div className="shell">
            <SectionHeading number="03" label="PUBLICATIONS" title="Publications." intro="Journal and conference papers, organized by publication status." />
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
            <p className="publication-footnote">For full citations and additional details, see my <a href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" target="_blank" rel="noopener noreferrer">curriculum vitae <ArrowIcon diagonal /></a>.</p>
          </div>
        </section>

        <section className="section section-tinted" id="projects">
          <div className="shell">
            <SectionHeading number="04" label="SELECTED PROJECTS" title="Selected research projects." intro="Published projects and ongoing work in AI, healthcare, and cybersecurity." />
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
            <SectionHeading number="05" label="TEACHING" title="Teaching and student support." intro="As a graduate teaching assistant, I help students learn computing concepts through labs, debugging, office hours, and practical feedback." />
            <div className="teaching-layout"><div className="teaching-intro"><span className="quote-mark" aria-hidden="true">“</span><p>I want students to understand why their code works, feel comfortable asking questions, and learn from mistakes as they practice.”</p><div className="teaching-note"><strong>Professional development</strong><span>Completed UNT’s SEED professional development program · Fall 2026</span></div></div>
              <div className="course-list">{courses.map(course => <article className="course" key={course.code}><span className="course-code">{course.code}</span><div><h3>{course.name}</h3><p>{course.text}</p></div><span className="course-term">{course.term}</span></article>)}</div>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="experience">
          <div className="shell">
            <SectionHeading number="06" label="EXPERIENCE & SERVICE" title="Research, education, and industry experience." />
            <div className="experience-layout"><div className="experience-list">{experience.map(item => <article className="experience-item" key={item.role}><div className="experience-date">{item.years}</div><div><h3>{item.role}</h3><span>{item.org}</span><p>{item.details}</p></div></article>)}</div>
              <aside className="service-panel"><p className="panel-title">SERVICE & RECOGNITION</p><h3>Academic service and outreach.</h3><p>Served as a peer reviewer for SN Computer Science (Springer Nature), IFIP IoT, IEEE iSES, IEEE ISVLSI, and OCIT.</p><div className="service-divider" /><p>Mentored students through UNT’s HSCC outreach program and supported undergraduate and graduate computing courses as a teaching assistant.</p><div className="service-divider" /><p>Recognition includes the Mission Critical Award and Best Employee Award at Cognizant, and Employee of the Month through HSCC.</p></aside>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-layout"><div><p className="overline">07 / GET IN TOUCH</p><h2>Let’s connect and<br /><em>collaborate.</em></h2><p>I welcome opportunities to collaborate on research, teaching, and projects related to AI and cybersecurity.</p></div>
            <div className="contact-actions"><a className="contact-email" href="mailto:saisriharshachakravarthula@gmail.com">saisriharshachakravarthula@gmail.com <ArrowIcon diagonal /></a><a href="https://github.com/chakravarthulaharsha" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon diagonal /></a><a href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" target="_blank" rel="noopener noreferrer">View Curriculum Vitae <ArrowIcon diagonal /></a></div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="shell footer-inner"><span>© 2026 Sai Sri Harsha Chakravarthula</span><span>Research · Teaching · Service</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
