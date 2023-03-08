interface ButtonProps {
  title: string;
  onClick: () => void;
  type?: "primary" | "secondary";
}

export default function Button({
  title,
  onClick,
  type = "primary",
}: ButtonProps) {
  return (
    <button
      className={`btn ${type === "primary" ? "btn-primary" : "btn-secondary"}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
