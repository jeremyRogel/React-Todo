
import React from 'react';

const TodoForm = props => {
  return (
    
    <form> 
        <h3>What Else Do You Need To Do?</h3>
      <input
        onChange={props.handleTodoChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="enter here..."
      />
      <button onClick={props.handleAddTodo}>Add Todo</button>
      <button onClick={props.handleClearTodos}>Clear Completed</button>
      
    </form>
    
  );
};

export default TodoForm;