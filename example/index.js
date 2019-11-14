import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "../lib/carousel";

const images = [
  "https://via.placeholder.com/350x350",
  "https://via.placeholder.com/350x350",
  "https://via.placeholder.com/350x350"
];

function App() {
  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
