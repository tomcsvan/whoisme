import React, { useRef, useEffect } from "react";

import eigensimImg from "../assets/eigensim.png";
import tradexImg from "../assets/tradex.png";
import employeeImg from "../assets/workd.png";
import credenceImg from "../assets/credence.png";

export default function Work() {
    const reelRef = useRef(null);

    useEffect(() => {
        const reel = reelRef.current;
        if (!reel) return;

        // Initial Position: Skip the "Clone-Last" card to show "Real-1" (CredenceAI)
        reel.style.scrollBehavior = 'auto';
        reel.scrollLeft = reel.clientWidth; // Jump to Real-1

        // Restore smooth scrolling for user interactions
        requestAnimationFrame(() => {
            reel.style.scrollBehavior = 'smooth';
        });

        // Bidirectional Infinite Scroll Logic (Buffer Strategy)
        const handleScroll = () => {
            const cardWidth = reel.clientWidth;
            const maxScrollLeft = reel.scrollWidth - cardWidth;

            // Case A: Scrolled too far left (Hit Clone-Last)
            if (reel.scrollLeft <= 5) {
                reel.style.scrollBehavior = 'auto';
                reel.style.scrollSnapType = 'none';
                reel.scrollLeft = maxScrollLeft - cardWidth; // Teleport to Real-End

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        reel.style.scrollBehavior = 'smooth';
                        reel.style.scrollSnapType = 'x mandatory';
                    });
                });
            }
            // Case B: Scrolled too far right (Hit Clone-First)
            else if (reel.scrollLeft >= maxScrollLeft - 5) {
                reel.style.scrollBehavior = 'auto';
                reel.style.scrollSnapType = 'none';
                reel.scrollLeft = cardWidth; // Teleport to Real-1

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        reel.style.scrollBehavior = 'smooth';
                        reel.style.scrollSnapType = 'x mandatory';
                    });
                });
            }
        };

        reel.addEventListener('scroll', handleScroll, { passive: true });
        return () => reel.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container">
            {/* Name and Bio */}
            <section className="hero">
                <h1 className="display" style={{ fontFamily: 'var(--ff-sans)' }}>
                    Software Engineer <br />
                    & <em>Mathematics Undergraduate</em>
                </h1>
                <p className="subtitle" style={{ fontFamily: 'var(--ff-mono)' }}>Vancouver, BC</p>
                <p className="muted" style={{ maxWidth: '600px', marginTop: '16px' }}>
                    I bridge complex mathematics with pragmatic software engineering. My focus is on algorithm design, machine learning integration, and full-stack execution.
                </p>
            </section>

            {/* Project Reel */}
            <div className="macbook-device">
                <div className="macbook-screen">
                    <div className="project-reel" ref={reelRef} style={{ scrollBehavior: 'smooth' }}>

                        {/* CLONED LAST CARD */}
                        <article className="card card-logichr" aria-hidden="true" data-clone="last">
                            <div className="card__media" style={{ backgroundImage: `url(${employeeImg})` }} />
                            <h3>LogicHR (Employee Tracker)</h3>
                            <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>Java (Swing/AWT) · MySQL · JDBC</p>
                            <ul>
                                <li><strong>Workforce Logistics & Payroll Automation</strong> A desktop ERP module designed to streamline attendance tracking and dynamic salary computation.</li>
                                <li>Automates the "Time-to-Pay" pipeline using SQL triggers for attendance verification and real-time salary calculation.</li>
                            </ul>
                        </article>

                        {/* REAL CARDS */}
                        <article className="card card-credence">
                            <div className="card__media" style={{ backgroundImage: `url(${credenceImg})` }} />
                            <div className="card__content">
                                <h3>CredenceAI</h3>
                                <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>FastAPI (Python) · PostgreSQL · React · Docker</p>
                                <ul>
                                    <li><strong>Automated NLI Verification Pipeline</strong> A misinformation combat system that aggregates web evidence to verify short claims.</li>
                                    <li>Uses a "Weighted Stance Aggregation" algorithm (Support vs. Refute) powered by HuggingFace Transformers.</li>
                                </ul>
                            </div>
                        </article>

                        <article className="card card-eigensim">
                            <div className="card__media" style={{ backgroundImage: `url(${eigensimImg})` }} />
                            <div className="card__content">
                                <h3>EigenSim</h3>
                                <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>C++ · Oracle SQL · PHP · Polygon.io API</p>
                                <ul>
                                    <li><strong>High-Frequency Backtesting Engine</strong> A modular platform for validating algorithmic trading strategies against historical market data.</li>
                                    <li>Orchestrates high-performance C++ binaries for simulation execution with an Oracle SQL data warehouse for trade storage.</li>
                                </ul>
                            </div>
                        </article>

                        <article className="card card-tradex">
                            <div className="card__media" style={{ backgroundImage: `url(${tradexImg})` }} />
                            <div className="card__content">
                                <h3>Tradex</h3>
                                <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>Native PHP · MySQL · REST APIs</p>
                                <ul>
                                    <li><strong>Full-Stack Portfolio Management System</strong> A secure web platform managing the complete lifecycle of asset allocation and trade execution.</li>
                                    <li>Built on a raw LAMP stack architecture to demonstrate fundamental mastery of secure session handling and API integration.</li>
                                </ul>
                            </div>
                        </article>

                        <article className="card card-logichr">
                            <div className="card__media" style={{ backgroundImage: `url(${employeeImg})` }} />
                            <div className="card__content">
                                <h3>LogicHR (Employee Tracker)</h3>
                                <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>Java (Swing/AWT) · MySQL · JDBC</p>
                                <ul>
                                    <li><strong>Workforce Logistics & Payroll Automation</strong> A desktop ERP module designed to streamline attendance tracking and dynamic salary computation.</li>
                                    <li>Automates the "Time-to-Pay" pipeline using SQL triggers for attendance verification and real-time salary calculation.</li>
                                </ul>
                            </div>
                        </article>

                        {/* CLONED FIRST CARD */}
                        <article className="card card-credence" aria-hidden="true" data-clone="first">
                            <div className="card__media" style={{ backgroundImage: `url(${credenceImg})` }} />
                            <div className="card__content">
                                <h3>CredenceAI</h3>
                                <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>FastAPI (Python) · PostgreSQL · React · Docker</p>
                                <ul>
                                    <li><strong>Automated NLI Verification Pipeline</strong> A misinformation combat system that aggregates web evidence to verify short claims.</li>
                                    <li>Uses a "Weighted Stance Aggregation" algorithm (Support vs. Refute) powered by HuggingFace Transformers.</li>
                                </ul>
                            </div>
                        </article>

                    </div>
                </div>
            </div>

            {/* Experience Timeline - UPDATED TO MATCH RESUME */}
            <section className="experience-log">
                <h2 className="experience-log__header">&gt; EXECUTION_HISTORY</h2>
                <div className="experience-log__timeline">

                    {/* Experience 1: DataPi (Matches Resume) */}
                    <article className="timeline-item">
                        <div className="timeline-item__date">[Apr 2023 – Present]</div>
                        <div className="timeline-item__content">
                            <h3 className="timeline-item__role">Freelance Tutor - DataPi Learning Center Inc.</h3>
                            <p className="timeline-item__company">Vancouver, BC</p>
                            <ul>
                                <li><strong>Specialized Instruction:</strong> Tutoring students in grades 10-12 in Science, Math (Calculus/Vectors), and AP curricula.</li>
                                <li><strong>AI Integration:</strong> Contributed to an internal AI app by building a Swift-based speech dataset and integrating CoreML models for voice recognition.</li>
                            </ul>
                        </div>
                    </article>

                    {/* Experience 2: UBC (Added to fill timeline with resume facts) */}
                    <article className="timeline-item">
                        <div className="timeline-item__date">[Sep 2023 – Present]</div>
                        <div className="timeline-item__content">
                            <h3 className="timeline-item__role">Mathematics & CS Undergraduate - UBC</h3>
                            <p className="timeline-item__company">University of British Columbia</p>
                            <ul>
                                <li><strong>Degree:</strong> Bachelor of Combined Honours in Mathematics and Computer Science (Expected June 2027).</li>
                                <li><strong>Technical Focus:</strong> Algorithm Design, Machine Learning, Software Construction, and Relational Databases.</li>
                            </ul>
                        </div>
                    </article>

                </div>
            </section>

            {/* Contact Terminal */}
            <section className="contact-terminal">
                <h3>Contact & Links</h3>
                <p><span className="terminal-prompt">&gt;</span> Email: <a href="mailto:tomcsvan@student.ubc.ca">tomcsvan@student.ubc.ca</a></p>
                <p><span className="terminal-prompt">&gt;</span> Link: <a href="https://github.com/tomcsvan" target="_blank" rel="noreferrer">github.com/tomcsvan</a></p>
                <p><span className="terminal-prompt">&gt;</span> Link: <a href="https://www.linkedin.com/in" target="_blank" rel="noreferrer">linkedin.com/tomcsvan</a></p>
            </section>

        </div>
    );
}