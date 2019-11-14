import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "../lib/carousel";

const images = [
  <div>
    <img src="https://via.placeholder.com/350x350" />
  </div>,
  <div>
    <img src="https://via.placeholder.com/350x350" />
  </div>,
  <div>
    <img src="https://via.placeholder.com/350x350" />
  </div>
];

function App() {
  return (
    <div>
      <Carousel items={images} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
