import React from "react";
import "../../assets/styles/components/TodoList.css";

const TodoList = (props) => {
  const { completeTodo, deleteTodo } = props;
  let todoArr =
    props.todoArr.length > 0
      ? props.todoArr
      : JSON.parse(localStorage.getItem("todos"));

  return (
    <div className="list-box">
      <ul className="list-container">
        {todoArr && todoArr.length > 0
          ? todoArr.map((el, i) => (
              <li className="list-item" key={i}>
                <div className={`list-item__name ${el["done"] ? "item__complete " : null}`}>
                  {el.title}
                </div>
                <div className="list-item__icon">
                  <i 
                    title="Complete" 
                    onClick={() => completeTodo(i)} 
                    className={`fas fa-check circle pointer ${el["done"] ? "green": "blue"}`}
                  ></i>
                  <i 
                    title="Delete" 
                    className="fas fa-trash-alt pointer"
                    onClick={() => deleteTodo(i)}
                  ></i>
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default TodoList;
