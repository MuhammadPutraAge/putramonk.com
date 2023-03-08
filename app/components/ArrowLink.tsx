import { Link } from "@remix-run/react";

interface ArrowLinkProps {
  to: string;
  title: string;
}

export default function ArrowLink({ to, title }: ArrowLinkProps) {
  return (
    <Link to={to} className="arrow-link-more-container">
      <p className="arrow-link-more-text">{title}</p>
      <img src="/icons/chevron-down.svg" alt="arrow-right" />
    </Link>
  );
}
