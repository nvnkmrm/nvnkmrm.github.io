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
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

const baseTheme = createTheme();
const theme = createTheme({
  typography: {
    h5: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "2.1rem",
      },
    },
  },
});

interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}
function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

const drawerWidth = 240;

export default function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
      <HideOnScroll>
        <AppBar
          elevation={0}
          sx={{
            bgcolor: "#fff",
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
              fontFamily={"fantasy"}
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
      </HideOnScroll>

      <Drawer
        variant="persistent"
        open={mobileOpen}
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
        marginTop={"6rem"}
        sx={{
          marginLeft: mobileOpen ? `${drawerWidth}px` : 0,
          transition: "margin 0.3s ease",
        }}
      >
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}
