import { Box } from "@mui/material";
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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        flexGrow={1}
        display={"flex"}
        alignContent={"center"}
        marginTop={"2rem"}
      >
        <HttpProtocol />
      </Box>
    </ThemeProvider>
  );
}
