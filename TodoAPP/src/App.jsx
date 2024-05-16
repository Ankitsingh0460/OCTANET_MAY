import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import ErrorMsg from "./components/Errormsg";
import { TodoItemContext } from "./store/TodoItemContext";

function App() {
  const todoItems = [

  ];

  //reder data 
  const [currentValue, setValueMethod] = useState(todoItems)

  const handleNewItem = (nameValue, dateValue) => {

    const setNewData = [...currentValue, {
      name: nameValue,
      dueDate: dateValue
    }];
    setValueMethod(setNewData);
  }
  // for delete
  const onDeleteClick = (todoName) => {
    const newTodoItem = currentValue.filter((item) => item.name !== todoName);
    setValueMethod(newTodoItem);

  }

  return (


    <TodoItemContext.Provider value={currentValue}>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={(nameValue, dateValue) => handleNewItem(nameValue, dateValue)} />
        <TodoItems onDeleteClick={onDeleteClick}></TodoItems>
        <ErrorMsg ></ErrorMsg>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
