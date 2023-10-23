interface SectionTitleProps {
  title: string;
  subtitle: string;
  titleColor?: string;
  subtitleColor?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  titleColor = "#592FB4",
  subtitleColor = "#161C29",
}: SectionTitleProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 style={{ color: titleColor }} className="text-24 xs:text-18 xxs:text-16 font-bold">
        {title}
      </h3>
      <h1 style={{ color: subtitleColor }} className="text-32 xs:text-24 xxs:text-18 font-bold">
        {subtitle}
      </h1>
    </div>
  );
}
