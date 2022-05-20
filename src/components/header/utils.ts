import { RoutePaths } from "../forms/button/enums";
import { headerNames } from "./constants";

export const getHeaderName = (pathName: RoutePaths) => {
  return headerNames[pathName];
}