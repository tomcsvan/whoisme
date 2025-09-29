function Page1() {
    return (
      <>
        <section className="hero container">
          <h1>I craft products, interactions & stories.</h1>
          <p>
            Currently designing <span className="badge">Your Role</span>. Formerly at …  
            Case studies below are short, visual, and focused on impact.
          </p>
        </section>
  
        <section className="container grid" aria-label="Selected work">
          <article className="card">
            <img src="/assets/images/background.jpeg" alt="" />
            <h3>Project One — Impact headline</h3>
            <p>Brief one-liner on outcome · Role · Year</p>
          </article>
  
          <article className="card">
            <img src="/assets/images/background.jpeg" alt="" />
            <h3>Project Two — Outcome metric</h3>
            <p>Brief one-liner on outcome · Role · Year</p>
          </article>
        </section>
      </>
    );
  }
  export default Page1;
  