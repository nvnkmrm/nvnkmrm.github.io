import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  responsiveFontSizes,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useScreenContext } from "./hooks";

const baseTheme = createTheme();
const theme = responsiveFontSizes(baseTheme);

const drawerWidth = 240;

export default function App() {
  const { isDesktop } = useScreenContext();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawer = (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        Navigation
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/blog">
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/about">
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        elevation={0}
        sx={{
          bgcolor: "#c6e7bf",
          borderBottom: "1px solid #e0e0e0",
          zIndex: 2000,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            fontStyle={"normal"}
            fontWeight={"bold"}
            variant="h6"
            color={"#000"}
            component="div"
          >
            Tech Notes By Naveen
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isDesktop ? "persistent" : "temporary"}
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Box
        marginTop={"4.5rem"}
        sx={{
          marginLeft: isDrawerOpen && isDesktop ? `${drawerWidth}px` : 0,
          transition: "margin 0.3s ease",
        }}
      >
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}
