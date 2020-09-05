import React from "react";
import "../../assets/styles/components/CreateTodo.css";
import TodoList from "./TodoList";
import { useState } from "react";
import swal from "sweetalert";

const CreateTodo = () => {
  const [todo, setTodo] = useState({ title: "", done: false });
  const [todoArr, setTodoArr] = useState([]);

  let todos = localStorage.hasOwnProperty("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  const onChange = (event) => {
    let { value } = event.target;
    let obj = {};
    obj["title"] = value;
    obj["done"] = false;
    setTodo(obj);
  };

  const createTodo = (event) => {
    const { name } = event.target;
    if (event.key === "Enter" || name === "addTodo") {
      if (todo.title !== "") {
        todos.unshift(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
        setTodo({ title: "", done: false });
      } else {
        swal("Oops", "Por favor escribe primero una tarea antes de presionar el boton de añadir", "error");
      }
    }
  };

  const completeTodo = (i) => {
    if (todos[i]["done"] !== true) {
      todos[i]["done"] = true;
      localStorage.setItem("todos", JSON.stringify(todos));
      setTodoArr(todos);
      swal("¡Buen trabajo!", "Tarea completada", "success");
    }
  };

  const deleteTodo = (i) => {
    swal({
      title: "¿Estas seguro?",
      text: "Una vez eliminada la tarea no seras capaz de recuperarla",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((res) => {
      todos.splice(i, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      setTodoArr(todos);
    });
  };

  return (
    <>
      <div className="box">
        <div className="text-title">
          <h2>Cosas por hacer</h2>
          <h4>Añade una nueva tarea</h4>
        </div>
        <div className="text-addTodo">
          <input
            type="text"
            name="todo"
            placeholder="Escribe tu tarea aqui..."
            value={todo.title}
            onKeyPress={createTodo}
            onChange={onChange}
          />
          <button
            className="btn-addTodo"
            type="button"
            name="addTodo"
            onClick={createTodo}
          >
            Añadir
          </button>
        </div>
      </div>
      <TodoList
        todoArr={todoArr}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default CreateTodo;
