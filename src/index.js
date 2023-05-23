import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Elements/App';


// ReactDOM.render(<h1>Hello React</h1>,
//     document.getElementById("root"));

// ReactDOM.render(    //jsx when redered
//     React.createElement('h1',null,"Hello World"),
//     document.getElementById("root")
// );

// let h1 = document.createElement("h1");
// h1.innerHTML = "Hi Kamine";
// document.getElementById("root").appendChild(h1);

// ================================================================
//                 using multiple jsx elements
// ================================================================


// console.log(`hi friends my name is ${name}`)      //template leterals
// ReactDOM.render(                                  // for older version 
//     <>
//         <h1>Hello {name}</h1>
//         <p>hi how are you what do you want to beocome</p>
//     </>,
//     document.getElementById("root")
// );


// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const day = ["mon","tue","wed","thu","fri","sat","sun"];


// new Date(year, month, day, hours, minutes, seconds)
// const date = new Date();
// const currDate = date.toLocaleDateString();
// const currTime = date.toLocaleTimeString();
// console.log(currDate);
// console.log(currTime);

// let name = 'Vivek Sahani';
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading = {               //for internal css we have to make a object of properties
//     color : 'orange',
//     backgroundColor : 'black'
// }

// root.render(
//     <>
//         <h1 style={heading} >Hello {name}, This is internal css</h1>
//         <h1 style={{color:'yellowgreen',backgroundColor:'aqua'}}>This is inline css</h1> {/*for inline css we have to pass an object */}
        
        
//         {/* <p>hi how are you what do you want to beocome</p>
//         <p><strong>Date :</strong>{` ${day[date.getDay()]} ${date.getDay()}/${month[date.getMonth()]}/${date.getFullYear()}`}</p>
//         <p><strong>Time :</strong>{date.toLocaleString('en-US', { hour: 'numeric',minute:'2-digit',second:'2-digit', hour12: true })}</p> */}
//     </>
// );


// const greet_box = {
//     position:'relative',
//     top:'50%',
//     left:'50%',
//     transform:'translate(-50%,-50%)',
//     borderRadius:'3rem',
//     width:'500px',
//     height:'100px',
//     backgroundColor:'grey',
//     color:'aqua',
//     display:'flex',
//     justifyContent:'center',
//     alignItems: 'center',
// }

// let date = new Date();
// let hour = date.getHours();
// var greeting = '';
// const cssStyle = { fontSize:'1.5rem'};



// if(hour >= 15 && hour <19){
//     greeting = 'Good Evening';
//     cssStyle.color = 'green';
// }else if(hour >= 19 && hour <24 || (hour >= 1 && hour < 4)){
//     greeting = 'Good Night';
//     cssStyle.color = 'black';
// }else if(hour >= 4 && hour <= 11){
//     greeting = 'Good Morning';
//     cssStyle.color = 'white';
// }else if(hour > 11 && hour < 15){
//     greeting = 'Good Afternoon';
//     cssStyle.color = 'red';
// }



// root.render(
//     <>
//         <div style={{backgroundColor:'black', width:'100vw', height:'100vh'}}>
//             <div style={greet_box}>
//                 <h1 style={{fontSize:'1.5rem'}}>Hello sir, <span style={cssStyle}>{greeting}</span></h1>
//             </div>
//         </div>
//     </>
// );








// ================================================================================================================
// ================================================================================================================

//                                         Practice Projects Starts

// ================================================================================================================
// ================================================================================================================




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
































