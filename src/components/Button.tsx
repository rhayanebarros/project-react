import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className = '', ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`rounded-lg bg-primary px-4 py-2 font-medium text-white shadow-sm transition-opacity hover:opacity-95 ${className}`}
    >
      {children}
    </button>
  );
}
