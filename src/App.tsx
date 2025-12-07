import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";

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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
