function Page2() {
    return (
      <div className="container" style={{ padding: "72px 0" }}>
        <h2 style={{ fontFamily: "var(--ff-display)", fontSize: "var(--fs-h1)", margin: 0 }}>
          Designer driven by visual craft & storytelling.
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: "65ch", marginTop: 12 }}>
          Short bio, values, currently/previously, and a minimal headshot.
          Add links to resume and LinkedIn.
        </p>
        <ul style={{ marginTop: 24, lineHeight: 1.8 }}>
          <li>Currently: …</li>
          <li>Previously: …</li>
          <li>Selected talks/press: …</li>
        </ul>
      </div>
    );
  }
  export default Page2;
  