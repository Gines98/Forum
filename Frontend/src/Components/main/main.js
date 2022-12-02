import React from "react";

import Fondo from "../Container/Container";
import ResponsiveAppBar from "../HeaderBar/HeaderBar";
import Footer from "../Footer/Footer";
export default function Main() {
  return (
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>

      <Fondo></Fondo>

      <Footer></Footer>
    </div>
  );
}
