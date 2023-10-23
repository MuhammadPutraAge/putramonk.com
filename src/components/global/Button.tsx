import Link, { LinkProps } from "next/link";
import { CSSProperties } from "react";

interface CustomButtonProps {
  title: string;
  style?: CSSProperties
  className?: string
}

type ButtonProps = CustomButtonProps & LinkProps

export default function Button({ href, title, className, style }: ButtonProps) {
  return (
    <Link className={`outline-none ${className}`} style={style} href={href}>
      {title}
    </Link>
  );
}
