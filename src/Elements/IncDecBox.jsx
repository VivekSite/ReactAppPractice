import React, { useState } from "react";

const IncDecBox = () => {

  var [number, setNumber] = useState(2);

  const increase = () => {
    setNumber(number = number + 1);
    console.log("increased");
  };

  const decrease = () => {
    if(number === 0) {
      return window.alert('you have reached the limit\n');
    }else{
      setNumber(number = number - 1);
    }
    return console.log("decreased");
  };

  return (
    <>
      <div className="main_container">
        <div className="centered_container">
          <h1 style={{textAlign:'center', margin:'1rem', fontSize:'2rem'}}>{number}</h1>
          <div style={{backgroundColor:'transparent', display:'flex', justifyContent:'space-evenly'}}>
            <button className="myBtn" onClick={increase}>+</button>
            <button className="myBtn" onClick={decrease}>-</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncDecBox;
