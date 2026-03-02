import React from "react";
import PropTypes from "prop-types";

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

SegmentedControl.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
