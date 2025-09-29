import React from "react";

export default function ProjectCard({ imgSrc, title, subtitle, href }) {
  const Card = (
    <article className="card">
      {imgSrc ? <img src={imgSrc} alt="" /> : null}
      <h3>{title}</h3>
      {subtitle ? <p>{subtitle}</p> : null}
    </article>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">{Card}</a>
  ) : Card;
}
