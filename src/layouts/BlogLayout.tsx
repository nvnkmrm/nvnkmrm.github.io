import { Outlet } from "react-router-dom";

/**
 * Blog layout wrapper for blog-specific pages
 * Can be extended with blog-specific sidebar, navigation, etc.
 */
export default function BlogLayout() {
  return (
    <div className="blog-layout">
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
