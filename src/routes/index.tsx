import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import BlogContent from "../components/BlogContent";
import { ROUTES } from "./paths";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: `${ROUTES.BLOG}/*`,
    element: <BlogContent />,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />,
  },
]);
