import React from "react";

export default function SegmentedControl({ options, value, onChange }) {
  return (
    <div className="seg">
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            className={`seg__btn ${active ? "is-active" : ""}`}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={active}
          >
            {opt}
          </button>
        );
      })}
      <div className="seg__bg" aria-hidden />
    </div>
  );
}
