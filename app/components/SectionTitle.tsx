interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
