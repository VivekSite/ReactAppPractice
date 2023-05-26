import React, { createContext, useState, useEffect } from "react";
// import { PageA } from "./PageA";


const FirstName = createContext(); // first creating context
const LastName = createContext();

const Main = () => {

  const [number, setNumber] = useState(0);
  useEffect(() => {
    document.title = `You clicked Me ${number} Times`;
  })
  
  return (
    <>
      {/* // {second we have to create Provider}  and third we can create consumer to use this values */}
      {/* <FirstName.Provider value={"Vivek"}>
        <LastName.Provider value={"Kumar"}>
          <PageA />
        </LastName.Provider>
      </FirstName.Provider> */}

      <button onClick={()=>{setNumber(number+1)}}>Click Me {number}</button>


    </>
  );
};

export default Main; //
export { FirstName, LastName}; //
