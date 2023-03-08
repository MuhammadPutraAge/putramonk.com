export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-line" />
      <a
        href="/"
        className="sidebar-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/youtube.svg" alt="youtube" />
      </a>
      <a
        href="/"
        className="sidebar-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/linkedin.svg" alt="linkedin" />
      </a>
      <a
        href="/"
        className="sidebar-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/github.svg" alt="github" />
      </a>
      <a
        href="/"
        className="sidebar-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/icons/instagram.svg" alt="instagram" />
      </a>
    </div>
  );
}
