import React, { Component, useState } from "react";
import '../styles/App.css';
import Data from '../data.js';
import Slides from './Slides.js';

const App = (props) => {
  const [title, setTitle] = useState(props.slides[0]["title"]);
  const [text, setText] = useState(props.slides[0]["text"]);
  const [count, setCount] = useState(0);
  const [disableNext, setDesableNext] = useState(false);
  const [disableprev, setDesableprev] = useState(true);
  const [disableStart, setDesableStart]=useState(true);

  const handleRestart = () => {
    setTitle(props.slides[0]["title"]);
    setText(props.slides[0]["text"]);
    setDesableNext(false);
    setDesableprev(true);
    setDesableStart(true);
  }
  const handlePrev = () => {
    
    setDesableNext(false);
    let slideIndx = count - 1;
    if (slideIndx >= 0) {
      setTitle(props.slides[slideIndx]["title"]);
      setText(props.slides[slideIndx]["text"]);
      setCount(slideIndx);
    }
    if(count===1){
      setDesableprev(true);
      setDesableStart(true);//update
    }

  }

  const handleNext = () => {
    setDesableprev(false);
    setDesableStart(false);
    let slideIndx = count + 1;
    if (slideIndx < props.slides.length) {
      setTitle(props.slides[slideIndx]["title"]);
      setText(props.slides[slideIndx]["text"]);
      setCount(slideIndx);
    }
    if (slideIndx === props.slides.length - 1) {
      setDesableNext(true);
    }

  }
  return (
    <>
      <Slides title={title} text={text}
        disableNext={disableNext}
        disablePrev={disableprev}
        disableStart={disableStart}
        handleRestart={handleRestart}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  )
}


export default App;