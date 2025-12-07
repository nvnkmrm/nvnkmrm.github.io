import { Box, Typography } from "@mui/material";
import BlogList from "../components/BlogList";

const Home = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", padding: 2, paddingBottom: 0 }}
      >
        Tech Notes By Naveen
      </Typography>
      <BlogList />
    </Box>
  );
};

export default Home;
