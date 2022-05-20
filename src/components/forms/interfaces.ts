import { ButtonHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes, MouseEventHandler } from "react";
import { ButtonTypes } from "./button/enums";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  bsType?: ButtonTypes;
}

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  
}