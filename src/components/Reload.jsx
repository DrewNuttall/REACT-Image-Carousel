import React, { useState, useEffect } from "react";
import { BsArrowClockwise } from "react-icons/bs";

const reload = () => {
  location.reload();
};

function Reload() {
  const [showComponent, setshowComponent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setshowComponent(true);
    }, 1500);
  }, []);
  return (
    <>
      {showComponent && (
        <div className="reload" onClick={reload}>
          <span className="bold_italic">Click HERE</span> to Load new images
          &nbsp;&nbsp;
          <BsArrowClockwise />
        </div>
      )}
    </>
  );
}

export default Reload;
