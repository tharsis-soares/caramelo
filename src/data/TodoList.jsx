import React from "react";
import useTodos from "./useTodos";

const TodoList = () => {
  
  const [todos, error] = useTodos();
  
  return (
    <div>
      { error !== null 
        ? <p>Error fetching todos: {error}</p> 
        : todos.map(item => <p todo={item} >{item}</p>)}
    </div>
  );
};

export default TodoList