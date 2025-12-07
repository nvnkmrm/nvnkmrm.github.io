import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { HomePageConfigs } from "./HomeConfig.ts";

const Home = () => {
  const handleCardClick = (route: string) => {
    console.log("Navigating to:", route);
  };

  return (
    <Stack spacing={2} direction="column">
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", padding: 2, paddingBottom: 0 }}
      >
        Tech Notes By Naveen
      </Typography>
      <Grid container spacing={3} sx={{ padding: 2 }} justifyContent="center">
        {HomePageConfigs.map((config, index) => (
          <Grid key={`${config.route}-${index}`}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardActionArea
                onClick={() => handleCardClick(config.route)}
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
    </Stack>
  );
};

export default Home;
