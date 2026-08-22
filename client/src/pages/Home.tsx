/**
 * Reference workspace design reminder: warm off-white canvas, soft beige bands, charcoal editorial
 * type, orange active states, and dark rounded status cards. Content is expanded from the latest resume
 * without invented metrics or unsupported claims.
 */
import { useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Network,
  X,
} from "lucide-react";
import ragForgeThumbnail from "../../../RAGForge_thumbnail.png";
import multillmThumbnail from "../../../Multillm_thumbnail.png";
import onyxAiThumbnail from "../../../OnyxAI_thumbnail.png";
import uploadedMarkImage from "../../../image.png";

const heroImage = "/manus-storage/signal-noise-hero_b9e45332.png";
const markImage = uploadedMarkImage;
const textureImage = "/manus-storage/signal-grid-texture_bb1acaf2.png";
const orbitImage = "/manus-storage/agent-orbit-detail_bf2c41ed.png";

const projects = [
  {
    index: "01",
    type: "RAG / GROUNDED QA / CONTROL CENTER",
    title: "RAGForge\nGrounded QA",
    summary: "A production-grade Retrieval-Augmented Generation system designed around retrieved documents, citation-aware answers, reranking, vector search, and operational visibility for reducing hallucination.",
    stack: ["Python", "FastAPI", "FAISS", "LlamaIndex", "BGE reranker"],
    image: ragForgeThumbnail,
    proof: "Document ingestion + reranked retrieval + citations",
    flow: "INGEST → INDEX → RERANK → GROUND → CITE",
    href: "https://ragforge.ai.studio/",
  },
  {
    index: "02",
    type: "GENAI / MODEL ROUTING / COMPARISON",
    title: "MultiLLM\nChat Studio",
    summary: "A beginner-friendly AI chat application powered by OpenRouter that makes model switching and response comparison visible, with voice input and analytics tracking for a more useful experimentation loop.",
    stack: ["Python", "OpenRouter API", "Model switching", "Voice input"],
    image: multillmThumbnail,
    proof: "Multiple models + side-by-side response workflow",
    flow: "PROMPT → ROUTE → COMPARE → ITERATE",
    href: "https://drive.google.com/file/d/1pOGDZN2VBBsOwYl9uOEGKki24ALp36sr/view?usp=sharing",
  },
  {
    index: "03",
    type: "FULL-STACK / AI ASSISTANT / TOOL USE",
    title: "Onyx AI\nAssistant",
    summary: "A full-stack AI assistant web app with secure authentication, persistent chat history, voice input, document analysis, live web search, and a streamed conversational interface across devices.",
    stack: ["React", "Tailwind CSS", "Base44 BaaS", "Web search"],
    image: onyxAiThumbnail,
    proof: "Persistent memory + documents + live search + voice",
    flow: "ASK → SEARCH → ANALYZE → STREAM → REMEMBER",
    href: "https://my-onyxai.base44.app/",
  },
];

const capabilities = [
  ["01", "Programming", "Python and SQL for machine-learning experiments, data workflows, analytics, and application logic."],
  ["02", "Machine Learning", "Machine Learning, Deep Learning, NLP, Transformers, and Scikit-Learn across modeling and evaluation workflows."],
  ["03", "GenAI + LLMs", "RAG pipelines, AI agent building, LLM API integration, prompt engineering, context engineering, harness engineering, loop engineering, graph engineering, and fine-tuning concepts."],
  ["04", "Frameworks + tools", "LangChain, AutoGen, Hugging Face Transformers, APIs, Jupyter Notebook, Google Colab, and Hugging Face Hub."],
  ["05", "Data + databases", "Pandas, NumPy, vector databases including Pinecone and FAISS, SQL, embeddings, semantic search, and data pipelines."],
  ["06", "Version control + platforms", "GitHub, Google Colab, Hugging Face Hub, and practical project workflows for documenting and iterating on AI systems."],
  ["07", "Automation + cloud", "N8N automation, AI workflow automation, AWS basics, and multi-agent systems as an applied systems foundation."],
  ["08", "Professional strengths", "Analytical thinking, problem solving, research skills, team collaboration, and clear communication."],
];

const learningNotes = [
  { label: "CERTIFICATION / 01", title: "Google Cloud Data Analytics", desc: "Google Cloud certificate issued April 2025; focused on BigQuery, cloud computing, data analysis, modeling, transformation, visualization, and business intelligence.", href: "https://www.credly.com/earner/earned/badge/f9723428-e6ed-45f0-9160-c25b7784ffd3" },
  { label: "CERTIFICATION / 02", title: "Python for Data Science", desc: "Infosys certification issued July 2025, strengthening Python-first analysis and data-science foundations.", href: "" },
  { label: "CERTIFICATION / 03", title: "Meta’s GenAI in Data Analytics", desc: "Coursera certification issued August 2025, connecting generative AI with analytics-oriented problem solving.", href: "https://coursera.org/verify/GFTOGU985DKL" },
  { label: "CERTIFICATION / 04", title: "IT Specialist — Data Analytics", desc: "Certiport certification issued November 2024, covering data analytics, manipulation, statistics, and introductory data-science practice.", href: "https://www.credly.com/earner/earned/badge/d9f1c421-897a-4dbe-93a0-ab6e3247454d" },
  { label: "CERTIFICATION / 05", title: "Cybersecurity for Beginners", desc: "Tata STRIVE certification issued November 2024, adding baseline security awareness to the engineering foundation.", href: "" },
  { label: "CERTIFICATION / 06", title: "Generative AI for Educators", desc: "Google Skillshop award issued December 2024, documenting practical exposure to generative AI use cases.", href: "https://skillshop.exceedlms.com/student/award/g4RFCPyDDsg6ARaDb8WzNeHD" },
  { label: "WORKSHOP / 07", title: "OpenAI Hands-on Workshop", desc: "Accent Techno Soft, 2024 — explored practical OpenAI / ChatGPT concepts and Transformer architecture.", href: "" },
  { label: "MASTERCLASS / 08", title: "ML Ops Fundamentals", desc: "Scalar Academy, 2025 — building awareness of the practices that move models toward dependable use.", href: "" },
  { label: "DAILY PRACTICE / 09", title: "AI / ML Field Notes", desc: "A continuing learning habit: exploring current AI technology, listening to technical podcasts, and following technology news updates to understand new tools, research directions, and engineering practices.", href: "" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <aside className="identity-rail">
        <button className="mark-button" onClick={() => scrollTo("top")} aria-label="Back to top"><img src={markImage} alt="VE signal mark" /></button>
        <div className="rail-line" />
        <span className="rail-copy">AI ENGINEER FRESHER</span>
        <span className="rail-number">VE—26</span>
        <span className="rail-pulse" aria-hidden="true" />
      </aside>

      <div className="page-content" id="top">
        <header className="topbar">
          <button className="wordmark" onClick={() => scrollTo("top")} aria-label="Vignesh home"><span>VIGNESH</span><span className="lime-dot">E</span></button>
          <nav className={`topnav ${menuOpen ? "is-open" : ""}`}>
            <button onClick={() => scrollTo("work")}><span>01</span> Work</button>
            <button onClick={() => scrollTo("capabilities")}><span>02</span> Skills</button>
            <button onClick={() => scrollTo("journey")}><span>03</span> Journey</button>
            <button onClick={() => scrollTo("learning")}><span>04</span> Learning</button>
          </nav>
          <div className="topbar-actions"><a className="availability" href="mailto:vimalvignesh5405@gmail.com"><i /> Open to AI roles</a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
        </header>

        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-art" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" /><div className="hero-shade" aria-hidden="true" />
          <div className="hero-kicker mono">AI / ML PRACTICE — 2026 — 01</div>
          <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-rule" /> Turning curiosity into applied intelligence</p><h1 id="hero-title">I build<br /><em>AI systems</em><br />with intent.</h1><p className="hero-description">AI Engineer fresher focused on Generative AI, RAG systems, prompt engineering, data analysis, and real-world AI applications.</p><div className="hero-cta-row"><button className="signal-button" onClick={() => scrollTo("work")}>Explore the builds <ArrowUpRight size={16} /></button><a className="text-link" href="mailto:vimalvignesh5405@gmail.com">Start a conversation <span>↗</span></a></div></div>
          <div className="hero-status-panel"><div className="status-header mono"><span><i className="status-dot" /> READINESS SIGNAL</span><span>01 / 04</span></div><div className="status-title">AI Engineer<br /><strong>in motion.</strong></div><div className="status-lines"><div><span>Primary focus</span><b>GenAI / RAG</b></div><div><span>Current mode</span><b>Building + learning</b></div><div><span>Base signal</span><b>Python + SQL</b></div></div><div className="panel-footer mono">CGPA / 8.2 — MAILAM</div></div>
          <div className="scroll-note mono"><span className="scroll-arrow">↓</span> Scroll to inspect</div>
        </section>

        <section className="intro-section section-pad" id="about"><div className="section-index mono">01 <span>/</span> PROFILE</div><div className="intro-grid"><div><p className="section-label">A focused starting point</p><h2>Learning<br />to build<br /><em>useful AI.</em></h2></div><div className="intro-body"><p className="lead-copy">I’m Vignesh, an AI Engineer fresher with a clear passion for AI / ML and a daily habit of learning how the field is moving.</p><p>My current work sits at the intersection of Generative AI and practical engineering: making systems easier to ground, compare, automate, and use. I’m especially interested in LLMs, RAG, agent workflows, and the discipline required to turn experiments into dependable applications. Every day, I explore new AI technology, follow technical podcasts, and track technology news to keep my understanding connected to what is changing beyond the classroom.</p><div className="fact-row"><span className="mono">EDUCATION</span><strong>B.Tech — AI & Data Science</strong><span className="mono">LANGUAGES</span><strong>English / Tamil</strong></div></div></div></section>

        <section className="work-section section-pad" id="work"><div className="section-index mono">02 <span>/</span> SELECTED WORK</div><div className="section-heading-row"><div><p className="section-label">Three systems, three signals</p><h2>Proof of <em>building.</em></h2></div><p className="section-aside">Projects are presented as evidence: what the system does, what it is built with, and the workflow it makes possible.</p></div><div className="project-tabs" role="tablist" aria-label="Projects">{projects.map((project, i) => <button key={project.index} className={activeProject === i ? "active" : ""} onClick={() => setActiveProject(i)} role="tab" aria-selected={activeProject === i}><span className="mono">{project.index}</span><span className="tab-copy"><strong>{project.title.replace("\n", " ")}</strong><small>{project.type}</small></span><MoveUpRightIcon /></button>)}</div><article className="project-feature"><div className="project-image" style={{ backgroundImage: `url(${projects[activeProject].image})` }}><div className="image-caption mono">{projects[activeProject].type}</div><div className="play-orb"><Network size={18} /></div></div><div className="project-details"><div className="project-number mono">PROJECT {projects[activeProject].index}</div><h3>{projects[activeProject].title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3><p>{projects[activeProject].summary}</p><div className="stack-list">{projects[activeProject].stack.map((item) => <span key={item}>{item}</span>)}</div><div className="evidence-strip"><span className="mono">TECHNICAL PROOF</span><b>{projects[activeProject].proof}</b><small className="mono">{projects[activeProject].flow}</small></div><a className="case-study-link" href={projects[activeProject].href} target="_blank" rel="noreferrer">Open the build <ArrowUpRight size={16} /></a></div></article></section>

        <section className="capabilities-section section-pad" id="capabilities"><div className="section-index mono">03 <span>/</span> SKILLS</div><div className="capabilities-layout"><div className="capability-intro"><p className="section-label">The working stack</p><h2>From data<br />to <em>behavior.</em></h2><div className="capability-icon"><BrainCircuit size={42} strokeWidth={1.2} /></div></div><div className="capability-list">{capabilities.map(([num, title, desc]) => <div className="capability-row" key={num}><span className="capability-num mono">{num}</span><div><h3>{title}</h3><p>{desc}</p></div><ChevronDown size={17} /></div>)}</div></div></section>

        <section className="journey-section section-pad" id="journey"><div className="section-index mono">04 <span>/</span> JOURNEY</div><div className="journey-layout"><div><p className="section-label">Practice and foundation</p><h2>Grounded<br />in <em>practice.</em></h2><p className="journey-note">Two internships, one academic track, and a growing habit of turning datasets into working systems.</p></div><div className="journey-stack"><div className="experience-card"><div className="experience-meta mono"><span>SEP 2024 — OCT 2024</span><span>INTERNSHIP / 01</span></div><div className="experience-main"><div><h3>Data Scientist Intern</h3><p className="company">ADVENTURE Technology <span>·</span> Chennai</p></div><BrainCircuit size={34} strokeWidth={1.1} /></div><p className="experience-description">Developed a machine-learning model to predict heart disease from patient data. Used Python, Pandas, and Scikit-Learn for data preprocessing, model training, and evaluation.</p><div className="experience-tags"><span>Healthcare ML</span><span>Heart disease prediction</span><span>Python</span><span>Pandas</span><span>Scikit-Learn</span></div><a className="certificate-link mono" href="https://drive.google.com/file/d/1Kt92ORKXLG8p75zy0OoTTZg4PShi_JfG/view?usp=drive_link" target="_blank" rel="noreferrer">View internship certificate ↗</a></div><div className="experience-card"><div className="experience-meta mono"><span>MAR 2024 — APR 2024</span><span>INTERNSHIP / 02</span></div><div className="experience-main"><div><h3>Machine Learning Intern</h3><p className="company">VEI Technology</p></div><Network size={34} strokeWidth={1.1} /></div><p className="experience-description">Learned core machine-learning concepts and tools including Python and Scikit-Learn, with guided practice in data cleaning and model building.</p><div className="experience-tags"><span>Data cleaning</span><span>Model building</span><span>Python</span><span>Scikit-Learn</span></div></div><div className="education-card"><div className="education-icon"><GraduationCap size={26} /></div><div><p className="mono education-meta">2022 — 2026 / MAILAM ENGINEERING COLLEGE</p><h3>B.Tech in Artificial Intelligence<br />and Data Science</h3><p>CGPA <strong>8.2</strong> <span className="education-language">· English / Tamil</span></p></div></div></div></div></section>

        <section className="learning-section section-pad" id="learning"><div className="section-index mono">05 <span>/</span> LEARNING LOG</div><div className="learning-heading"><div><p className="section-label">Always adding signal</p><h2>Curiosity<br /><em>in public.</em></h2></div><p>Certifications, workshops, podcasts, and daily technology updates that extend the current foundation into new AI, analytics, and operations practices.</p></div><div className="learning-list">{learningNotes.map(({ label, title, desc, href }) => <div className="learning-row" key={label}><span className="mono">{label}</span><div><h3>{title}</h3><p>{desc}</p></div>{href ? <a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${title}`}><ArrowUpRight size={17} /></a> : <span className="learning-logged mono">LOGGED</span>}</div>)}</div></section>

        <section className="contact-section section-pad"><div className="contact-orbit" aria-hidden="true"><span /><span /><span /><span /></div><div className="section-index mono">06 <span>/</span> NEXT SIGNAL</div><div className="contact-content"><p className="section-label">A good system starts with a clear problem</p><h2>Let’s build<br /><em>what matters.</em></h2><a className="contact-link" href="mailto:vimalvignesh5405@gmail.com">v*****2gmail.com <ArrowUpRight size={20} /></a></div><div className="contact-footer"><span className="footer-brand"><img src={markImage} alt="" /> VIGNESH E / AI ENGINEER FRESHER</span><div className="social-links"><a href="https://linkedin.com/in/Vignesh5402" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/Vignesh8015" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="mailto:vimalvignesh5405@gmail.com" aria-label="Email"><Mail size={17} /></a></div><span className="mono">© 2026 / OPEN TO AI ROLES</span></div></section>
      </div>
    </main>
  );
}

function MoveUpRightIcon() {
  return <ArrowUpRight size={14} />;
}
