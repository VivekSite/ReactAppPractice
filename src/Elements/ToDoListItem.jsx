import React from "react";

const ToDoListItem = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "transparent",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => {
            props.onSelect(props.id)
          }}
          style={{
            width:'3rem',
            height:'3rem',
            fontSize: "1.5rem",
            textAlign:'center',
            backgroundColor: "#3b3b3b",
            borderRadius: "50%",
            marginRight: "3rem",
          }}
        >
          x
        </button>
        <li
          id={props.id}
          key={props.key}
          style={{
            backgroundColor: "transparent",
            margin: "0.5 2rem",
          }}
        >
          {props.item}
        </li>
      </div>
    </>
  );
};

export default ToDoListItem;
