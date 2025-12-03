import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        position={"fixed"}
        width={"18rem"}
        height={"100%"}
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRight: "0.07rem solid #ccc",
        }}
      >
        <Typography marginTop={"1rem"}>Tech Notes By Naveen</Typography>
      </Box>
    </ThemeProvider>
  );
}
