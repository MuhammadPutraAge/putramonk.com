import { Link } from "@remix-run/react";

export default function Footer() {
  const getYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-profile">
          <h1>Muhammad Putra Age</h1>
          <p>Front-end engineer who wants to be an expert</p>
          <div className="footer-socials">
            <a
              href="/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/youtube-white.svg" alt="youtube" />
            </a>
            <a
              href="/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/linkedin-white.svg" alt="linkedin" />
            </a>
            <a
              href="/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/github-white.svg" alt="github" />
            </a>
            <a
              href="/"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/instagram-white.svg" alt="instagram" />
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <h1 className="footer-title">Contact</h1>
          <a href="/">Email me</a>
          <a href="/">Linkedin</a>
          <a href="/">Instagram</a>
        </div>
        <div className="footer-navigation">
          <h1 className="footer-title">Navigation</h1>
          <Link to='/blog'>Blog</Link>
          <Link to='/courses'>Courses</Link>
          <Link to='/talks'>Talks</Link>
          <Link to='/experiences'>Experiences</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
      <p className="footer-copyright">&copy; {getYear} Muhammad Putra Age</p>
    </footer>
  );
}
