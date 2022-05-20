import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux";
import { startOrder, updateCart } from "../../redux/reducers/cart";
import { OrderStatuses } from "../../redux/reducers/enums";
import { CartItem } from "../../redux/reducers/interfaces";
import { Button } from "../forms/button/Button";
import { ButtonTypes, RoutePaths } from "../forms/button/enums";
import "./Cart.css";
import { CartItem as CartItemComponent } from "./components/cartItem/CartItem";

export const Cart: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector<RootState>(
    (state) => state.cart.cart
  ) as Array<CartItem>;

  const setOrdersAsSettingUp = () => {
    dispatch(startOrder());
  };

  const isCartFilled = Boolean(
    cart.some((cartItem) => cartItem.status === OrderStatuses.PENDING)
  );

  const totalPrice = isCartFilled
    ? cart.filter(x => x.status === OrderStatuses.PENDING).reduce((acc, x) => acc + x.totalPrice, 0)
    : 0;

  return (
    <div className="cart-wrapper">
      <h2 className="cart-wrapper-header">
        {isCartFilled ? "Your order" : "Please go to menu to make orders"}
      </h2>
      {isCartFilled &&
        cart.map(
          (cartItem) =>
            cartItem.status === OrderStatuses.PENDING && (
              <CartItemComponent {...cartItem} key={cartItem.id} />
            )
        )}
      <div className="cart-order-button">
        <Button
          onClick={() => {
            setOrdersAsSettingUp();
            navigate(isCartFilled ? RoutePaths.TRACKER : RoutePaths.MENU);
          }}
          bsType={ButtonTypes.PRIMARY}
        >
          {isCartFilled
            ? `Order for ${totalPrice} ${cart[0].currency}`
            : "Go to menu"}
        </Button>
      </div>
    </div>
  );
};
