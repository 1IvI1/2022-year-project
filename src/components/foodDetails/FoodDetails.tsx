import uniqueId from "lodash/uniqueId";
import kebabCase from "lodash/kebabCase";
import moment from "moment";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../redux";
import { updateCart } from "../../redux/reducers/cart";
import { OrderStatuses } from "../../redux/reducers/enums";
import { CartItem, OrderItem } from "../../redux/reducers/interfaces";
import { Button } from "../forms/button/Button";
import { ButtonTypes, RoutePaths } from "../forms/button/enums";
import { FoodDetailsPreview } from "./components/FoodDetailsPreview/FoodDetailsPreview";
import { FoodOptions } from "./components/FoodOptions/FoodOptions";
import "./FoodDetails.css";

export const FoodDetails: FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const food = useSelector<RootState>((state) =>
    state.orders.orders.find(({ id }) => params.id === id)
  ) as OrderItem;
  const [currentOrder, setCurrentOrder] = useState<CartItem>({
    estimatedTime: food.estimatedTime,
    status: OrderStatuses.PENDING,
    date: "",
    name: food.name,
    id: uniqueId(),
    currency: food.currency,
    totalPrice: food.price,
    extraOptions: food.extraOptions.map((option) => ({
      ...option,
      count: 0,
      totalPrice: 0,
    })),
  });

  const addToCart = () => {
    dispatch(
      updateCart({
        ...currentOrder,
        date: moment(new Date()).format("DD.MM.YYYY HH:mm"),
      })
    );
    navigate(RoutePaths.MENU);
  };

  const manipulateExtraOtions = (optionId: string, count: 1 | -1) => {
    setCurrentOrder((prev) => {
      const newExtraOptions = prev.extraOptions.map((option) => {
        if (option.id === optionId) {
          const newCount = option.count + count;
          const finalCount = newCount >= 0 ? newCount : 0;
          return {
            ...option,
            count: finalCount,
            totalPrice: option.price * finalCount,
          };
        }
        return option;
      });
      const newTotalPrice =
        food.price +
        newExtraOptions.reduce((acc, option) => acc + option.totalPrice, 0);

      return {
        ...prev,
        totalPrice: newTotalPrice,
        extraOptions: newExtraOptions,
      };
    });
  };

  return (
    <div className="food-details-wrapper">
      <div
        className="food-details-image"
        style={{
          backgroundImage: `url(${require(`../../assets/${kebabCase(
            food.name.toLowerCase()
          )}.jpg`)})`,
        }}
      ></div>
      <FoodDetailsPreview />
      <div className="food-details-data">
        <h2 className="food-details-data-heder">Add extra options</h2>
        {food.extraOptions.map((option) => (
          <FoodOptions
            {...option}
            key={option.id}
            onCountChange={manipulateExtraOtions}
            currentCount={
              currentOrder.extraOptions.find((x) => x.id === option.id)?.count!
            }
          />
        ))}
      </div>
      <div className="food-details-footer">
        <Button
          onClick={addToCart}
          className="food-details-add-button"
          bsType={ButtonTypes.PRIMARY}
        >
          Add for {currentOrder.totalPrice} {currentOrder.currency}
        </Button>
      </div>
    </div>
  );
};
