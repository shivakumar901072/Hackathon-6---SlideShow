import React, {Component, useState} from "react";
import slides from "../data";
import '../styles/App.css';

const App = () => {
  return (
    <div>
    <slides>
    <h1>{slides.title}</h1>
    <p>{slides.text}</p>
    <button data-testid="button-restart" onClick={slideshow()} disabled>Restart</button>
    <button data-testid="button-next" onClick={slideshow()} disabled>Next</button>
    <button data-testid="button-prev" onClick={slideshow()} disabled>Prev</button>
    </slides>
    </div>
  )
}


export default App;
