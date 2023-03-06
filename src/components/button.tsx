import React, { HTMLAttributes, FC } from 'react';

type ButtonVariants = 'primary' | 'secondary';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text?: string;
  Icon?: FC;
  variant: ButtonVariants;
}

const THEME = {
  primary: 'text-white bg-brand-green hover:bg-brand-green-dark rounded-lg px-4 py-2',
  secondary: 'text-brand-green bg-white border-brand-green border-2 hover:bg-brand-green hover:text-white rounded-lg px-4 py-2',
  rounded: 'text-white bg-brand-green hover:bg-brand-green-dark rounded-full',
};

export const Button: FC<ButtonProps> = ({
  text,
  Icon,
  variant,
  ...props
}) => (
    <button
      {...props}
      className={`${THEME[variant]} flex flex-row items-center alig-center shadow w-fit transition duration-200 ease-in-out p-3`}
    >
      {text && <p>{text}</p>}
      {Icon && <Icon/>}
    </button>
);
