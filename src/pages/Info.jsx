import React from "react";

export default function Info() {
  return (
    <div className="container info">
      <h2>About</h2>
      <p className="muted">
        I design & ship systems for markets and learning. My focus: robust execution, clean APIs,
        and data-driven iteration.
      </p>

      <div className="cols">
        <div>
          <h3>Currently</h3>
          <ul>
            <li>Self-directed quantitative trading (U.S. equities).</li>
            <li>Building backtesting infra & prompt-bounded strategy runners.</li>
          </ul>
        </div>

        <div>
          <h3>Experience</h3>
          <ul>
            <li>Software Engineer Intern - Workday (Apr–Oct 2024).</li>
            <li>Executive Assistant - Family Business (2022–Present).</li>
            <li>Freelance Tutor - DataPi Learning (Apr–Sep 2023).</li>
          </ul>
        </div>

        <div>
          <h3>Education</h3>
          <ul>
            <li>UBC - BSc Combined Honours CS & Math (Expected Jun 2027).</li>
            <li>Southridge School - Valedictorian; Founder, The Elite Co.</li>
          </ul>
        </div>
      </div>

      <div className="cols">
        <div>
          <h3>Skills</h3>
          <ul>
            <li><strong>Languages:</strong> C++, Java, JavaScript, Python, Swift, PHP, SQL, MATLAB, HTML/CSS, React.</li>
            <li><strong>Tools:</strong> Git/GitHub, Oracle, PostgreSQL, AWS, Terminal, Photoshop, Figma</li>
          </ul>
        </div>

        <div>
          <h3>Projects</h3>
          <ul>
            <li>EigenSim - trading backtesting (PHP/Oracle/C++; ML planned).</li>
            <li>Tradex - stock trading web app (jQuery/PHP/REST).</li>
            <li>Employee Attendance & Salary Tracker (Java/JavaFX).</li>
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
