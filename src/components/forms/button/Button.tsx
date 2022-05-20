import { FC } from "react";
import { ButtonProps } from "../interfaces";
import "./Button.css";
import { ButtonTypes } from "./enums";

export const Button: FC<ButtonProps> = ({
  children,
  bsType,
  className,
  ...props
}) => {
  const selectClassName = () => {
    if (bsType === ButtonTypes.PRIMARY) {
      return "btn-primary";
    }
    if (bsType === ButtonTypes.SECONDARY) {
      return "btn-secondary";
    }
    return "btn-default";
  };
  
  return (
    <button {...props} className={`btn ${className} ${selectClassName()}`}>
      {children}
    </button>
  );
};
