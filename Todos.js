import React,{useState} from "react";
import MyModal from "./MyModal";
const Todos = ({ todos, isFilter, removeTodo, doneTodo}) => {
    const[show,setShow]=useState(false);
    const handleOnClose=()=>setShow(false);
    return (
        <div>
            {todos.map((todo, index) =>
                !(isFilter && todo.done) ? (
                    
                    <div
                        className={todo.done ? "Todo done" : "Todo"}
                        key={index}
                        style={{
                            width: "100%",
                            display: "flex",
                            borderBottom: ".1rem solid lightgrey",
                            paddingBottom: "1rem",
                            justifyContent: "space-between",
                        }}
                        
                    >
                         <MyModal todo={todo}  onClose={handleOnClose} removeTodo={removeTodo} visible={show}/>
                        <div>
                            <input
                                type="checkbox"
                                onClick={() => doneTodo(todo.id)}
                                style={{
                                    accentColor:"teal",
                                    width: "1rem",
                                    height: "1rem",
                                    borderStyel: "solid",
                                    borderWidth: ".4rem",
                                }}
                            /> 
                            <span
                                style={{ marginLeft: "4rem", fontSize: "2rem" }}
                            >
                                {todo.title}{" "}
                            </span>
                        </div>
                        <i
                            style={{
                                transform: "rotate(45deg)",
                                fontFamily: "sans-serif",
                                fontSize: "2rem",
                                cursor: "pointer",
                                marginTop:"3rem"
                            }}
                            onClick={()  => setShow(todo)}
                        >
                            +
                        </i>
                        
                    </div>
                ) : null
            )}
      
        </div>
    );
};

export default Todos;
