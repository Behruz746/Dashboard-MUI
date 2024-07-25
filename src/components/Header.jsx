import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideDrower from "./SideDrow";

function Header() {
  const TitleTypography = styled(Typography)(() => ({
    flexGrow: 1,
  }));
  const TaglineToolbar = styled(Toolbar)(() => ({
    fontSize: 20, // 20px
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  }));

  return (
    <>
      <Toolbar>
        <SideDrower>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </SideDrower>

        <TitleTypography variant="h6">Blogging web site</TitleTypography>

        <IconButton color="inherit">
          <Badge badgeContent={5} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <TaglineToolbar className={""}>
        Express your emotions through words
      </TaglineToolbar>
    </>
  );
}

export default Header;
