import React from "react";
import Banner from "./banner/Banner";
import Grid from "./grid/Grid";
import Header from "./header/Header";

export default function Main() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Grid></Grid>
    </div>
  );
}
