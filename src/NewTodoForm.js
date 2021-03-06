import React from "react";

const NewTodoForm = (props) => {
  return (
    <form onSubmit={props.formSubmitted}>
      <label htmlFor="newTodo">New Todo</label>
      <input
        onChange={(event) => props.newTodoChanged(event.target.value)}
        id="newTodo"
        name="newTodo"
        value={props.newTodo}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
