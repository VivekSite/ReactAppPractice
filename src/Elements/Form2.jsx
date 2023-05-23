import React, { useState } from "react";

const Form2 = () => {
  const [Name, setName] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target; //object destructuring

    setName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };

      //   if (name === "name") {
      //     return {
      //       name: value,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //       message: preValue.message,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       name: preValue.name,
      //       email: value,
      //       phone: preValue.phone,
      //       message: preValue.message,
      //     };
      //   } else if (name === "phone") {
      //     return {
      //       name: preValue.name,
      //       email: preValue.email,
      //       phone: value,
      //       message: preValue.message,
      //     };
      //   } else if (name === "message") {
      //     return {
      //       name: preValue.name,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //       message: value,
      //     };
      //   }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Submitted");
  };

  return (
    <>
      <div className="main_container">
        <div className="centered_container" style={{width:'550px'}}>
          <h1>Hello {Name.name}</h1>
          <h1>{Name.email}</h1>
          <h1>{Name.phone}</h1>
          <h1>{Name.message}</h1>

          <form onSubmit={onSubmits} style={{display:'flex', flexDirection:'column', backgroundColor:'transparent'}}>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              onChange={inputEvent}
              value={Name.name}
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={inputEvent}
              value={Name.email}
            />
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              name="phone"
              onChange={inputEvent}
              value={Name.phone}
            />

            <input
              type="text"
              placeholder="Enter Your Message"
              name="message"
              onChange={inputEvent}
              value={Name.message}
            />
            <button type="submit" className="myBtn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form2;
