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
    text: "I study ways to verify LLM-generated outputs, detect unauthorized changes, and maintain records of their origin. My work explores cryptographic methods and hardware-supported security to improve trust in AI-generated information.",
    tags: ["LLM integrity", "Output verification", "Provenance"],
  },
  {
    number: "02",
    title: "Secure Edge AI & RAG Systems",
    text: "I investigate security challenges in AI systems deployed on edge devices, where computing resources may be limited. I also explore how retrieval-augmented generation (RAG) can support security threat analysis in distributed environments.",
    tags: ["Edge security", "Secure deployment", "RAG"],
  },
  {
    number: "03",
    title: "AI for Healthcare & IoMT",
    text: "My healthcare research includes intelligent assistive devices, fall detection, and food–medication interaction screening. I work with machine-learning and connected-device approaches while considering reliability and security.",
    tags: ["Healthcare AI", "IoMT", "Intelligent monitoring"],
  },
  {
    number: "04",
    title: "Hardware-Based Security",
    text: "I explore physical unclonable functions (PUFs) and hardware-assisted techniques for device identification, authentication, and integrity protection in edge and IoT systems.",
    tags: ["PUFs", "Device authentication", "Hardware trust"],
  },
];

const projects = [
  {
    title: "LLMTrustChain",
    kind: "LLM security",
    state: "Accepted paper",
    description: "A hardware-rooted framework that combines cryptographic hashing and tamper-evident records to verify the integrity and origin of LLM-generated outputs.",
    tags: ["LLM integrity", "Blockchain", "Provenance"],
  },
  {
    title: "EdgeShield-LLM",
    kind: "Secure edge AI",
    state: "Accepted paper",
    description: "A framework for checking the integrity of LLM deployment files and software components in edge environments, helping identify unauthorized changes.",
    tags: ["Edge AI", "Hardware-rooted trust", "Integrity"],
  },
  {
    title: "iMediFood-Shield",
    kind: "Healthcare AI and security",
    state: "Published",
    description: "An edge-AI framework for screening possible interactions between food and medications, with risk classifications and safeguards for uncertain results.",
    tags: ["Edge AI", "Healthcare", "Food–medication safety"],
    link: "https://doi.org/10.3390/electronics15173799",
  },
  {
    title: "cStick 2.0",
    kind: "Assistive technology and IoMT",
    state: "Published",
    description: "A vision-enabled smart assistive system that uses edge and connected-device technologies for personalized fall prediction and detection.",
    tags: ["Computer vision", "IoMT", "Assistive technology"],
    link: "https://doi.org/10.3390/electronics15153375",
  },
  {
    title: "BlockShield",
    kind: "Connected-system security",
    state: "Ongoing research",
    description: "Exploring blockchain-backed integrity checks, authentication, and trust mechanisms for edge and connected systems.",
    tags: ["Blockchain", "Integrity", "Edge security"],
  },
  {
    title: "PUF-Based Device Security",
    kind: "Hardware security",
    state: "Ongoing research",
    description: "Investigating physical unclonable functions (PUFs) for hardware identity, device authentication, and secure key generation in edge and IoT devices.",
    tags: ["PUFs", "Device identity", "Authentication"],
  },
  {
    title: "RAG-Based Edge Security",
    kind: "AI systems security",
    state: "Ongoing research",
    description: "Exploring how retrieval-augmented generation can help identify and analyze security threats in distributed and resource-constrained edge systems.",
    tags: ["RAG", "Threat analysis", "Edge systems"],
  },
];

const courses = [
  { code: "CSCE 1010", name: "Introduction to Computer Science", term: "Spring & Fall 2026", text: "Supported programming labs, debugging activities, grading, office hours, and individualized student assistance." },
  { code: "CSCE 4010", name: "Social Issues in Computing", term: "Summer 2026", text: "Assisted with coursework on ethical, professional, and social issues in computing." },
  { code: "CSCE 4901", name: "Software Development Capstone I", term: "Spring 2026", text: "Supported senior teams with project planning, implementation, documentation, milestones, and feedback." },
  { code: "CSCE 3055", name: "IT Project Management", term: "Spring 2026", text: "Assisted with project planning, teamwork, documentation, and coursework assessment." },
  { code: "CSCE 2100", name: "Foundations of Computing", term: "Fall 2025", text: "Helped students with fundamental computing concepts, algorithmic problem-solving, and coursework." },
  { code: "CSCE 5150", name: "Analysis of Computer Algorithms", term: "Fall 2024", text: "Supported graduate-level algorithm analysis, problem-solving, assignments, and grading." },
];

const experience = [
  { role: "Doctoral Researcher", org: "University of North Texas", years: "Aug. 2024 – Present", details: "Researching cybersecurity and AI, including LLM-output integrity, secure edge computing, connected healthcare, and hardware-assisted security. My work includes building research frameworks, running experiments, and contributing to publications." },
  { role: "Software Engineer", org: "Teksolve IT Solutions LLC", years: "Feb. – Aug. 2024", details: "Developed and maintained backend and full-stack software using Java, JavaScript, Spring Boot, REST APIs, React, and databases. Worked on feature development, debugging, and testing." },
  { role: "Peer Mentor & Data Assistant", org: "University of North Texas · HSCC", years: "2022 – 2024", details: "Mentored middle- and high-school students through computing and college outreach. Also supported mobile and web development, data analysis, and reporting." },
  { role: "Programmer Analyst", org: "Cognizant Technology Solutions", years: "Jan. 2020 – Dec. 2021", details: "Worked on enterprise applications, databases, and backend development, including API and service testing with SoapUI and scripting with Groovy." },
  { role: "Systems Engineer", org: "Raster Technologies", years: "2019", details: "Developed applications and automation scripts using Python, SQL, PL/SQL, and AutoLISP, and supported data-processing and reporting workflows." },
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
              <p className="overline"><span className="tiny-dot" /> PH.D. RESEARCHER · CYBERSECURITY · AI</p>
              <h1 id="hero-title">Sai Sri Harsha<br /><em>Chakravarthula</em></h1>
              <p className="hero-role">Ph.D. Student in Computer Science &amp; Engineering <span className="hero-role-divider">·</span> University of North Texas</p>
              <p className="hero-description">I am a Ph.D. student at the University of North Texas, specializing in cybersecurity in emerging systems. My research focuses on securing AI and connected technologies, with interests in large language models, trustworthy AI, edge computing, and healthcare systems.</p>
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
                <div className="portrait-caption"><div><span className="portrait-label">PH.D. STUDENT · GRADUATE TEACHING ASSISTANT</span><strong>Sai Sri Harsha Chakravarthula</strong><small>University of North Texas · Denton, TX</small></div><span className="portrait-star" aria-hidden="true">✳</span></div>
              </div>
              <div className="portrait-accent" aria-hidden="true"><span>RESEARCH · TEACHING · SERVICE</span><span>DENTON · TEXAS</span></div>
            </div>
          </div>
          <div className="shell hero-bottom"><span>CYBERSECURITY · TRUSTWORTHY AI · SECURE SYSTEMS</span><a href="#about">More about me <span aria-hidden="true">↓</span></a></div>
        </section>

        <section className="section about-section" id="about">
          <div className="shell">
            <SectionHeading number="01" label="ABOUT" title="From intelligent healthcare to secure AI systems." />
            <div className="about-layout">
              <div className="about-story">
                <p className="lead">My research lies at the intersection of cybersecurity, artificial intelligence, and connected systems, particularly in healthcare and edge computing.</p>
                <p>I began by working on AI-based healthcare applications, including smart assistive devices and food–medication interaction screening. These projects showed me that building intelligent systems also means making sure they are secure, reliable, and trustworthy.</p>
                <p>Today, I study LLM-output verification, security for edge AI, retrieval-augmented generation (RAG) for threat analysis, and hardware-based authentication. Alongside my research, I enjoy teaching and helping students understand technical concepts through practical examples.</p>
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
            <SectionHeading number="02" label="RESEARCH" title="Research interests." intro="My work focuses on practical ways to improve the integrity, authentication, and security of AI and connected systems." />
            <div className="research-grid">
              {research.map((area) => <article className="research-card" key={area.number}>
                <div className="research-top"><span>{area.number} / RESEARCH AREA</span><span className="research-symbol">↗</span></div>
                <h3>{area.title}</h3><p>{area.text}</p>
                <div className="research-tags">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>)}
            </div>
            <div className="research-bottom"><span className="tiny-dot" /><p><strong>Current direction.</strong> Developing practical security approaches for LLMs, AI-enabled edge devices, and connected systems.</p></div>
          </div>
        </section>

        <section className="section" id="publications">
          <div className="shell">
            <SectionHeading number="03" label="PUBLICATIONS" title="Research publications." intro="My journal and conference papers span cybersecurity, AI, connected healthcare, and intelligent systems. Published and accepted work are shown separately." />
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
            <p className="publication-footnote">For my complete publication list and academic activities, please see my <a href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" target="_blank" rel="noopener noreferrer">curriculum vitae <ArrowIcon diagonal /></a>.</p>
          </div>
        </section>

        <section className="section section-tinted" id="projects">
          <div className="shell">
            <SectionHeading number="04" label="SELECTED PROJECTS" title="Selected research projects." intro="Examples of my published, accepted, and ongoing work in AI, cybersecurity, healthcare, and connected systems." />
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
            <SectionHeading number="05" label="TEACHING" title="Teaching and mentoring." intro="I support students through hands-on labs, problem-solving, office hours, and clear feedback. My goal is to make technical concepts easier to understand and apply." />
            <div className="teaching-layout"><div className="teaching-intro"><span className="quote-mark" aria-hidden="true">“</span><p>I want students to understand why something works, feel comfortable asking questions, and learn from mistakes as they practice.”</p><div className="teaching-note"><strong>Professional development</strong><span>Completed UNT’s SEED professional development program · Fall 2026</span></div></div>
              <div className="course-list">{courses.map(course => <article className="course" key={course.code}><span className="course-code">{course.code}</span><div><h3>{course.name}</h3><p>{course.text}</p></div><span className="course-term">{course.term}</span></article>)}</div>
            </div>
          </div>
        </section>

        <section className="section section-tinted" id="experience">
          <div className="shell">
            <SectionHeading number="06" label="EXPERIENCE & SERVICE" title="Research, industry, and academic experience." intro="My work has included academic research, software development, teaching support, and student outreach." />
            <div className="experience-layout"><div className="experience-list">{experience.map(item => <article className="experience-item" key={item.role}><div className="experience-date">{item.years}</div><div><h3>{item.role}</h3><span>{item.org}</span><p>{item.details}</p></div></article>)}</div>
              <aside className="service-panel"><p className="panel-title">SERVICE & RECOGNITION</p><h3>Academic service and outreach.</h3><p>Served as a peer reviewer for SN Computer Science (Springer Nature), IFIP IoT, IEEE iSES, IEEE ISVLSI, and OCIT.</p><div className="service-divider" /><p>Mentored students through UNT’s HSCC outreach program and supported undergraduate and graduate computing courses as a teaching assistant.</p><div className="service-divider" /><p>Recognition includes the Mission Critical Award and Best Employee Award at Cognizant, and Employee of the Month through HSCC.</p></aside>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="shell contact-layout"><div><p className="overline">07 / GET IN TOUCH</p><h2>Let’s connect and<br /><em>collaborate.</em></h2><p>I welcome opportunities to discuss research collaborations, teaching, and work related to cybersecurity and artificial intelligence. Feel free to reach out.</p></div>
            <div className="contact-actions"><a className="contact-email" href="mailto:saisriharshachakravarthula@gmail.com">saisriharshachakravarthula@gmail.com <ArrowIcon diagonal /></a><a href="https://github.com/chakravarthulaharsha" target="_blank" rel="noopener noreferrer">GitHub <ArrowIcon diagonal /></a><a href="/Sai_Sri_Harsha_Chakravarthula_CV.pdf" target="_blank" rel="noopener noreferrer">View Curriculum Vitae <ArrowIcon diagonal /></a></div>
          </div>
        </section>
      </main>
      <footer className="footer"><div className="shell footer-inner"><span>© 2026 Sai Sri Harsha Chakravarthula</span><span>Research · Teaching · Service</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}
