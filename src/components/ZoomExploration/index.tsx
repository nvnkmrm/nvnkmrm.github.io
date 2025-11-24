import HttpProtocolSvg from "../../assets/ssl/http_protocol.svg";
import {
  Box,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import * as React from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

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

const ZoomExploration: React.FC = () => {
  const currentTheme = useTheme();
  const isMobile = useMediaQuery(currentTheme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(currentTheme.breakpoints.between("sm", "md"));

  const contentWidth = isMobile ? "90vw" : isTablet ? "80vw" : "65vw";

  const MobileView = (
    <Box border={1} borderColor="primary.main" borderRadius={2} p={2}>
      <TransformWrapper
        wheel={{ wheelDisabled: true }}
        pinch={{ step: 8.1 }}
        doubleClick={{ disabled: true }}
      >
        <TransformComponent>
          <img
            src={HttpProtocolSvg}
            alt="test"
            style={{
              width: contentWidth,
              height: "100%",
            }}
          />
        </TransformComponent>
      </TransformWrapper>
    </Box>
  );
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
        {MobileView}
      </Stack>
    </ThemeProvider>
  );
};

export default ZoomExploration;
