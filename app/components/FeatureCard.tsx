import ArrowLink from "./ArrowLink";

interface FeatureCardProps {
  title: string;
  description: string;
  linkTitle: string;
  linkTo: string;
  iconSrc: string;
}

export default function FeatureCard(props: FeatureCardProps) {
  const { title, description, linkTitle, linkTo, iconSrc } = props;

  return (
    <div className="feature-card">
      <img src={iconSrc} alt={title} />
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <ArrowLink to={linkTo} title={linkTitle} />
    </div>
  );
}
