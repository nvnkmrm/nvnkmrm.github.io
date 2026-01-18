import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Root layout wrapper for all pages
 * Includes header, main content area, and footer
 */
export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
