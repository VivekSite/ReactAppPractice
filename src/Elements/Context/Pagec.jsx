import React from "react";
import { FirstName, LastName } from "./Main";

export const PageC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <p>
                  My name is {fname} {lname}
                </p>
                )
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};
