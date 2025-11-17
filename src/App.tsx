import HttpProtocolSvg from "./assets/ssl/http_protocol.svg?react";
import { createTheme, Stack, ThemeProvider, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

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
      <Stack alignItems={"center"} spacing={1.5} marginTop={"3rem"}>
        <Typography variant="h3" sx={{ width: "65vw", textAlign: "left" }}>
          HTTP - Hypertext Transfer Protocol
        </Typography>
        <Divider sx={{ width: "65vw", borderWidth: 1.3 }} />
        <HttpProtocolSvg
          width="65vw"
          height="100%"
          style={{ marginTop: "2rem" }}
        />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
