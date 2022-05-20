import { FC } from "react";
import "./Box.css";
import { BoxProps } from "./interfaces";

export const Box: FC<BoxProps> = ({ imageSrc, label, onClick }) => {
  return (
    <div
      className="box-wrapper"
      onClick={onClick}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <p className="box-wrapper-label">{label}</p>
    </div>
  );
};
