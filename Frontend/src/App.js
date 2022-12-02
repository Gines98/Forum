import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./Components/main/main";
import FlightsDataTable from "./Components/FlightsDataTable/FlightsDataTable";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/home" element={<Main />}></Route>
          <Route exact path="/create" element={<FlightsDataTable />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
