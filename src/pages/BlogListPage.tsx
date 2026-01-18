import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { getAllPosts } from "../lib/posts";
import PostCard from "../components/PostCard";

/**
 * Blog list page - Shows all blog posts using MUI
 */
export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          All Blog Posts
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Exploring web development, one post at a time
        </Typography>
      </Box>

      {posts.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            py: 8,
          }}
        >
          <Typography variant="h5" color="text.secondary" paragraph>
            No blog posts yet. Check back soon!
          </Typography>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            size="large"
          >
            Go Home
          </Button>
        </Box>
      ) : (
        <Stack spacing={4}>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </Stack>
      )}
    </Container>
  );
}
