import { Stack, Typography, useTheme, Divider, Box } from "@mui/material";
import { useMemo } from "react";
import HttpProtocolSvg from "../../assets/ssl/http_protocol.svg";
import { useScreenContext } from "../../hooks";
import * as React from "react";

const HttpProtocol: React.FC = () => {
  const { isMobile, isTablet } = useScreenContext();

  const { contentWidth, contentAlignment } = useMemo(() => {
    const width = isMobile ? "90vw" : isTablet ? "80vw" : "65vw";
    const alignment = isMobile || isTablet ? "center" : "start";
    return { contentWidth: width, contentAlignment: alignment };
  }, [isMobile, isTablet]);

  return (
    <Stack alignItems={contentAlignment} spacing={1.5}>
      <Box
        sx={{
          flexGrow: 1,
          width: contentWidth,
          height: "3rem",
          border: "1px solid",
          borderRadius: "0.5rem",
          bgcolor: "#678be5",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Typography
          variant="h6"
          fontSize={20}
          sx={{ width: contentWidth, textAlign: "center" }}
        >
          HTTP - Hypertext Transfer Protocol
        </Typography>
      </Box>

      <img
        src={HttpProtocolSvg}
        style={{ marginTop: "0.2rem", width: contentWidth, height: "100%" }}
        alt="HTTP Notes"
      />
    </Stack>
  );
};

export default HttpProtocol;
