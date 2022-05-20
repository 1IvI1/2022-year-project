import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../../redux/reducers/cart";
import { Button } from "../../../forms/button/Button";
import { ButtonTypes } from "../../../forms/button/enums";
import { AddRemoveButtonsProps } from "../../interfaces";
import "./AddRemoveButtons.css";

export const AddRemoveButtons: FC<AddRemoveButtonsProps> = ({ id }) => {
  const dispatch = useDispatch();
  console.log(id);
  

  const removeItemFromCart = () => {
    console.log("removing >> ", id);

    dispatch(removeItem({ id }));
  };

  return (
    <div className="add-remove-wrapper">
      <div className="add-subtract-buttons">
        <Button bsType={ButtonTypes.SECONDARY}>
          <FontAwesomeIcon size="xs" icon={faMinus} />
        </Button>
        <p className="cart-item-count">1</p>
        <Button bsType={ButtonTypes.SECONDARY}>
          <FontAwesomeIcon size="xs" icon={faPlus} />
        </Button>
      </div>
      <Button bsType={ButtonTypes.PRIMARY} onClick={removeItemFromCart}>
        <FontAwesomeIcon size="xs" icon={faTrash} />
      </Button>
    </div>
  );
};
