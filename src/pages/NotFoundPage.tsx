import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

/**
 * 404 Not Found page using MUI
 */
export default function NotFoundPage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          textAlign: "center",
          py: 8,
        }}
      >
        <ErrorOutlineIcon
          sx={{
            fontSize: 120,
            color: "primary.main",
            mb: 2,
          }}
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: "6rem",
            fontWeight: 700,
            color: "text.secondary",
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 500 }}
        >
          Oops! The page you're looking for doesn't exist. It might have been
          moved or deleted.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            size="large"
          >
            Go Home
          </Button>
          <Button
            component={RouterLink}
            to="/blog"
            variant="outlined"
            size="large"
          >
            Browse Blog
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
