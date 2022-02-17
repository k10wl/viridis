import React, { FunctionComponent, ReactNode } from "react";

import { ButtonBase } from "./styles";
import { buttonTransition, buttonVariants } from "./animations";

type ButtonT = {
  onClick: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  children: ReactNode;
};

const Button: FunctionComponent<ButtonT> = ({
  onClick,
  disabled = false,
  type = "button",
  children,
}) => (
  <ButtonBase
    variants={buttonVariants}
    initial="rest"
    animate={disabled ? "disabled" : "rest"}
    whileHover={disabled ? "" : "hover"}
    whileTap={disabled ? "" : "tap"}
    whileFocus={disabled ? "" : "focus"}
    transition={buttonTransition}
    onClick={onClick}
    disabled={disabled}
    type={type}
  >
    {children}
  </ButtonBase>
);

export default Button;
