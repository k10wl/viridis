import React from "react";

import { buttonTransition, buttonVariants } from "./animations";
import { ButtonBase } from "./styles";

type ButtonT = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit";
  children: React.ReactNode;
  width?: number;
  fullWidth?: boolean;
  height?: number;
};

export const Button: React.FC<ButtonT> = ({
  onClick,
  disabled = false,
  type = "button",
  children,
  width,
  fullWidth,
  height,
}) => (
  <ButtonBase
    variants={buttonVariants}
    initial="rest"
    animate={disabled ? "disabled" : "rest"}
    whileHover={disabled ? "" : "hover"}
    whileTap={disabled ? "" : "tap"}
    whileFocus={disabled ? "" : "focus"}
    transition={buttonTransition}
    onClick={(clickEvent): void => {
      clickEvent.stopPropagation();
      onClick(clickEvent);
    }}
    disabled={disabled}
    type={type}
    width={width}
    fullWidth={fullWidth}
    height={height}
  >
    {children}
  </ButtonBase>
);
