import { Link as RouterLink, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CodeIcon from "@mui/icons-material/Code";

/**
 * Site header with navigation using MUI components
 */
export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <CodeIcon sx={{ mr: 1, color: "primary.main" }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: "text.primary",
              textDecoration: "none",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Naveen’s TechNote
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              component={RouterLink}
              to="/"
              color={
                isActive("/") && location.pathname === "/"
                  ? "primary"
                  : "inherit"
              }
              sx={{
                fontWeight:
                  isActive("/") && location.pathname === "/" ? 600 : 400,
              }}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/blog"
              color={isActive("/blog") ? "primary" : "inherit"}
              sx={{ fontWeight: isActive("/blog") ? 600 : 400 }}
            >
              Blog
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              color={isActive("/about") ? "primary" : "inherit"}
              sx={{ fontWeight: isActive("/about") ? 600 : 400 }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
