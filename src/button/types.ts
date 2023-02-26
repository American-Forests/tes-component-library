import { HTMLAttributes } from 'react';

type ButtonVariants = 'primary' | 'secondary';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
}