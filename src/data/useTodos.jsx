import { useState, useEffect, useMemo } from "react";
import useApiResult from "./useApiResult";
import { getTodos } from "./requests";

const useTodos = () => {
  const request = useMemo(() => getTodos(), [])
  return useApiResult(request)
  
    /*const [todos, setTodos] = useState([]);
  
    useEffect(() => {
        fetch("https://api/todos")
        .then(async (response) => {
        if (response.ok) setTodos(await response.json());
        });
    }, []);
  
  return todos;*/
};

export default useTodos;