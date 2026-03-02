import React from "react";

export default function Info() {
  return (
    <div className="container info">
      <h2>About</h2>
      <p className="muted">
        I build robust data systems and scalable applications. I care about object-oriented design, 
        database efficiency, and clean architecture.
      </p>

      <div className="cols">
        <div>
          <h3>Currently</h3>
          <ul>
            <li>
                Building <strong>CredenceAI</strong> (FastAPI & React).
                <br/>
                <span className="muted" style={{ fontSize: '0.9em' }}>
                    Automated NLI verification pipeline.
                </span>
            </li>
            <li>Completing Combined Honours in Math & CS at UBC.</li>
          </ul>
        </div>

        <div>
          <h3>Experience</h3>
          <ul>
            <li>
              <strong>Freelance Tutor - DataPi Learning</strong> (Apr 2023–Present).
              <br />
              <span className="muted" style={{ fontSize: '0.9em' }}>
                integrated CoreML models & built Swift speech datasets.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3>Education</h3>
          <ul>
            <li>
              <strong>UBC - BSc Combined Honours Math & CS</strong> (Expected June 2027).
            </li>
            <li className="muted" style={{ fontSize: '0.9em', lineHeight: '1.4' }}>
              Relevant Coursework: Machine Learning, Software Construction, Algorithm Design, Relational Databases, Operating Systems.
            </li>
          </ul>
        </div>
      </div>

      <div className="cols">
        <div>
          <h3>Skills</h3>
          <ul>
            <li><strong>Languages:</strong> C++, Java, JavaScript, Python, Swift, PHP, SQL, MATLAB, HTML/CSS, React.</li>
            <li><strong>Tools:</strong> Git, GitHub, Oracle, Terminal, Photoshop, Figma.</li>
          </ul>
        </div>

        <div>
          <h3>Projects</h3>
          <ul>
            <li>
              <strong>CredenceAI</strong> - Misinformation combat system.
              <span className="muted"> (FastAPI/PostgreSQL/React).</span>
            </li>
            <li>
              <strong>EigenSim</strong> - Algorithmic trading platform.
              <span className="muted"> (PHP/Oracle/C++).</span>
            </li>
            <li>
              <strong>Tradex</strong> - Stock trading web app.
              <span className="muted"> (jQuery/PHP/REST).</span>
            </li>
            <li>
              <strong>LogicHR</strong> - Employee Attendance & Salary Tracker.
              <span className="muted"> (Java/JavaFX).</span>
            </li>
          </ul>
        </div>

        <div>
          <h3>Links</h3>
          <ul>
            <li><a href="mailto:tomcsvan@student.ubc.ca">tomcsvan@student.ubc.ca</a></li>
            <li><a href="https://github.com/tomcsvan" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé (PDF)</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}