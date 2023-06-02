import React, { useState } from "react";
import "./Clock.css";

const Clock = () => {
  let currTime = new Date().toLocaleTimeString("en");
  const [count, currentCount] = useState(currTime);

  const update = () => {
    currTime = new Date().toLocaleTimeString("en");
    currentCount(currTime);
    // console.log("Time updated");
  };

  setInterval(update, 1000);

  return (
    <>
      <div style={{height:'100vh'}}>
        <div className="Time_box">
          <h1 className="Time">{count}</h1>
          {/* <button onClick={update}>Update Time</button> */}
        </div>
      </div>
    </>
  );
};

export default Clock;
