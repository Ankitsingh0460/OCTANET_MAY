import { useContext } from "react";
import { TodoItemContext } from "../store/TodoItemContext";

function ErrorMsg() {

  const currentValue = useContext(TodoItemContext);

  return (currentValue.length === 0 && <h3>Enjoy Your Day</h3>)
}

export default ErrorMsg;