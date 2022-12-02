import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListItemAvatar } from "@mui/material";
import Link from "@mui/material/Link";
import ResponsiveAppBar from "../HeaderBar/HeaderBar";
import Footer from "../Footer/Footer";
import { getAllLifestylePosts } from "../../Services/LifestyleService";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import CampaignIcon from "@mui/icons-material/Campaign";
import CreateIcon from "@mui/icons-material/Create";
import { deepPurple, pink, red } from "@mui/material/colors";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
export default function LifestylePostBoard() {
  const style = {
    width: "100%",
    align: "center",
    bgcolor: "black",
    color: "white",
  };
  const [lifestylePosts, setLifestylePosts] = React.useState([]);

  React.useEffect(() => {
    getAllLifestylePosts().then((data) => setLifestylePosts(data));
  }, []);

  const printData = () => {
    console.log(lifestylePosts);
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
        >
          <List
            fullwidth="true"
            sx={{ width: "100%", bgcolor: "background.paper" }}
          >
            {lifestylePosts.map((lifestylePost) => (
              <>
                <ListItem alignItems="flex-start">
                  {lifestylePost.category === "Question" && (
                    <ListItemAvatar className="icono">
                      <Avatar sx={{ bgcolor: deepPurple[500] }}>
                        <QuestionMarkIcon />
                      </Avatar>
                    </ListItemAvatar>
                  )}

                  {lifestylePost.category === "Suggestion" && (
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: red[500] }}>
                        <CampaignIcon />
                      </Avatar>
                    </ListItemAvatar>
                  )}

                  {lifestylePost.category === "Clarification" && (
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: pink[500] }}>
                        <CreateIcon />
                      </Avatar>
                    </ListItemAvatar>
                  )}
                  {lifestylePost.category !== "Clarification" &&
                    lifestylePost.category !== "Suggestion" &&
                    lifestylePost.category !== "Question" && (
                      <ListItemAvatar>
                        <Avatar>
                          <MiscellaneousServicesIcon />
                        </Avatar>
                      </ListItemAvatar>
                    )}
                  <ListItemText
                    primary={lifestylePost.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {lifestylePost.thread}
                        </Typography>
                        {" - " + lifestylePost.body}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
          <br></br>
          <br></br>
          <Link href="/post" underline="hover">
            <Button
              variant="contained"
              sx={style}
              onClick={printData}
              fullWidth
            >
              CREATE POST
            </Button>
          </Link>
        </Container>
      </React.Fragment>
      <Footer></Footer>
    </div>
  );
}
