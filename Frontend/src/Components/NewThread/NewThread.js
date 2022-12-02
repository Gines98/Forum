import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./NewThreadStyles.css";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ResponsiveAppBar from "../HeaderBar/HeaderBar";
import Footer from "../Footer/Footer";
import { TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import BannedWords from "../../bannedWords.json";
import { createPost } from "../../Services/PostService";

export default function Fondo() {
  const [appropiateTittle, setAppropiateTittle] = React.useState(false);
  const [appropiateBody, setAppropiateBody] = React.useState(false);
  const [file, setFile] = React.useState();

  const [title, settitle] = React.useState(false);
  const [category, setCategory] = React.useState("");
  const [body, setbody] = React.useState(false);

  const creaPost = () => {
    let data = {};
    data.thread = "videogames";
    data.title = title;
    data.category = category;
    data.body = body;
    createPost(data);
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const checkWordsTittle = (event) => {
    let text = event.target.value;
    let words = text.split(" ");
    setAppropiateTittle(true);
    for (let i = 0; i < words.length; i += 1) {
      if (BannedWords.includes(words[i].toLowerCase())) {
        setAppropiateTittle(false);
      }
    }
    if (words.length === 1 && words[0] === "") {
      setAppropiateTittle(false);
    }
    settitle(text);
  };

  const checkWordsBody = (event) => {
    let text = event.target.value;
    let words = text.split(" ");
    setAppropiateBody(true);
    for (let i = 0; i < words.length; i += 1) {
      if (BannedWords.includes(words[i])) {
        setAppropiateBody(false);
      }
    }
    if (words.length === 0 && words[0] === "") {
      setAppropiateBody(false);
    }
    setbody(text);
  };

  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Divider>
        <h2>Create Post</h2>
      </Divider>
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="m"
          sx={{
            marginTop: "1%",
            bgcolor: "#0000",
            height: "80vh",
            width: "100vh",
            textlign: "center",
          }}
        >
          <TextField
            fullWidth
            id="outlined-textarea"
            label="Title"
            multiline
            onChange={checkWordsTittle}
            name="title"
          />
          <br />
          <br />
          <div>
            {appropiateTittle ? (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value={"Question"}>Question</MenuItem>
                  <MenuItem value={"Suggestion"}>Suggestion</MenuItem>
                  <MenuItem value={"Clarification"}>Clarification</MenuItem>
                </Select>
              </FormControl>
            ) : null}
          </div>
          <br></br>
          <br></br>
          {category !== "" && appropiateTittle === true ? (
            <TextField
              id="outlined-multiline-static"
              label="Post body..."
              multiline
              rows={8}
              fullWidth
              onChange={checkWordsBody}
            />
          ) : null}
          <br></br>
          <br></br>
          {(appropiateBody && appropiateTittle) === true ? (
            <>
              <h2>Add Image:</h2>
              <input type="file" onChange={handleFileChange} />
              <img src={file} width="128" height="128" alt="" />
              <br></br>
              <br></br>
            </>
          ) : null}

          {(appropiateBody && appropiateTittle) === true ? (
            <Stack direction="row" spacing={2} align="left">
              <Button
                variant="contained"
                color="success"
                onClick={() => creaPost()}
              >
                CREATE
              </Button>
            </Stack>
          ) : (
            <Stack direction="row" spacing={2} align="left">
              <Button variant="contained" color="primary" disabled>
                CREATE
              </Button>
            </Stack>
          )}

          {/* <Divider>
            <h2>Post Preview</h2>
          </Divider> */}
        </Container>
      </React.Fragment>

      <Footer></Footer>
    </div>
  );
}
