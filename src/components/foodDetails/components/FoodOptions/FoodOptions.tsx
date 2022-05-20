import { faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { FoodOptionProps } from "../../interfaces";
import "./FoodOptions.css";

export const FoodOptions: FC<FoodOptionProps> = ({
  name,
  price,
  currency,
  weight,
  onCountChange,
  id,
  currentCount,
}) => {
  return (
    <div className="food-options-wrapper">
      <p className="f-options-name">
        {name} - {weight}
      </p>
      <p className="f-options-price">
        + {price} {currency}
      </p>
      <div className="f-option-add-remove">
        <FontAwesomeIcon
          onClick={() => onCountChange(id, -1)}
          className="f-option-remove"
          icon={faCircleMinus}
        />
        {currentCount}
        <FontAwesomeIcon
          onClick={() => onCountChange(id, 1)}
          className="f-option-add"
          icon={faCirclePlus}
        />
      </div>
    </div>
  );
};
