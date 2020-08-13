import React from "react";
import { render } from "react-dom";
import LineDemo from "./LineDemo";
import StackedDemo from "./stackedBar";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <StackedDemo />
  </div>
);

render(<App />, document.getElementById("root"));
