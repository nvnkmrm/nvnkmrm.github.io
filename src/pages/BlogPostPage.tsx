import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { getPostBySlug } from "../lib/posts";
import { formatDate } from "../utils/formatDate";
import TagList from "../components/TagList.tsx";
import CodeBlock from "../components/CodeBlock.tsx";

/**
 * Individual blog post page using MUI
 * Renders markdown content with syntax highlighting
 */
export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper elevation={0} sx={{ p: { xs: 3, md: 5 } }}>
        <Box component="article">
          <Box component="header" sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              {post.title}
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 3, color: "text.secondary" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <PersonIcon fontSize="small" />
                <Typography variant="body2">By {post.author}</Typography>
              </Box>
              <Typography variant="body2">•</Typography>
              <Typography variant="body2" component="time" dateTime={post.date}>
                {formatDate(post.date)}
              </Typography>
              <Typography variant="body2">•</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AccessTimeIcon fontSize="small" />
                <Typography variant="body2">
                  {post.readingTime} min read
                </Typography>
              </Box>
            </Stack>

            <Typography
              variant="h6"
              color="text.secondary"
              paragraph
              sx={{ fontWeight: 400 }}
            >
              {post.description}
            </Typography>

            <TagList tags={post.tags} />
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box
            sx={{
              "& h1, & h2, & h3, & h4, & h5, & h6": {
                mt: 4,
                mb: 2,
                fontWeight: 600,
              },
              "& p": {
                mb: 2,
                lineHeight: 1.7,
              },
              "& ul, & ol": {
                mb: 2,
                pl: 3,
              },
              "& pre": {
                mb: 2,
                borderRadius: 1,
              },
              "& code": {
                fontSize: "0.9em",
              },
              "& a": {
                color: "primary.main",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              },
            }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
              components={{
                code: CodeBlock,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box component="footer">
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: 600 }}
              >
                Tags:
              </Typography>
              <TagList tags={post.tags} />
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
