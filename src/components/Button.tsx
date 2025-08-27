import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: Props) {
  return <button {...rest} className="btn">{children}</button>;
}
