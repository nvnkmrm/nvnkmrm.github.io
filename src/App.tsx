import { Box, Drawer, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HttpProtocol from "./components/HttpProtocol";

const baseTheme = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#F5F5F5",
    },
  },
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

const LAYOUT_CONFIG = {
  navBar: {
    width: {
      desktop: "17rem",
      mobile: 0,
    },
    borderWidth: "0.07rem",
  },
  spacing: {
    top: "1rem",
  },
};

export default function App() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const navBarWidth = isDesktop
    ? LAYOUT_CONFIG.navBar.width.desktop
    : LAYOUT_CONFIG.navBar.width.mobile;

  return (
    <ThemeProvider theme={theme}>
      <Drawer variant="persistent" open={isDesktop} anchor="left">
        <Box width={navBarWidth}>Persistent drawer content</Box>
      </Drawer>

      <Box
        flexGrow={1}
        marginLeft={navBarWidth}
        marginTop={LAYOUT_CONFIG.spacing.top}
      >
        <HttpProtocol />
      </Box>
    </ThemeProvider>
  );
}
