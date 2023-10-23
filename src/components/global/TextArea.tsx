import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & { className?: string };

export default function TextArea({ className, ...rest }: TextAreaProps) {
  return (
    <textarea
      className={`bg-white rounded-4 outline-none text-16 xxs:text-12 text-black placeholder:text-grey font-bold p-16 ${className}`}
      {...rest}
    />
  );
}
