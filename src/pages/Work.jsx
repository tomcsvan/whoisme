import React from "react";
import Window from "../components/Window";
// If you want an image background inside the hero line, you can import one:
// import heroImg from "../assets/hero.jpg";

export default function Work() {
  return (
    <div className="container">
      <section className="hero">
        <Window>
          <h1 className="display">
            I craft products, <br />
            interactions & <em>stories.</em>
          </h1>
          <p className="subtitle">
            Designer & builder based in Vancouver/Toronto. <br />
            Formerly at <span className="muted">Google</span> and <span className="muted">RBC</span>.
          </p>
        </Window>
        <div className="chevron" aria-hidden>⌄</div>
      </section>

      {/* Projects grid */}
      <section className="projects">
        <article className="card">
          <div className="card__media" />
          <h3>Project One — Outcome headline</h3>
          <p className="muted">Outcome · Role · 2025</p>
        </article>
        <article className="card">
          <div className="card__media" />
          <h3>Project Two — Metric highlight</h3>
          <p className="muted">Outcome · Role · 2025</p>
        </article>
        <article className="card">
          <div className="card__media" />
          <h3>Project Three — Narrative</h3>
          <p className="muted">Outcome · Role · 2024</p>
        </article>
      </section>
    </div>
  );
}
