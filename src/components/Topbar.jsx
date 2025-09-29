// src/components/Topbar.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SegmentedControl from "./ui/SegmentedControl";

export default function Topbar() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const value = pathname.startsWith("/info") ? "Info" : "Work";

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        {/* LEFT — name (top) • logo placeholder (middle) • role (bottom) */}
        <div className="nav-left">
            <div className="nav-left__logo" aria-hidden /> {/* replace with <img/> later */}
            <div className="nav-left__name">Tom Le</div>
            <div className="nav-left__role">Entrepreneur</div>
        </div>

        {/* CENTER — segmented toggle */}
        <SegmentedControl
          options={["Work", "Info"]}
          value={value}
          onChange={(v) => nav(v === "Work" ? "/work" : "/info")}
        />

        {/* RIGHT — external links */}
        <nav className="links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
        </nav>
      </div>
    </header>
  );
}
