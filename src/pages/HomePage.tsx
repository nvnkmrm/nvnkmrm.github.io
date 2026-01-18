import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { getAllPosts } from "../lib/posts";
import { formatDate } from "../utils/formatDate";

/**
 * Home page - Landing page with featured content using MUI
 */
export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #3CAB6A 33%, #08B3E5 100%)",
          color: "white",
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
          >
            Welcome to Naveen’s TechNote
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.95,
              fontWeight: 400,
            }}
          >
            A personal blog on learning from software development.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              component={RouterLink}
              to="/blog"
              variant="contained"
              size="large"
              sx={{
                bgcolor: "white",
                color: "primary.main",
                "&:hover": {
                  bgcolor: "grey.100",
                },
              }}
            >
              Read Blog
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              variant="outlined"
              size="large"
              sx={{
                borderColor: "white",
                color: "white",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              About Me
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Recent Posts Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ mb: 4, textAlign: "center" }}
        >
          Recent Posts
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {recentPosts.map((post) => (
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  <Typography
                    variant="body2"
                    component="time"
                    dateTime={post.date}
                  >
                    {formatDate(post.date)}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <AccessTimeIcon fontSize="small" />
                    <Typography variant="body2">
                      {post.readingTime} min read
                    </Typography>
                  </Box>
                </Stack>

                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  <Link
                    component={RouterLink}
                    to={`/blog/${post.slug}`}
                    underline="hover"
                    color="text.primary"
                    sx={{
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {post.title}
                  </Link>
                </Typography>

                <Typography variant="body1" color="text.secondary" paragraph>
                  {post.description}
                </Typography>

                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mb: 2 }}
                >
                  {post.tags.slice(0, 3).map((tag) => (
                    <Chip key={tag} label={tag} size="small" />
                  ))}
                </Stack>

                <Link
                  component={RouterLink}
                  to={`/blog/${post.slug}`}
                  underline="none"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            component={RouterLink}
            to="/blog"
            variant="outlined"
            size="large"
          >
            View All Posts
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
