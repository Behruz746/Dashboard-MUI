import React from "react";
import { styled } from "@mui/system";
import { Container, createTheme, ThemeProvider, Grid } from "@mui/material";
import {
  FeaturedPost,
  Header,
  PostCard,
  Sidebar,
  Main,
  Footer,
} from "./components";
import { featuredPosts, sidebar } from "./data/data";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const MainGrid = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(3),
  }));

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post, idx) => (
            <PostCard post={post} key={idx} />
          ))}
        </Grid>
        <MainGrid container spacing={5}>
          <Main title={"From the firehose"} />
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            socials={sidebar.social}
          />
        </MainGrid>
      </Container>
      <Footer
        title={"Footer"}
        description={"Something here to give the footer a purpose"}
      />
    </ThemeProvider>
  );
}

export default App;
