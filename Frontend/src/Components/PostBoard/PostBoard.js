import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListItemAvatar } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import Link from "@mui/material/Link";
import ResponsiveAppBar from "../HeaderBar/HeaderBar";
import Footer from "../Footer/Footer";

export default function PostBoard() {
  const style = {
    width: "100%",
    align: "center",
    bgcolor: "black",
    color: "white",
  };
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
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
        ></Container>
      </React.Fragment>
      <Footer></Footer>
    </div>
  );
}
