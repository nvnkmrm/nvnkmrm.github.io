import HttpProtocolSvg from "../../assets/ssl/http_protocol.svg";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import * as React from "react";

const HttpProtocol: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const contentWidth = isMobile ? "90vw" : isTablet ? "80vw" : "65vw";

  return (
    <Stack alignItems={"center"} spacing={1.5} marginTop={"1rem"}>
      <Typography
        variant="h5"
        sx={{ width: contentWidth, textAlign: "center" }}
      >
        HTTP - Hypertext Transfer Protocol
      </Typography>
      <Divider
        sx={{
          width: contentWidth,
          height: "0.1rem",
          background:
            "linear-gradient(90deg,rgba(235, 236, 240, 1) 8%, rgba(62, 181, 62, 1) 30%, rgba(214, 196, 36, 1) 70%, rgba(235, 236, 240, 1) 92%);",
          border: "none",
        }}
      />
      <img
        src={HttpProtocolSvg}
        style={{ marginTop: "0.5rem", width: contentWidth, height: "100%" }}
        alt={"HTTP Notes"}
      />
    </Stack>
  );
};

export default HttpProtocol;
