import React from "react";

export default function Window({ children }) {
  return (
    <div className="window">
      <div className="window__chrome">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
      </div>
      <div className="window__body">{children}</div>
    </div>
  );
}
