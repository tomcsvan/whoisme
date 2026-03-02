// src/components/Topbar.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SegmentedControl from "./ui/SegmentedControl";
import logo from "../assets/logo.svg";

export default function Topbar() {
    const nav = useNavigate();
    const { pathname } = useLocation();
    const value = pathname.startsWith("/info") ? "Info" : "Work";

    return (
        <header className="topbar">
            <div className="container topbar__inner">
                {/* LEFT — name (top) • logo placeholder (middle) • role (bottom) */}
                <div className="nav-left">
                    <img src={logo} alt="Logo" className="nav-left__logo" />
                    <div className="nav-left__text">
                        <div className="nav-left__name">Tom Le</div>
                        <div className="nav-left__role">Entrepreneur</div>
                    </div>
                </div>

                {/* CENTER — segmented toggle */}
                <SegmentedControl
                    options={["Work", "Info"]}
                    value={value}
                    onChange={(v) => nav(v === "Work" ? "/work" : "/info")}
                />

            </div>
        </header>
    );
}
