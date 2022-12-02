import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/main/main";
import Newthread from "./Components/NewThread/NewThread";
import VideogamePostBoard from "./Components/VideogamePostBoard/VideogamePostBoard";
import ClimbingPostBoard from "./Components/ClimbingPostBoard/ClimbingPostBoard";
import LifestylePostBoard from "./Components/LifestylePostBoard/LifestylePostBoard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/home" element={<Main />}></Route>
          <Route
            exact
            path="/list/videogames"
            element={<VideogamePostBoard />}
          ></Route>
          <Route
            exact
            path="/list/climbing"
            element={<ClimbingPostBoard />}
          ></Route>
          <Route
            exact
            path="/list/lifestyle"
            element={<LifestylePostBoard />}
          ></Route>
          <Route exact path="/post/" element={<Newthread />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
