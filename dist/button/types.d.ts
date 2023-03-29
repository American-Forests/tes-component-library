import { HTMLAttributes } from 'react';
declare type ButtonVariants = 'primary' | 'secondary';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    text: string;
    variant?: ButtonVariants;
}
export {};
