import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props){ super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error){ return { error }; }
  componentDidCatch(error, info){ console.error("Render error:", error, info); }
  render(){
    if (this.state.error){
      return (
        <div className="container" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Something broke while rendering.</h2>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {String(this.state.error?.message || this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
