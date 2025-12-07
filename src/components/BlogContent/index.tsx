import { Stack, Typography, Box } from "@mui/material";
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
    <Stack alignItems={"center"} spacing={1.5}>
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
          {title}
        </Typography>
      </Box>

      <img
        src={imageSrc}
        style={{ marginTop: "0.2rem", width: contentWidth, height: "100%" }}
        alt={title}
      />
    </Stack>
  );
};

export default BlogContent;
