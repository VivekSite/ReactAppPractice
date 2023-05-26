import React, {useContext} from 'react';
import { PageC } from './Pagec';
import { FirstName, LastName } from "./Main";

export const PageB = ()=> {

  const fname = useContext(FirstName)
  const lname = useContext(LastName)

  return (
    <p>
    My name is {fname} {lname}
  </p>
  )
}