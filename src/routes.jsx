import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import LiveMarketPrices from "./pages/LiveMarketPrices";
import TradingTools from "./pages/TradingTools";
import Checklist from "./pages/Checklist";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/livemarketprices",
        element: <LiveMarketPrices />,
      },
      {
        path: "/tradingtools",
        element: <TradingTools />,
      },
      {
        path: "/checklist",
        element: <Checklist />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
