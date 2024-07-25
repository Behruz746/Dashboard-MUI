import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  styled,
} from "@mui/material";
import React from "react";

function FeaturedPost() {
  // for Card tag
  const CoverCard = styled(Card)(() => ({
    backgroundImage:
      "url(https://media.lulop.com/media/getimage/l/211760/87/640,480)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "35px 25px",
  }));
  // for Typography taf
  const TitleTypography = styled(Typography)(() => ({
    fontSize: 40, // 40px
    fontFamily: "Montserrat",
  }));
  // for CardContent tag
  const TextContainer = styled(CardContent)(() => ({
    color: "white",
  }));
  // for Button tag
  const MoreButton = styled(Button)(() => ({}));

  return (
    // card
    <CoverCard>
      {/* card contnet */}
      <TextContainer>
        <TitleTypography gutterBottom>
          Title of longer featured blog post
        </TitleTypography>
        <Typography variant="h5">
          Multiple lines of text that form the lede, informing new readers
          quickiy and effciently about what's most interesting in this post's
          contents
        </Typography>

        <CardActions>
          <MoreButton variant="text">Read More...</MoreButton>
        </CardActions>
      </TextContainer>
    </CoverCard>
  );
}

export default FeaturedPost;
