import { useMediaQuery, useTheme } from "@mui/material";
import type { Theme } from "@mui/material/styles";

export type ScreenContextReturns = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
};

export const useScreenContext = (): ScreenContextReturns => {
  const theme = useTheme<Theme>();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return { isDesktop, isTablet, isMobile };
};
