import { useState, useRef } from "react";
import { GrAddCircle } from "react-icons/gr";


function AddTodo({ onNewItem }) {
  const nameValues = useRef();
  const dateValues = useRef();

  const onHandleButtonClicked = (event) => {
    event.preventDefault();
    const nameValue = nameValues.current.value;
    const dateValue = dateValues.current.value;

    nameValues.current.value = "";
    dateValues.current.value = "";
    onNewItem(nameValue, dateValue);
  }


  return (

    <div className="container text-center">
      <form className="row kg-row" onSubmit={onHandleButtonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" ref={nameValues} />
        </div>
        <div className="col-4 " >
          <input type="date" className="inputt" ref={dateValues} />
        </div>
        <div className="col-2">
          <button type="submitt" className="btn btn-success kg-button"

          >
            <GrAddCircle />

          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
