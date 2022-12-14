import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch("https://api/todos").then(async (response) => {
      if (response.ok) setTodos(await response.json());
    });
  }, []);
  
  return (
    <div>
      {todos.map(item => <p>{item}</p>)}
    </div>
  );
};

export default TodoList;