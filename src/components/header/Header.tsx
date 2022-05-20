import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RoutePaths } from "../forms/button/enums";
import {
  faAngleLeft,
  faCartShopping,
  faHand,
} from "@fortawesome/free-solid-svg-icons";
import { getHeaderName } from "./utils";
import "./Header.css";
import capitalize from "lodash/capitalize";
import { HeaderProps } from "./interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { CartItem, OrderItem } from "../../redux/reducers/interfaces";
import { OrderStatuses } from "../../redux/reducers/enums";

export const Header: FC<HeaderProps> = ({ children, navigateBackPath }) => {
  const [isWaiterCalled, setIsWaiterCalled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const order = useSelector<RootState>((state) =>
    state.orders.orders.find(({ id }) => params.id === id)
  ) as OrderItem;
  const cart = useSelector<RootState>(
    (state) => state.cart.cart
  ) as Array<CartItem>;

  const navigateBack = () => {
    if (location.pathname === RoutePaths.CART || !navigateBackPath) {
      navigate(-1);
      return;
    }
    navigate(navigateBackPath);
  };

  const pendingOrdersCount = cart.reduce(
    (acc, cartItem) =>
      cartItem.status === OrderStatuses.PENDING ? acc + 1 : acc,
    0
  );

  if (
    location.pathname === RoutePaths.INTRO ||
    location.pathname === RoutePaths.ROOT
  )
    return null;

  return (
    <>
      <header className="header-wrapper">
        <FontAwesomeIcon icon={faAngleLeft} onClick={navigateBack} />
        <h3>
          {params.id
            ? capitalize(order.name)
            : getHeaderName(location.pathname as RoutePaths)}
        </h3>
        <div className="cart-watier-icons-wrapper">
          {location.pathname !== RoutePaths.CART && (
            <div
              className="header-cart-icon-wrapper"
              onClick={() => navigate(RoutePaths.CART)}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              {Boolean(pendingOrdersCount) && (
                <div className="header-cart-icon-count">
                  {pendingOrdersCount}
                </div>
              )}
            </div>
          )}
          <FontAwesomeIcon
            className={isWaiterCalled ? "call-waiter-active" : ""}
            icon={faHand}
            onClick={() => setIsWaiterCalled((prev) => !prev)}
          />
        </div>
      </header>
      {children}
    </>
  );
};
