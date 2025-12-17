import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";
import { type BlogsListConfig, HomePageConfigs } from "./blogsListConfig.ts";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const navigate = useNavigate();

  const handleCardClick = (config: BlogsListConfig) => {
    navigate(config.route, {
      state: {
        title: config.title,
        imageSrc: config.imageUrl,
      },
    });
  };

  return (
    <Box sx={{ padding: 2, maxWidth: "50rem", margin: "0 auto" }}>
      {HomePageConfigs.map((config, index) => (
        <Card
          key={`${config.route}-${index}`}
          sx={{ marginBottom: "0.5rem", display: "flex" }}
        >
          <CardActionArea
            onClick={() => handleCardClick(config)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ padding: 2, flex: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {config.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {config.description}
              </Typography>
            </Box>
            <CardMedia
              component="img"
              alt={config.title}
              sx={{ width: 200, height: 140, objectFit: "cover" }}
              image={config.imageUrl}
            />
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default BlogList;
