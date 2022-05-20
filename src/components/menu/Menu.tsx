import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { OrderItem } from "../../redux/reducers/interfaces";
import { MenuItem } from "./components/menuItem/MenuItem";
import "./Menu.css";

export const Menu: FC = () => {
  const menuItems = useSelector<RootState>(
    (store) => store.orders.orders
  ) as Array<OrderItem>;

  return (
    <div className="menu-wrapper">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          name={item.name}
          price={item.price}
          currency={item.currency}
          rating={item.rating}
          id={item.id}
        />
      ))}
    </div>
  );
};
