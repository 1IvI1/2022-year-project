import { FC } from "react";
import { Button } from "../forms/button/Button";
import { ButtonTypes, RoutePaths } from "../forms/button/enums";
import { Input } from "../forms/input/Input";
import "./Intro.css";
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";

export const Intro: FC = () => {

  const navigate = useNavigate();

  const navigateTo = (route: RoutePaths) => () => {
    navigate(route);
  }

  return (
    <div className="intro-wrapper">
        <img className="intro-logo" src={logo} alt="" />
      <div className="intro-text">
        <h2 className="intro-text-title">Your restaurant name</h2>
        <p className="intro-text-subtitle">
          Your short description Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Morbi nisl tortor, commodo eget velit sit amet,
          consectetur fringilla mauris. Morbi suscipit lorem non mi scelerisque.
        </p>
      </div>
      <div className="intro-buttons">
        <Button onClick={navigateTo(RoutePaths.LOGIN)} bsType={ButtonTypes.PRIMARY}>Login</Button>
        <Button onClick={navigateTo(RoutePaths.REGISTER)} bsType={ButtonTypes.SECONDARY}>Register</Button>
        <Button onClick={navigateTo(RoutePaths.MAIN)} bsType={ButtonTypes.DEFAULT}>Skip</Button>
      </div>
    </div>
  );
};
