import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/**
 * Site footer with copyright and links using MUI components
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: "background.paper",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Naveen’s TechNote. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="https://github.com/nvnkmrm"
              target="_blank"
              rel="noopener noreferrer"
              color="text.secondary"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover": { color: "primary.main" },
              }}
            >
              <GitHubIcon fontSize="small" />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/naveen-kumar-5a6960119/"
              target="_blank"
              rel="noopener noreferrer"
              color="text.secondary"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                "&:hover": { color: "primary.main" },
              }}
            >
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
