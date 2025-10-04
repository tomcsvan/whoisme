import React from "react";
import Window from "../components/Window";

import eigensimImg from "../assets/eigensim.png";
import tradexImg from "../assets/tradex.png";
import employeeImg from "../assets/workd.png";

export default function Work() {
  return (
    <div className="container">
      <section className="hero">
        <Window>
          <h1 className="display">
            Quantitative trader <br />
            & <em>software engineer.</em>
          </h1>
          <p className="subtitle">Vancouver, BC · Toronto, ON</p>
          <p className="muted">
            I build systematic strategies and pragmatic software. I care about clarity,
            latency, and measurable impact.
          </p>
        </Window>
      </section>

      <section className="grid">
        <article className="card">
          <div
            className="card__media"
            style={{ backgroundImage: `url(${eigensimImg})` }}
          />
          <h3>EigenSim - Algorithmic Trading Backtesting</h3>
          <p className="muted">PHP · Oracle SQL · C++ · ML</p>
          <ul>
            <li>Schema for users/strategies/backtests/trades/reports; C++ engines on historical data.</li>
            <li>PHP UI to launch sims via predefined logic or prompt-bound parameters.</li>
            <li>Planned scikit-learn modules for predictive signals & optimization.</li>
          </ul>
        </article>

        <article className="card">
          <div
            className="card__media"
            style={{ backgroundImage: `url(${tradexImg})` }}
          />
          <h3>Tradex - Trading Platform</h3>
          <p className="muted">jQuery · PHP · REST APIs</p>
          <ul>
            <li>Live price integration with session-aware trade logic and risk checks.</li>
            <li>AJAX UI for responsive order entry and portfolio view.</li>
          </ul>
        </article>

        <article className="card">
          <div
            className="card__media"
            style={{ backgroundImage: `url(${employeeImg})` }}
          />
          <h3>Employee Attendance & Salary Tracker</h3>
          <p className="muted">Java · JavaFX</p>
          <ul>
            <li>OOP design with persistent file I/O; payroll reporting and summaries.</li>
          </ul>
        </article>
      </section>

      <section className="grid">
        <article className="card">
          <h3>Quantitative Trader - Self-Directed</h3>
          <p className="muted">2022-Present</p>
          <ul>
            <li>Intraday strategies on U.S. equities using order-book microstructure & volatility clustering.</li>
            <li>Passive liquidity-provision model capturing spread/mean-reversion alpha with low directional exposure.</li>
            <li>Automated execution with risk gates and monitoring.</li>
          </ul>
        </article>

        <article className="card">
          <h3>Software Engineer Intern - Workday</h3>
          <p className="muted">Vancouver · Apr-Oct 2024</p>
          <ul>
            <li>Java/Spring APIs; ~30% faster queries and ~25% coverage lift on critical modules.</li>
            <li>Refactors toward microservices; shipped customer-facing enhancements on quarterly cadence.</li>
          </ul>
        </article>

        <article className="card">
          <h3>Other Roles</h3>
          <ul>
            <li>Executive Assistant - Family Business (May 2022-Present).</li>
            <li>Freelance Tutor - DataPi Learning (Apr-Sep 2023): Gr. 10–12 math/science; Swift speech dataset; Core ML integration.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
