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
        fontSize: "2.1rem",
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        sx={{
          boxShadow: "none",
          borderBottom: "0.05rem solid #ccc",
        }}
      >
        <Toolbar>
          <Typography sx={{ marginLeft: "2rem" }}>
            Tech Notes by Naveen
          </Typography>
        </Toolbar>
      </AppBar>
      <Box marginTop={"2rem"}>
        <HttpProtocol />
      </Box>
    </ThemeProvider>
  );
}
