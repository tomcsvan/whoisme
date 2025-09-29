import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__brand">Your Name</div>
        <nav className="navbar__links">
          <NavLink to="/" end>Work</NavLink>
          <NavLink to="/page2">Info</NavLink>
          <NavLink to="/page3">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
