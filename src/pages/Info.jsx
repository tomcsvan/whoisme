import React from "react";

export default function Info() {
  return (
    <div className="container info">
      <h2>About</h2>
      <p className="muted">
        I design & ship interfaces for education and tools. I care about clarity, motion, and
        narrative. Currently exploring AI x learning.
      </p>

      <div className="cols">
        <div>
          <h3>Currently</h3>
          <ul>
            <li>Building AIden — AI study tools</li>
            <li>Tutoring Grade 6–7 math</li>
          </ul>
        </div>
        <div>
          <h3>Previously</h3>
          <ul>
            <li>Google — Design apprentice</li>
            <li>RBC — Product design intern</li>
          </ul>
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            <li><a href="mailto:tom@example.com">tom@example.com</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
