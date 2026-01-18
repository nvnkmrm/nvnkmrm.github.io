import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import Footer from "../components/Footer";

/**
 * Root layout wrapper for all pages using MUI
 * Includes header, main content area, and footer
 */
export default function RootLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
