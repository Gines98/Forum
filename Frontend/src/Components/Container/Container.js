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

export default function Fondo() {
  const [isArrivalActive, setIsArrivalActive] = React.useState(false);
  const [isTripTypeActive, setIsTripTypeActive] = React.useState(false);
  const [isSecondDatePickerActive, setIsSecondDatePickerActive] =
    React.useState(false);
  const [arrivalAirport, setArrivalAirport] = React.useState("");
  const [departureAirport, setDepartureAirport] = React.useState("");
  const [departureDate, setDepartureDate] = React.useState("");
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
          bgcolor: "#0000",
          height: "80vh",
          width: "100vh",
          textlign: "center",
        }}
      >
        <List sx={style} component="nav" aria-label="mailbox folders">
          <Divider />
          <ListItem button divider>
            <ListItemAvatar>
              <ForumIcon></ForumIcon>
            </ListItemAvatar>
            <ListItemText primary="VIDEOJUEGOS" align="center" />
          </ListItem>
          <ListItem button divider>
            <ListItemAvatar>
              <ForumIcon></ForumIcon>
            </ListItemAvatar>
            <ListItemText primary="ESCALADA" align="center" />
          </ListItem>
          <Divider light />
          <ListItem button divider>
            <ListItemAvatar>
              <ForumIcon></ForumIcon>
            </ListItemAvatar>
            <ListItemText primary="LIFESTYLE" align="center" />
          </ListItem>
        </List>
      </Container>
    </React.Fragment>
  );
}
