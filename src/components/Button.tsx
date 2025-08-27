import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className = '', ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`inline-flex h-10 items-center justify-center rounded-lg border border-zinc-300 px-4 hover:bg-zinc-100 ${className}`}
    >
      {children}
    </button>
  );
}
