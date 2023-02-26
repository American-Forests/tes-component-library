import React, { FC } from 'react';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  text,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={`${
        variant === 'primary'
          ? 'text-white bg-brand-green hover:bg-brand-green-dark'
          : 'text-brand-green bg-white border-brand-green border-2 hover:bg-brand-green hover:text-white'
      } shadow rounded-lg w-fit px-4 py-2 transition duration-200 ease-in-out`}
      {...props}
    >
      {text}
    </button>
  );
};
