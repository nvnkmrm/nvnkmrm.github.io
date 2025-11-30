import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HttpProtocol from "./components/HttpProtocol";

const baseTheme = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#E0E0E0",
      contrastText: "#000000",
    },
    secondary: {
      main: "#F5F5F5",
      light: "#FFFFFF",
      dark: "#E0E0E0",
      contrastText: "#000000",
    },
  },
  typography: {
    h5: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "2.5rem",
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>Tech Notes by Naveen</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <HttpProtocol />
      </Box>
    </ThemeProvider>
  );
}
