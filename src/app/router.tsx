import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import BlogLayout from "../layouts/BlogLayout";
import HomePage from "../pages/HomePage";
import BlogListPage from "../pages/BlogListPage";
import BlogPostPage from "../pages/BlogPostPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";

/**
 * Application router configuration
 * Uses browser-based routing with clean URLs
 * URLs will be: /, /blog, /blog/post-slug, /about
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blog",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <BlogListPage />,
          },
          {
            path: ":slug",
            element: <BlogPostPage />,
          },
        ],
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
