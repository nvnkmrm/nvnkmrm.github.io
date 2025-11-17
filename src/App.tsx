import httpProtocol from "./assets/ssl/http_protocol.svg";
import { createTheme, Stack, ThemeProvider, Typography } from "@mui/material";

const baseTheme = createTheme();

const theme = createTheme({
  typography: {
    h3: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "3.4rem",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack alignItems={"center"} spacing={5} marginTop={"3rem"}>
        <Typography variant="h3">Hypertext Transfer Protocol</Typography>
        <img
          style={{ width: "70vw", height: "100%" }}
          src={httpProtocol}
          alt="http protocol"
        />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
