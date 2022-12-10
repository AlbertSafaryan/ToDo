
import React from "react";
import "./MyModal.css";
const MyModal=({todo,visible,onClose,removeTodo})=>{
   if(!visible) return null;
        return(
         <div className="MyModal">
            <p>Are You Sure deleting? {todo.title} </p>
            <div className="MyModal_btn">
               <button onClick={()=>removeTodo(todo.id)}>OK</button>
               <button className="Ok" onClick={()=>onClose()}>X</button>
            </div>
         </div>
      )}


export default MyModal