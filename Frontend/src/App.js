import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./Components/main/main";
import FlightsDataTable from "./Components/FlightsDataTable/FlightsDataTable";
import Newthread from "./Components/NewThread/NewThread";
import PostBoard from "./Components/PostBoard/PostBoard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/home" element={<Main />}></Route>
          <Route exact path="/videogames" element={<PostBoard />}></Route>

          <Route
            exact
            path="/new-thread-videojuegos"
            element={<Newthread />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
