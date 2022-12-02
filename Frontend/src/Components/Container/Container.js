import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./ContainerStyles.css";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListItemAvatar } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import Link from "@mui/material/Link";

export default function Fondo() {
  const style = {
    width: "100%",
    align: "center",
    bgcolor: "black",
    color: "white",
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="m"
        sx={{
          marginTop: "5%",
          bgcolor: "#ffff",
          height: "80vh",
          width: "100vh",
          textlign: "center",
        }}
      >
        <List component="nav" aria-label="mailbox folders">
          <Divider />
          <Link href="/new-thread-videojuegos" underline="hover">
            <ListItem button divider borderRadius="10px" sx={style}>
              <ListItemAvatar>
                <ForumIcon></ForumIcon>
              </ListItemAvatar>
              <ListItemText
                primary="VIDEOGAMES"
                align="center"
                className="element"
              />
            </ListItem>
            <br></br>
          </Link>
          <ListItem button divider sx={style}>
            <ListItemAvatar>
              <ForumIcon></ForumIcon>
            </ListItemAvatar>
            <ListItemText primary="CLIMBING" align="center" />
          </ListItem>
          <br></br>
          <Divider light />
          <ListItem button divider sx={style}>
            <ListItemAvatar>
              <ForumIcon></ForumIcon>
            </ListItemAvatar>
            <ListItemText primary="LIFESTYLE" align="center" />
          </ListItem>
          <br></br>
        </List>
      </Container>
    </React.Fragment>
  );
}
