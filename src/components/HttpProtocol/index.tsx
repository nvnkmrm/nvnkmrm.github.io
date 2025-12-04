import { Stack, Typography, useTheme, Divider } from "@mui/material";
import { useMemo } from "react";
import HttpProtocolSvg from "../../assets/ssl/http_protocol.svg";
import { useScreenContext } from "../../hooks";
import * as React from "react";

const HttpProtocol: React.FC = () => {
  const theme = useTheme();
  const { isMobile, isTablet } = useScreenContext();

  const { contentWidth, contentAlignment } = useMemo(() => {
    const width = isMobile ? "90vw" : isTablet ? "80vw" : "65vw";
    const alignment = isMobile || isTablet ? "center" : "start";
    return { contentWidth: width, contentAlignment: alignment };
  }, [isMobile, isTablet]);

  return (
    <Stack alignItems={contentAlignment} spacing={1.5}>
      <Typography
        variant="h5"
        sx={{ width: contentWidth, textAlign: "center" }}
      >
        HTTP - Hypertext Transfer Protocol
      </Typography>
      <Divider
        sx={{
          width: contentWidth,
          height: "0.056rem",
          background: theme.palette.primary.dark,
          border: "none",
          marginTop: "3rem",
        }}
      />
      <img
        src={HttpProtocolSvg}
        style={{ marginTop: "0.2rem", width: contentWidth, height: "100%" }}
        alt="HTTP Notes"
      />
    </Stack>
  );
};

export default HttpProtocol;
