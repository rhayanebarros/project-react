import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className = '', ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
