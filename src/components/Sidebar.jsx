import { Grid, Link, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

function Sidebar({ socials, archives, description, title }) {
  const AboutBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
  }));
  const SidebarSection = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(3),
  }));

  return (
    <Grid item xs={12} md={4}>
      <AboutBox elevation={0}>
        <Typography variant={"h6"} gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </AboutBox>
      <SidebarSection variant={"h6"} gutterBottom>
        Archives
      </SidebarSection>

      {archives.map((archive, idx) => (
        <Link display={"block"} variant={"body1"} href={archive.url} key={idx}>
          {archive.title}
        </Link>
      ))}

      <SidebarSection variant="h6" gutterBottom>
        Social
      </SidebarSection>

      {socials.map((network, idx) => (
        <Link display="block" variant="body1" href="#" key={idx}>
          <Grid container direction={"row"} spacing={1} alignContent={"center"}>
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

export default Sidebar;
