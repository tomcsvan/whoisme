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
        // We set this immediately on mount
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

                // Teleport to Real-End (second to last card)
                reel.scrollLeft = maxScrollLeft - cardWidth;

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

                // Teleport to Real-1 (second card)
                reel.scrollLeft = cardWidth;

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        reel.style.scrollBehavior = 'smooth';
                        reel.style.scrollSnapType = 'x mandatory';
                    });
                });
            }
        };

        // Passive event listener for scroll events
        reel.addEventListener('scroll', handleScroll, { passive: true });
        return () => reel.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="container">
            {/* Name and Bio - Above MacBook */}
            <section className="hero">
                <h1 className="display" style={{ fontFamily: 'var(--ff-sans)' }}>
                    Quantitative trader <br />
                    & <em>software engineer.</em>
                </h1>
                <p className="subtitle" style={{ fontFamily: 'var(--ff-mono)' }}>Vancouver, BC · Toronto, ON</p>
                <p className="muted" style={{ maxWidth: '600px', marginTop: '16px' }}>
                    I build systematic strategies and pragmatic software. I care about clarity,
                    latency, and measurable impact.
                </p>
            </section>

            <div className="macbook-device">
                <div className="macbook-screen">
                    <div className="project-reel" ref={reelRef} style={{ scrollBehavior: 'smooth' }}>

                        {/* 
                          * CLONED LAST CARD (For Bidirectional Scroll: Left Buffer) 
                          */}
                        <article className="card card-logichr" aria-hidden="true" data-clone="last">
                            <div
                                className="card__media"
                                style={{ backgroundImage: `url(${employeeImg})` }}
                            />
                            <h3>LogicHR (Employee Tracker)</h3>
                            <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>Java (Swing/AWT) · MySQL · JDBC</p>
                            <ul>
                                <li><strong>Workforce Logistics & Payroll Automation</strong> A desktop ERP module designed to streamline attendance tracking and dynamic salary computation.</li>
                                <li>Automates the "Time-to-Pay" pipeline using SQL triggers for attendance verification and real-time salary calculation based on role-specific hourly logic.</li>
                            </ul>
                        </article>

                        {/* 
                          * REAL CARDS 
                          */}

                        {/* Project 1: CredenceAI */}
                        <article className="card card-credence">
                            <div
                                className="card__media"
                                style={{ backgroundImage: `url(${credenceImg})` }}
                            />
                            <div className="card__content">
                                <h3>CredenceAI</h3>
                                <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>FastAPI (Python) · PostgreSQL · React · Docker</p>
                                <ul>
                                    <li><strong>Automated NLI Verification Pipeline</strong> A misinformation combat system that aggregates web evidence to verify short claims.</li>
                                    <li>Uses a "Weighted Stance Aggregation" algorithm (Support vs. Refute) powered by HuggingFace Transformers and Natural Language Inference (NLI).</li>
                                </ul>
                            </div>
                        </article>

                        {/* Project 2: EigenSim */}
                        <article className="card card-eigensim">
                            <div
                                className="card__media"
                                style={{ backgroundImage: `url(${eigensimImg})` }}
                            />
                            <div className="card__content">
                                <h3>EigenSim</h3>
                                <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>C++ · Oracle SQL · PHP · Polygon.io API</p>
                                <ul>
                                    <li><strong>High-Frequency Backtesting Engine</strong> A modular platform for validating algorithmic trading strategies against historical market data.</li>
                                    <li>Orchestrates high-performance C++ binaries for simulation execution (O(n) optimization) with an Oracle SQL data warehouse for trade storage.</li>
                                </ul>
                            </div>
                        </article>

                        {/* Project 3: Tradex */}
                        <article className="card card-tradex">
                            <div
                                className="card__media"
                                style={{ backgroundImage: `url(${tradexImg})` }}
                            />
                            <div className="card__content">
                                <h3>Tradex</h3>
                                <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>Native PHP · MySQL · Alpha Vantage API · Highcharts.js</p>
                                <ul>
                                    <li><strong>Full-Stack Portfolio Management System</strong> A secure web platform managing the complete lifecycle of asset allocation and trade execution.</li>
                                    <li>Built on a raw LAMP stack architecture to demonstrate fundamental mastery of secure session handling, hashing, and real-time API integration without reliance on frameworks.</li>
                                </ul>
                            </div>
                        </article>

                        {/* Project 4: LogicHR */}
                        <article className="card card-logichr">
                            <div
                                className="card__media"
                                style={{ backgroundImage: `url(${employeeImg})` }}
                            />
                            <div className="card__content">
                                <h3>LogicHR (Employee Tracker)</h3>
                                <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>Java (Swing/AWT) · MySQL · JDBC</p>
                                <ul>
                                    <li><strong>Workforce Logistics & Payroll Automation</strong> A desktop ERP module designed to streamline attendance tracking and dynamic salary computation.</li>
                                    <li>Automates the "Time-to-Pay" pipeline using SQL triggers for attendance verification and real-time salary calculation based on role-specific hourly logic.</li>
                                </ul>
                            </div>
                        </article>

                        {/* 
                          * CLONED FIRST CARD (For Bidirectional Scroll: Right Buffer) 
                          */}
                        <article className="card card-credence" aria-hidden="true" data-clone="first">
                            <div
                                className="card__media"
                                style={{ backgroundImage: `url(${credenceImg})` }}
                            />
                            <div className="card__content">
                                <h3>CredenceAI</h3>
                                <p className="muted" style={{ fontFamily: 'var(--ff-mono)' }}>FastAPI (Python) · PostgreSQL · React · Docker</p>
                                <ul>
                                    <li><strong>Automated NLI Verification Pipeline</strong> A misinformation combat system that aggregates web evidence to verify short claims.</li>
                                    <li>Uses a "Weighted Stance Aggregation" algorithm (Support vs. Refute) powered by HuggingFace Transformers and Natural Language Inference (NLI).</li>
                                </ul>
                            </div>
                        </article>

                    </div>
                </div>
            </div>

            {/* Experience Timeline - Below MacBook */}
            <section className="experience-log">
                <h2 className="experience-log__header">&gt; EXECUTION_HISTORY</h2>
                <div className="experience-log__timeline">

                    {/* Experience 1 */}
                    <article className="timeline-item">
                        <div className="timeline-item__date">[2022-Present]</div>
                        <div className="timeline-item__content">
                            <h3 className="timeline-item__role">Quantitative Trader - Self-Directed</h3>
                            <ul>
                                <li>Intraday strategies on U.S. equities using order-book microstructure & volatility clustering.</li>
                                <li>Passive liquidity-provision model capturing spread/mean-reversion alpha with low directional exposure.</li>
                                <li>Automated execution with risk gates and monitoring.</li>
                            </ul>
                        </div>
                    </article>

                    {/* Experience 2 */}
                    <article className="timeline-item">
                        <div className="timeline-item__date">[Apr-Oct 2024]</div>
                        <div className="timeline-item__content">
                            <h3 className="timeline-item__role">Software Engineer Intern - Workday</h3>
                            <p className="timeline-item__company">Vancouver</p>
                            <ul>
                                <li>Java/Spring APIs; ~30% faster queries and ~25% coverage lift on critical modules.</li>
                                <li>Refactors toward microservices; shipped customer-facing enhancements on quarterly cadence.</li>
                            </ul>
                        </div>
                    </article>

                    {/* Experience 3 */}
                    <article className="timeline-item">
                        <div className="timeline-item__date">[2022-Present]</div>
                        <div className="timeline-item__content">
                            <h3 className="timeline-item__role">Other Roles</h3>
                            <ul>
                                <li>Executive Assistant - Family Business (May 2022-Present).</li>
                                <li>Freelance Tutor - DataPi Learning (Apr-Sep 2023): Gr. 10–12 math/science; Swift speech dataset; Core ML integration.</li>
                            </ul>
                        </div>
                    </article>

                </div>
            </section>

            {/* Contact Terminal - Below MacBook */}
            <section className="contact-terminal">
                <h3>Contact & Links</h3>
                <p><span className="terminal-prompt">&gt;</span> Email: <a href="mailto:tomcsvan@student.ubc.ca">tomcsvan@student.ubc.ca</a></p>
                <p><span className="terminal-prompt">&gt;</span> Link: <a href="https://github.com/tomcsvan" target="_blank" rel="noreferrer">github.com/tomcsvan</a></p>
                <p><span className="terminal-prompt">&gt;</span> Link: <a href="https://www.linkedin.com/in" target="_blank" rel="noreferrer">linkedin.com/tomcsvan</a></p>
            </section>

        </div>
    );
}
