'use client'
import Head from 'next/head';
import { useFadeInOnScroll } from './hooks/useFadeInOnScroll';
import './styles/portfolio.css';
import Image from 'next/image';

const projectsData = [
  {
    title: 'RioPlex Business Exchange',
    type: 'Client Project',
    description: 'Developed a business listing app in Next.js with investor access and membership logic.',
    tech: ['Next.js', 'Supabase', 'Auth', 'Node'],
    image: '/project-images/rpbx-homepage.png',
    link: 'https://rioplexbusinessexchange.com/',
  },
  {
    title: 'RGVision Media',
    type: 'Client Project',
    description: 'Redesigned the marketing agency&apos;s site to showcase their creative services, client portfolio, and media solutions with a modern, conversion-focused layout.',
    tech: ['WordPress', 'HTML/CSS', 'JS', 'Elementor'],
    image: '/project-images/rgvm-homepage.png',
    link: 'https://rgvisionmedia.com/',
  },
  {
    title: 'BFI Analytics Dashboard',
    type: 'Non-Profit Project',
    description: 'Built a dashboard using Next.js + Supabase to visualize city pothole data.',
    tech: ['Next.js', 'Supabase', 'LancChain', 'OpenAI', 'RAG'],
    image: '/project-images/bfi-dashboard.png',
    link: 'https://dashboard-jsamp1vyj-bfi.vercel.app/Forecast',
  },
  {
    title: 'Walter Reyna',
    type: 'Client Project',
    description: 'Built a sleek informational site for a certified financial planner focused on retirement and wealth management. Highlights Reyna&apos;s credentials, services, and client-first philosophy with responsive, professional design.',
    tech: ['Next.js', 'Supabase', 'LangChain', 'OpenAI'],
    image: '/project-images/reyna-homepage.png',
    link: 'https://walterreyna.com/',
  },
];

export default function Home() {
  const hero = useFadeInOnScroll();
  const skills = useFadeInOnScroll();
  const education = useFadeInOnScroll();
  const projects = useFadeInOnScroll();
  const contact = useFadeInOnScroll();

  return (
    <>
      <Head>
        <title>Anthony Ramirez - Full Stack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div>
        {/* Navigation */}
        <nav className="nav">
          <a href="#home" className="nav-item">Home</a>
          <a href="#skills" className="nav-item">Skills</a>
          <a href="#education" className="nav-item">Education</a>
          <a href="#projects" className="nav-item">Work</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero" ref={hero.ref}>
          <div className={`hero-content fade-in ${hero.isVisible ? 'visible' : ''}`}>
            <h1>Hi, I&apos;m <span className="highlight">Anthony</span></h1>
            <p className="hero-subtitle">Full Stack Developer</p>
            <p className="hero-description">
              I build modern web applications and deliver digital solutions for clients. 
              Currently working as a developer creating custom websites and applications 
              while exploring new technologies in my free time.
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work <span>→</span>
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section" ref={skills.ref}>
          <h2 className={`section-title fade-in ${skills.isVisible ? 'visible' : ''}`}>What I <span className="accent">Work With</span></h2>
          <div className="skills-grid">
            <div className={`skill-card fade-in ${skills.isVisible ? 'visible' : ''}`}>
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>
            <div className={`skill-card fade-in ${skills.isVisible ? 'visible' : ''}`}>
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            <div className={`skill-card fade-in ${skills.isVisible ? 'visible' : ''}`}>
              <h3>Tools & Deployment</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">VS Code</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section" ref={education.ref}>
          <h2 className={`section-title fade-in ${education.isVisible ? 'visible' : ''}`}>Education</h2>
          <div className={`education-card fade-in ${education.isVisible ? 'visible' : ''}`}>
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="university">University of Texas Rio Grande Valley</p>
            <p className="year">2020 - 2025</p>
            <p className="details">
              Focused on software engineering principles, data structures, algorithms, and web development. 
              Completed coursework in database systems, software design patterns, and computer networks.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section" ref={projects.ref}>
          <div className={`projects-header fade-in ${projects.isVisible ? 'visible' : ''}`}>
            <h2 className="section-title">My <span className="accent">Work</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              A collection of client projects and personal work
            </p>
          </div>
          <div className="projects-grid">
            {projectsData.map((proj, i) => (
              <div key={i} className={`project-card fade-in ${projects.isVisible ? 'visible' : ''}`} data-category={proj.type.includes('Client') ? 'client' : 'personal'}>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={i}
                      className={`project-card fade-in ${projects.isVisible ? 'visible' : ''}`}
                    >
                <div className="project-image">
                  <Image 
                    src={proj.image} 
                    alt={proj.title}
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  />
                </div>
                <div className="project-content">
                  <div className="project-type">{proj.type}</div>
                  <h3>{proj.title}</h3>
                  <p className="project-description">{proj.description}</p>
                  <div className="project-tech">
                    {proj.tech.map((tag, j) => (
                      <span key={j} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" ref={contact.ref}>
          <div className={`contact fade-in ${contact.isVisible ? 'visible' : ''}`}>
            <h2>Let&apos;s Work Together</h2>
            <p className="contact-description">
              I&apos;m always interested in new opportunities and interesting projects. 
              Let&apos;s connect and see what we can build together.
            </p>
            <div className="contact-links">
              <a href="mailto:anthonyj0127@gmail.com" className="contact-link">
                <span>📧</span> Email Me
              </a>
              <a href="https://www.linkedin.com/in/anthony-ramirez01/" className="contact-link" target="_blank">
                <span>💼</span> LinkedIn
              </a>
              <a href="https://github.com/ajram01" className="contact-link" target="_blank">
                <span>🐙</span> GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

