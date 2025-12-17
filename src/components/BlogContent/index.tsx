import { Stack, Typography, Box, Divider } from "@mui/material";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useScreenContext } from "../../hooks";
import * as React from "react";

interface RouteState {
  title?: string;
  imageSrc?: string;
}

const BlogContent: React.FC = () => {
  const { isMobile, isTablet } = useScreenContext();
  const location = useLocation();
  const state = location.state as RouteState;

  const title = state?.title;
  const imageSrc = state?.imageSrc;

  const { contentWidth } = useMemo(() => {
    const width = isMobile ? "90vw" : isTablet ? "80vw" : "65vw";
    return { contentWidth: width };
  }, [isMobile, isTablet]);

  return (
    <Stack alignItems={"center"} spacing={1.5} sx={{ margin: "0 auto" }}>
      <Box pt={3}>
        <Typography
          variant="h4"
          sx={{
            width: contentWidth,
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </Typography>
      </Box>

      <Divider sx={{ width: contentWidth }} />

      <img
        src={imageSrc}
        style={{ marginTop: "0.2rem", width: contentWidth, height: "100%" }}
        alt={title}
      />
    </Stack>
  );
};

export default BlogContent;
