import HttpProtocolSvg from "../../assets/ssl/http_protocol.svg";
import {
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import * as React from "react";

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

const HttpProtocol: React.FC = () => {
  const currentTheme = useTheme();
  const isMobile = useMediaQuery(currentTheme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(currentTheme.breakpoints.between("sm", "md"));

  const contentWidth = isMobile ? "90vw" : isTablet ? "80vw" : "65vw";

  return (
    <ThemeProvider theme={theme}>
      <Stack alignItems={"center"} spacing={1.5} marginTop={"3rem"}>
        <Typography
          variant="h3"
          sx={{ width: contentWidth, textAlign: "left" }}
        >
          HTTP - Hypertext Transfer Protocol
        </Typography>
        <Divider sx={{ width: contentWidth, borderWidth: 1.3 }} />
        <img
          src={HttpProtocolSvg}
          style={{ marginTop: "0.5rem", width: contentWidth, height: "100%" }}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default HttpProtocol;
