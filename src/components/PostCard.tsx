import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import type { BlogPostPreview } from "../types/blog";
import { formatDate } from "../utils/formatDate";

interface Props {
  post: BlogPostPreview;
}

/**
 * Blog post card component for list views using MUI
 */
export default function PostCard({ post }: Props) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h5"
          component="h2"
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

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ mb: 2, color: "text.secondary" }}
        >
          <Typography variant="body2" component="time" dateTime={post.date}>
            {formatDate(post.date)}
          </Typography>
          <Typography variant="body2">•</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="body2">{post.readingTime} min read</Typography>
          </Box>
        </Stack>

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
          {post.tags.map((tag) => (
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
  );
}
