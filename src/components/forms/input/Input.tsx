import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { InputProps } from "../interfaces";
import "./Input.css";

export const Input: FC<InputProps> = (initialProps) => {
  const { className, ...props } = initialProps;
  return <input {...props} className={`input ${className}`} />;
};
