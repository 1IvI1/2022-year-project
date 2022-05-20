import { CartItem } from "../../redux/reducers/interfaces";

export interface CartItemProps extends CartItem {}

export interface AddRemoveButtonsProps {
  id: string;
}