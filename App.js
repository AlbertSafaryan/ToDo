import { useState } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const addTodo = (todo) => {
    if(todo.title.length<54 && todo.title.length>1 ){ 
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    }
    else{
      alert("Character is more thane 54");
    }
  };

  const removeTodo = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const doneTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.done = !todo.done;
      return todo;
    });
    setTodos(newTodos);
  };
  

  return (
    <div className="App">
      <div style={{display:"flex",justifyContent:"end"}}>
       <input type="checkbox" style={{width:"1.3rem",height:"1.3rem",marginTop:"1.6rem"}} checked={isFilter} onChange={() => setIsFilter(!isFilter)}/>
       <p style={{fontSize:"1.3rem",accentColor:"teal"}}>Hide Completed</p>
       </div>
      <h1>Task</h1>
      <AddTodo addTodo={addTodo} />
      <Todos isFilter={isFilter} todos={todos} removeTodo={removeTodo} doneTodo={doneTodo} />
   
    </div>
  );
};

export default App;