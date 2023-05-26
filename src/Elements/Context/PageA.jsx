import React,{useEffect, useState} from 'react';
import { PageB } from './PageB';

export const PageA = ()=> {

  const [num, setNum] = useState(0);

  useEffect(()=> {                          //useeffect will be called when the state changes
    alert('useEffect  Done its Work');
  }, [num])     //because of this square bracket useeffect will be called once when page is rendered 
                //because of this variable useEffect will be called when the variable changes its state
  return (
    <div>
      <button onClick={()=>{setNum(num+1)}}>{num}</button>
      <PageB/>
    </div>
  )
}