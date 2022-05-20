import { OrderExtraOption } from "../../redux/reducers/interfaces";

export interface FoodOptionProps extends OrderExtraOption {
  onCountChange: (optionId: string, count:  1 | -1) => void;
  currentCount: number;
}
