// dashbaord
import HomePage from "../pages/home";
import ButtonPage from "../pages/button";

export const routes = [
  {
    privateRoute: false,
    path: "/",
    Component: HomePage,
    privateTemplate: true,
  },
  {
    privateRoute: false,
    path: "/components/button",
    Component: ButtonPage,
    privateTemplate: true,
  },
];
