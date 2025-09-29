import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <section className="hero container">
        <h1>I craft products, interactions & stories.</h1>
        <p>Currently designing <span className="badge">Your Role</span>. Formerly at … Case studies below are short and focused on impact.</p>
      </section>

      <section className="container grid" aria-label="Selected work">
        <ProjectCard
          imgSrc="/assets/images/background.jpeg"
          title="Project One — Impact headline"
          subtitle="Outcome · Role · Year"
          href="#"
        />
        <ProjectCard
          imgSrc="/assets/images/background.jpeg"
          title="Project Two — Outcome metric"
          subtitle="Outcome · Role · Year"
          href="#"
        />
      </section>
    </>
  );
}
