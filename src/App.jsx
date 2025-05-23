import React, { useState, useEffect } from "react";
import "./App.css";
import { Carousel } from "./components/Carousel";
import { slides } from "./data/CarouselData.json";
import Title from "./components/Title.jsx";
import Reload from "./components/Reload.jsx";

function App() {
  const [showComponent, setshowComponent] = useState(false);
  useEffect(() => {
    {
      setTimeout(() => {
        setshowComponent(true);
      }, 1500);
      console.log("app.js at useEffect: ");
    }
    //titleArea.style.display = "block";
    //reloadArea.style.display = "block";
  }, []);

  return (
    <>
      {showComponent && (
        <div className="App">
          <Title />
          <Carousel data={slides} />
          <Reload />
        </div>
      )}
    </>
  );
}

export default App;
