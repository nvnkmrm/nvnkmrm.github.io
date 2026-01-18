import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

/**
 * Blog layout wrapper for blog-specific pages using MUI
 * Can be extended with blog-specific sidebar, navigation, etc.
 */
export default function BlogLayout() {
  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </Box>
  );
}
