import { FC } from "react";
import { Box } from "../box/Box";
import "./Main.css";
import MenuImage from "../../assets/menu-image.jpg";
import OrderTracker from "../../assets/order-tracker.jpg";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../forms/button/enums";

export const Main: FC = () => {
  const navigate = useNavigate();

  const goTo = (location: RoutePaths) => () => {
    navigate(location);
  };

  return (
    <div className="main-wrapper">
      <Box onClick={goTo(RoutePaths.MENU)} imageSrc={MenuImage} label="Menu" />
      <Box onClick={goTo(RoutePaths.TRACKER)} imageSrc={OrderTracker} label="Order Tracker" />
    </div>
  );
};
