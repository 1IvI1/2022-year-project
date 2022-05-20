import { FC } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Cart } from "../components/cart/Cart";
import { FoodDetails } from "../components/foodDetails/FoodDetails";
import { FoodTracker } from "../components/foodTracker/FoodTracker";
import { RoutePaths } from "../components/forms/button/enums";
import { Header } from "../components/header/Header";
import { HeaderProps } from "../components/header/interfaces";
import { Intro } from "../components/intro/Intro";
import { Main } from "../components/main/Main";
import { Menu } from "../components/menu/Menu";

const HeaderLayout: FC<HeaderProps> = ({ children, ...props }) => {
  return <Header {...props}>{children}</Header>;
};

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={RoutePaths.INTRO} element={<Intro />} />
        <Route path={RoutePaths.ROOT} element={<Intro />} />
        <Route
          path={RoutePaths.MAIN}
          element={
            <HeaderLayout navigateBackPath={RoutePaths.INTRO}>
              <Main />
            </HeaderLayout>
          }
        />
        <Route path={`${RoutePaths.MENU}/*`}>
          <Route
            path={""}
            element={
              <HeaderLayout navigateBackPath={RoutePaths.MAIN}>
                <Menu />
              </HeaderLayout>
            }
          />
          <Route
            path={":id"}
            element={
              <HeaderLayout navigateBackPath={RoutePaths.MENU}>
                <FoodDetails />
              </HeaderLayout>
            }
          />
        </Route>
        <Route path={RoutePaths.CART} element={
          <HeaderLayout navigateBackPath={'-1'}>
            <Cart />
          </HeaderLayout>
        } />
        <Route path={RoutePaths.TRACKER} element={
          <HeaderLayout navigateBackPath={RoutePaths.MAIN}>
            <FoodTracker />
          </HeaderLayout>
        } />
      </Routes>
    </Router>
  );
};
