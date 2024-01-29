import { createBrowserRouter } from "react-router-dom";
import Header from "../pages/Header";
import Home from "../pages/Home";
import Coins from "../components/Coins";
import Exchanges from "../components/Exchanges";
import CoinDetails from "../components/CoinDetails";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/coins", element: <Coins /> },
      { path: "/exchanges", element: <Exchanges /> },
      { path: "/coins/:id", element: <CoinDetails /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
