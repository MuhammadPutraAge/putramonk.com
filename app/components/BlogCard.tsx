import { Link } from "@remix-run/react";

interface BlogCardProps {
  cover: string;
  date: string;
  title: string;
  to: string
}

export default function BlogCard({ cover, date, title, to }: BlogCardProps) {
  return (
    <Link to={to} className="blog-card">
      <img src={cover} alt={title} className="blog-card-cover" />
      <p className="blog-card-date">{date}</p>
      <h1 className="blog-card-title">{title}</h1>
    </Link>
  );
}
