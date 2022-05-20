import { FC } from "react";
import { Box } from "../../../box/Box";
import "./MenuItem.css";
import KebabImage from "../../../../assets/kebab.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../../../forms/button/enums";
import { MenuItemProps } from "../../interfaces";
import kebabCase from "lodash/kebabCase";

export const MenuItem: FC<MenuItemProps> = ({name, price, currency, rating, id}) => {
  const navigate = useNavigate()
  return (
    <div className="menu-item-wrapper" onClick={() => navigate(`${RoutePaths.MENU}/${id}`)}>
      <Box imageSrc={require(`../../../../assets/${kebabCase(name.toLowerCase())}.jpg`)} label={name} />
      <div className="menu-item-footer">
        <div className="menu-item-footer-rating">
          <FontAwesomeIcon icon={faThumbsUp} />
          <div className="menu-item-footer-rating-number">{rating}%</div>
        </div>
        <div className="menu-item-footer-price">{price} {currency}</div>
      </div>
    </div>
  );
};
