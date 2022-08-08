import React from 'react';

export type Unit = 'rem' | 'em' | 'px' | '%';
export type Size = `${number}${Unit}`;

export type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit';
  children: React.ReactNode;
  width?: Size;
  height?: Size;
  fontSize?: Size;
  borderRadius?: Size;
};
