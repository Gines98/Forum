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

export default function Fondo() {
  const [category, setCategory] = React.useState("");
  const [appropiateTittle, setAppropiateTittle] = React.useState(false);
  const [appropiateBody, setAppropiateBody] = React.useState(false);
  const [file, setFile] = React.useState();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const checkWordsTittle = (event) => {
    let text = event.target.value;
    let words = text.split(" ");
    setAppropiateTittle(true);
    for (let i = 0; i < words.length; i += 1) {
      // console.log(words[i]);
      if (BannedWords.includes(words[i].toLowerCase())) {
        setAppropiateTittle(false);
      }
    }
    console.log(words);
    if (words.length === 1 && words[0] === "") {
      setAppropiateTittle(false);
    }
  };

  const checkWordsBody = (event) => {
    let text = event.target.value;
    let words = text.split(" ");
    setAppropiateBody(true);
    for (let i = 0; i < words.length; i += 1) {
      // console.log(words[i]);
      if (BannedWords.includes(words[i])) {
        setAppropiateBody(false);
      }
    }
    if (words.length === 0 && words[0] === "") {
      setAppropiateBody(false);
    }
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
                  <MenuItem value={0}>Question</MenuItem>
                  <MenuItem value={1}>Suggestion</MenuItem>
                  <MenuItem value={2}>Clarification</MenuItem>
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
          <h2>Add Image:</h2>
          <input type="file" onChange={handleFileChange} />
          <img src={file} />

          <br></br>
          <br></br>

          {(appropiateBody && appropiateTittle) === true ? (
            <Stack direction="row" spacing={2} align="left">
              <Button variant="contained" color="success">
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
