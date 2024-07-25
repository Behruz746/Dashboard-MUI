import React from "react";
import { styled } from "@mui/system";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  CardMedia,
  Typography,
} from "@mui/material";

function PostCard({ post }) {
  const CardEl = styled(Card)(() => ({
    display: "flex",
  }));

  const CardMediaStyle = styled(CardMedia)(() => ({ width: 160 }));

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component={"a"} href={`#`}>
        <CardEl>
          <div style={{ flex: 1 }}>
            <CardContent>
              <Typography component={"h2"} variant="h5">
                {post.title}
              </Typography>
              <Typography variant={"subtitle1"} color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant={"subtitle1"} paragraph>
                {post.description}
              </Typography>
              <Typography variant={"subtitle1"} style={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>

          <CardMediaStyle
            // Media
            sx={{ display: { xs: "none", sm: "block" } }}
            image={post.image}
            title={post.imageText}
          />
        </CardEl>
      </CardActionArea>
    </Grid>
  );
}

export default PostCard;
