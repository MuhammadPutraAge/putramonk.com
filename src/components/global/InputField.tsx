import { DetailedHTMLProps, InputHTMLAttributes } from "react";

type InputFieldType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { className?: string };

export default function InputField({ className, ...rest }: InputFieldType) {
  return (
    <input
      className={`bg-white px-16 rounded-4 outline-none text-16 xxs:text-12 text-black placeholder:text-grey font-bold ${className}`}
      {...rest}
    />
  );
}
