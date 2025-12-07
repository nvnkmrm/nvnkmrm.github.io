import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
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
    <Grid container spacing={3} sx={{ padding: 2 }} justifyContent="center">
      {HomePageConfigs.map((config, index) => (
        <Grid key={`${config.route}-${index}`}>
          <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardActionArea
              onClick={() => handleCardClick(config)}
              sx={{ height: "100%" }}
            >
              <CardMedia
                component="img"
                alt={config.title}
                height="140"
                image={config.imageUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {config.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {config.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogList;
