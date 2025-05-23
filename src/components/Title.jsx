import React, { useState, useEffect } from "react";

function Title() {
  const [showComponent, setshowComponent] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setshowComponent(true);
    }, 1500);
  }, []);
  return (
    <>
      {showComponent && (
        <h1 className="title">
          Image Carousel
          <br />
          <br />
        </h1>
      )}
    </>
  );
}

export default Title;
