import React from 'react';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Clock from './Clock';
import Form2 from './Form2';
import ToDoList from './ToDoList';
import IncDecBox from './IncDecBox';

export default function App() { 
  return (
    <>
      <Clock/>
      <Form2/>
      <ToDoList/>
      <IncDecBox/>
    </>
  );
}
