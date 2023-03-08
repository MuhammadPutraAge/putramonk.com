import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="/icons/logo.svg" alt="monk-logo" />
      </Link>
      <div className="navbar-menus">
        <Link to="/blog">Blog</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/talks">Talks</Link>
        <Link to="/experiences">Experiences</Link>
        <Link to="/about">About</Link>
      </div>
      <Link to="/profile">
        <div className="profile-img" />
      </Link>
    </div>
  );
}
