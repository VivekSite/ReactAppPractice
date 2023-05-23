import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
  const [inputItem, setInputItem] = useState();
  const [list, setList] = useState([]);

  const inputEvent = (event) => {
    setInputItem(event.target.value);
  };

  const listOfItems = () => {
    setList((oldItems) => {
      return [...oldItems, inputItem];
    });
    setInputItem("");
  };

  const deleteItem = (id) => {
    console.log("Deleting item");

    setList((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "550px",
            height: "80%",
            backgroundColor: "whitesmoke",
            padding: "2rem",
            borderRadius: "1rem",
          }}
        >
          <h1>To Do List</h1>
          <div style={{backgroundColor:'transparent', display:'flex', alignItems:'center' }}>
            <input
              type="text"
              placeholder="Add To Do"
              name="itemName"
              onChange={inputEvent}
              value={inputItem}
              style={{
                color: "black",
                margin: "0.5rem",
                width: "80%",
                textAlign: "center",
                height: "3rem",
                backgroundColor: "transparent",
                borderRadius: "1rem",
                border: "none",
                outline: "none",

              }}
            />
            <button
              onClick={listOfItems}
              style={{
                fontSize: "2rem",
                backgroundColor: "#3b3b3b",
                borderRadius: "50%",
              }}
            >
              +
            </button>
          </div>

          <ol style={{ backgroundColor: "transparent" }}>
            {list.map((item, index) => {
              return (
                <>
                  <ToDoListItem
                    id={index}
                    key={index}
                    item={item}
                    onSelect={deleteItem}
                  />
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
