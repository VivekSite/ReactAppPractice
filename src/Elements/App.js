import React, { useState } from 'react';
import './App.css';
import Cloak from './Clock.jsx';
import Form from './Forms.jsx';
import Form2 from './Form2.jsx';
import ToDoList from './ToDoList';
import IncDecBox from './IncDecBox';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() { 
  return (
    <>
      <Cloak/>
      {/* <Form/> */}
      <Form2/>
      <ToDoList/>
      <IncDecBox/>

    </>
  );
}

export default App;