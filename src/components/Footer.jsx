import { Container, Link, Typography } from "@mui/material";
import React from "react";

function Footer({ title, description }) {
  return (
    <footer
      style={{
        backgroundColor: "#4d4b4b",
        marginTop: "40px",
        padding: "20px 0",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant={"subtitle1"}
          align="center"
          color="textSecondary"
          component={"p"}
        >
          {description}
        </Typography>
        <Typography variant={"body1"} color="textSecondary" align="center">
          Copyright © <Link color="inherit" href="#"></Link>
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
