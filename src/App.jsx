import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">
        <div className="logo">HS.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* =========================
          HERO SECTION
      ========================= */}

      <section id="home" className="hero">

        {/* LEFT CONTENT */}

        <div className="hero-content">

          <p className="hero-small">
            HELLO, I'M
          </p>

          <h1>
            Heenyan <span>Shree</span>
          </h1>

          <h2>
            Data Analyst <span>|</span> Cybersecurity <span>|</span> Networking
          </h2>

          <p className="hero-description">
            Computer Science professional passionate about data analytics,
            cybersecurity, networking, and building practical technology
            solutions using modern tools and technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-btn"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              Let's Connect
            </a>

          </div>

         <div className="social-links">

  <a
    href="https://github.com/Heenyanshree"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/heenyan-shree/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://tryhackme.com/p/dynoheenu"
    target="_blank"
    rel="noopener noreferrer"
  >
    TryHackMe
  </a>

</div>

        </div>


        {/* RIGHT AI PROFILE IMAGE */}

        <div className="hero-photo">

          <img
            src="/hero-ai.png"
            alt="Heenyan Shree - Data Analyst, Cybersecurity and Networking"
          />

        </div>

      </section>


      {/* =========================
          ABOUT SECTION
      ========================= */}

      <section id="about" className="section">

        <p className="section-label">
          ABOUT ME
        </p>

        <h2 className="section-title">
          Turning Technology Into <span>Solutions</span>
        </h2>

        <div className="about-content">

          <div className="about-content">

  <p>
    I am a Computer Science graduate with hands-on experience across
    Data Analytics, Networking, Web Development, and Cybersecurity.
  </p>

  <p>
    I started my professional journey with a Web Development internship
    at CodeSoft, where I gained practical experience working with
    web technologies and building projects.
  </p>

  <p>
    I then worked as a Business Development Associate at Averixis
    Solutions, where I developed experience in client communication,
    lead generation, market research, and business development.
  </p>

  <p>
    I later moved into Data Analytics, working with SQL, Python,
    Excel, Power BI, and MySQL to clean, analyze, and visualize
    data and build practical analytics projects and dashboards.
  </p>

  <p>
    Alongside analytics, I have developed a strong interest in
    Networking and Cybersecurity, with knowledge of networking
    concepts, Linux, security monitoring, SIEM, threat detection,
    and security tools. I also hold CCNA and continue to build
    practical projects to strengthen my technical skills.
  </p>

  <p>
    My goal is to combine data, networking, cybersecurity, and
    technology to solve real-world problems and continuously grow
    as a technology professional.
  </p>

</div>

        </div>

      </section>

      {/* =========================
    CYBERSECURITY TERMINAL
========================= */}

<section className="terminal-section">

  <p className="section-label">SYSTEM ACCESS</p>

  <h2 className="section-title">
    Inside My <span>Tech Stack</span>
  </h2>

  <div className="terminal-window">

    <div className="terminal-header">
      <div className="terminal-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      

    </div>

  </div>

</section>


      {/* =========================
          SKILLS SECTION
      ========================= */}

      <section id="skills" className="section skills-section">

        <p className="section-label">
          MY EXPERTISE
        </p>

        <h2 className="section-title">
          Skills & <span>Technologies</span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Data Analytics</h3>
            <p>
              Data Cleaning, EDA, Data Visualization, Dashboard Development,
              KPI Reporting, Business Insights
            </p>
          </div>


          <div className="skill-card">
            <h3>Programming</h3>
            <p>
              Python, Pandas, NumPy, Matplotlib, JavaScript, Java, C++
            </p>
          </div>


          <div className="skill-card">
            <h3>Business Intelligence</h3>
            <p>
              Microsoft Excel, Power BI, Power Query, DAX, Data Modeling,
              Pivot Tables
            </p>
          </div>


          <div className="skill-card">
            <h3>Cybersecurity</h3>
            <p>
              Security Monitoring, Log Analysis, Threat Detection,
              Vulnerability Assessment, Incident Response, IOC Analysis
            </p>
          </div>


          <div className="skill-card">
            <h3>Networking</h3>
            <p>
              TCP/IP, OSI Model, IP Addressing, Subnetting, DNS, DHCP,
              HTTP/HTTPS, SSH, VPN, NAT, VLAN, Routing, Switching
            </p>
          </div>


          <div className="skill-card">
            <h3>Security Tools</h3>
            <p>
              Splunk, Microsoft Sentinel, Wireshark, Nmap, Burp Suite,
              Sysmon, Zeek
            </p>
          </div>


          <div className="skill-card">
            <h3>Linux & Windows</h3>
            <p>
              Linux Administration, File Permissions, Users & Groups,
              Bash Scripting, System Logs, Windows Event Logs,
              Active Directory
            </p>
          </div>


          <div className="skill-card">
            <h3>Web & Databases</h3>
            <p>
              React.js, Node.js, Express.js, REST APIs, HTML, CSS,
              Tailwind CSS, MongoDB, MySQL
            </p>
          </div>


          <div className="skill-card">
            <h3>Digital Marketing</h3>
            <p>
              Google Ads learning, campaign fundamentals and digital
              advertising basics.
            </p>
          </div>

        </div>

      </section>


      {/* =========================
          EXPERIENCE SECTION
      ========================= */}

      <section id="experience" className="section">

        <p className="section-label">
          MY JOURNEY
        </p>

        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>


        <div className="experience-container">

          <div className="experience-card">

            <div className="experience-top">

              <div>
                <h3>Data Analyst</h3>
                <p className="company">
                  Althexus
                </p>
              </div>

              <span>
                Jul 2026 – Present
              </span>

            </div>

            <ul>

              <li>
                Analyzed and organized business and operational data to
                identify trends.
              </li>

              <li>
                Performed data cleaning, analysis and reporting using
                Python and relevant data analysis tools.
              </li>

              <li>
                Prepared reports and insights to support business and
                operational requirements.
              </li>

            </ul>

          </div>


          <div className="experience-card">

            <div className="experience-top">

              <div>
                <h3>Business Development Associate</h3>
                <p className="company">
                  Averixis Solutions
                </p>
              </div>

              <span>
                Jan 2026 – Jul 2026
              </span>

            </div>

            <ul>

              <li>
                Generated leads and conducted market research.
              </li>

              <li>
                Engaged with prospective clients and presented technology
                and digital service offerings.
              </li>

              <li>
                Collaborated with sales and operations teams to support
                client acquisition and business growth.
              </li>

              <li>
                Maintained business development records and prepared
                reports.
              </li>

            </ul>

          </div>

        </div>

      </section>


      {/* =========================
    PROJECTS SECTION
========================= */}

<section id="projects" className="section projects-section">

  <p className="section-label">MY WORK</p>

  <h2 className="section-title">
    Featured <span>Projects</span>
  </h2>

  <p className="projects-intro">
    A collection of practical projects across Data Analytics,
    Cybersecurity, AI and Business Intelligence.
  </p>

  <div className="projects-grid">

    {/* PROJECT 01 */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">01</span>
        <span className="project-icon">🛡️</span>
      </div>

      <h3>AI SOC Analyst Dashboard</h3>

      <p>
        AI-powered security analytics dashboard for monitoring logs,
        detecting suspicious activity, risk scoring and generating
        security insights.
      </p>

      <div className="project-tech">
        <span>Python</span>
        <span>Streamlit</span>
        <span>Cybersecurity</span>
      </div>

      <a href="#" className="project-link">
        View Project <span>↗</span>
      </a>
    </div>


    {/* PROJECT 02 */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">02</span>
        <span className="project-icon">🤖</span>
      </div>

      <h3>AI Threat Intelligence Platform</h3>

      <p>
        Platform for analyzing cyber threat data, identifying Indicators
        of Compromise, categorizing threats and calculating risk levels.
      </p>

      <div className="project-tech">
        <span>Python</span>
        <span>Streamlit</span>
        <span>Threat Intelligence</span>
      </div>

      <a href="#" className="project-link">
        View Project <span>↗</span>
      </a>
    </div>


    {/* PROJECT 03 */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">03</span>
        <span className="project-icon">🔐</span>
      </div>

      <h3>Cybersecurity Toolkit GUI</h3>

      <p>
        Python-based security toolkit containing port scanning,
        vulnerability assessment and phishing detection modules.
      </p>

      <div className="project-tech">
        <span>Python</span>
        <span>Tkinter</span>
        <span>Security</span>
      </div>

      <a href="#" className="project-link">
        View Project <span>↗</span>
      </a>
    </div>


    {/* PROJECT 04 */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">04</span>
        <span className="project-icon">📊</span>
      </div>

      <h3>E-Commerce Analytics Dashboard</h3>

      <p>
        End-to-end analytics dashboard for analyzing sales, revenue,
        profit, customer behavior and product performance.
      </p>

      <div className="project-tech">
        <span>Power BI</span>
        <span>SQL</span>
        <span>Excel</span>
      </div>

      <a
        href="https://github.com/Heenyanshree/End-to-End-E-Commerce-Analytics-Dashboard"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        GitHub <span>↗</span>
      </a>
    </div>


    {/* PROJECT 05 */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">05</span>
        <span className="project-icon">🚚</span>
      </div>

      <h3>Supply Chain Analytics Dashboard</h3>

      <p>
        Business intelligence dashboard analyzing inventory,
        supplier performance, delivery metrics and operational KPIs.
      </p>

      <div className="project-tech">
        <span>Power BI</span>
        <span>Analytics</span>
        <span>KPI</span>
      </div>

      <a
        href="https://github.com/Heenyanshree/Supply-Chain-Analytics"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        GitHub <span>↗</span>
      </a>
    </div>


    {/* PROJECT 06 */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">06</span>
        <span className="project-icon">👥</span>
      </div>

      <h3>HR Analytics Dashboard</h3>

      <p>
        Interactive workforce analytics dashboard for understanding
        employee attrition, workforce trends and HR performance.
      </p>

      <div className="project-tech">
        <span>Tableau</span>
        <span>Excel</span>
        <span>Analytics</span>
      </div>

      <a
        href="https://github.com/Heenyanshree/HR-Analytics-Dashboard"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        GitHub <span>↗</span>
      </a>
    </div>


    {/* PROJECT 07 */}
    <div className="project-card">
      <div className="project-top">
        <span className="project-number">07</span>
        <span className="project-icon">💳</span>
      </div>

      <h3>Banking Loan Risk Analysis</h3>

      <p>
        Data analytics project analyzing loan approval trends,
        customer risk and financial performance using business KPIs.
      </p>

      <div className="project-tech">
        <span>SQL</span>
        <span>Power BI</span>
        <span>Risk Analytics</span>
      </div>

      <a href="#" className="project-link">
        View Project <span>↗</span>
      </a>
    </div>

  </div>

</section>


      {/* =========================
          CERTIFICATIONS
      ========================= */}

      <section id="certifications" className="section">

        <p className="section-label">
          LEARNING
        </p>

        <h2 className="section-title">
          Certifications & <span>Education</span>
        </h2>


        <div className="certification-grid">


          <div className="certification-card">

            <h3>
              B.Tech in Computer Science & Engineering
            </h3>

            <p>
              Institute of Engineering and Technology, Lucknow
            </p>

            <span>
              2022 – 2026
            </span>

          </div>


          <div className="certification-card">

            <h3>
              Google AI Essentials
            </h3>

            <p>
              Google
            </p>

          </div>


          <div className="certification-card">

            <h3>
              Graph Theory Programming Camp
            </h3>

            <p>
              Algo University
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================= */}

      <section id="contact" className="section contact-section">

        <p className="section-label">
          GET IN TOUCH
        </p>

        <h2 className="section-title">
          Let's Work <span>Together</span>
        </h2>

        <p className="contact-text">
          I'm open to opportunities in Data Analytics, Cybersecurity,
          Networking and technology-driven roles.
        </p>


        <div className="contact-details">

          <a href="mailto:heenyanshree@gmail.com">
            heenyanshree@gmail.com
          </a>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <p>
          © 2026 Heenyan Shree. All Rights Reserved.
        </p>

        <div>

          <a
            href="https://github.com/Heenyanshree"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <span> &nbsp; | &nbsp; </span>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;