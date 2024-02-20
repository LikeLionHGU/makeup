import React from "react";
import Banner from "./banner/Banner";
import Grid from "./grid/Grid";
import Header from "./header/Header";
import "./Main.css";

export default function Main() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Grid></Grid>
    </div>
  );
}
