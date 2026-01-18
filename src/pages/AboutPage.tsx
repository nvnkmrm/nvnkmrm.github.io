import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

/**
 * About page - Information about the blog/author using MUI
 */
export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
        About This Blog
      </Typography>

      <Stack spacing={4}>
        <Paper elevation={0} sx={{ p: 4, bgcolor: "background.default" }}>
          <Typography variant="h4" gutterBottom>
            Hello! 👋
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to my developer blog. I'm passionate about building modern
            web applications and sharing what I learn along the way.
          </Typography>
        </Paper>

        <Paper elevation={0} sx={{ p: 4, bgcolor: "background.default" }}>
          <Typography variant="h4" gutterBottom>
            What I Write About
          </Typography>
          <List>
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText primary="React and modern JavaScript frameworks" />
            </ListItem>
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText primary="TypeScript best practices" />
            </ListItem>
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText primary="Build tools and development workflows" />
            </ListItem>
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText primary="Clean code and software architecture" />
            </ListItem>
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText primary="Performance optimization" />
            </ListItem>
          </List>
        </Paper>

        <Paper elevation={0} sx={{ p: 4, bgcolor: "background.default" }}>
          <Typography variant="h4" gutterBottom>
            Tech Stack
          </Typography>
          <Typography variant="body1" paragraph>
            This blog is built with:
          </Typography>
          <List>
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText primary="React 19" secondary="UI framework" />
            </ListItem>
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText primary="TypeScript" secondary="Type safety" />
            </ListItem>
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText
                primary="Material-UI"
                secondary="Component library"
              />
            </ListItem>
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText primary="Vite" secondary="Build tool" />
            </ListItem>
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText primary="React Router" secondary="Routing" />
            </ListItem>
            <ListItem disablePadding sx={{ py: 0.5 }}>
              <ListItemText
                primary="React Markdown"
                secondary="Content rendering"
              />
            </ListItem>
          </List>
        </Paper>

        <Paper elevation={0} sx={{ p: 4, bgcolor: "background.default" }}>
          <Typography variant="h4" gutterBottom>
            Connect
          </Typography>
          <Typography variant="body1" paragraph>
            Feel free to reach out if you have questions, suggestions, or just
            want to chat about web development!
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.primary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <GitHubIcon />
              <Typography>GitHub</Typography>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.primary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <TwitterIcon />
              <Typography>Twitter</Typography>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.primary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <LinkedInIcon />
              <Typography>LinkedIn</Typography>
            </Link>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}
