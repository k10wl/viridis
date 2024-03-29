import React from 'react';

import { buttonTransition, buttonVariants } from './animation';
import { ButtonBase } from './style';
import { ButtonProps } from './type';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  type = 'button',
  ...props
}) => (
  <ButtonBase
    variants={buttonVariants}
    transition={buttonTransition}
    initial={disabled ? 'disabled' : 'rest'}
    animate={disabled ? 'disabled' : 'rest'}
    whileHover={disabled ? '' : 'hover'}
    whileTap={disabled ? '' : 'tap'}
    whileFocus={disabled ? '' : 'focus'}
    onClick={onClick}
    disabled={disabled}
    type={type}
    {...props}
  />
);
