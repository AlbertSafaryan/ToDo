import { useState } from "react";
import "./AddTodo.css"
const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo({
      id: Math.floor(Math.random() * 1000),
      title: input,
      done: false,
    });
    setInput("");
  };
  return (
   
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add ToDo"
          value={input}
          onChange={handleChange}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  
  );
};

export default AddTodo;