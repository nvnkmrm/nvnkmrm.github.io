import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import HttpProtocol from "../components/HttpProtocol";
import { ROUTES } from "./paths";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.BLOG,
    children: [
      {
        path: "http-protocol",
        element: <HttpProtocol />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />,
  },
]);
