import React from "react";

export default function TodoForm(props) {
  console.log("TODOFORM - PROPS", props);
  return (
    <div>
      <form>
        <input
          type="text"
          value={props.todoInput}
          name="todoInput"
          onChange={props.inputChange}
        />
        <button onClick={(event) => props.todoSubmit(event)}>Submit</button>
        <button onClick={(event) => props.clearCompleted(event)}>
          Clear Completed
        </button>
      </form>
    </div>
  );
}
