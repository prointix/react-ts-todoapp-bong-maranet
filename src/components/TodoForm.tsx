import { ChangeEvent, FormEvent, useRef, useState } from "react";
import TodoList from "./TodoList";
import { ITodo, TodoListType } from "./types";
import { data } from "./data";

const TodoForm = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  // Add Todo
  const [title, setTitle] = useState("");

  const addTodoHandler = (todo: ITodo) => {
    const updateTodos = [...todos, todo];
    setTodos(updateTodos);
    setTitle("");
  };

  const changeHandler = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setTitle(value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      id: Math.random().toString(),
      title: title,
      completed: false,
    };
    title && addTodoHandler(todo);
  };

  // ------End Add Todo

  const deletedHandler = (id: string) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  };

  const toggleHandler = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const activeHandler = () => {
    const activeTodos = todos.filter((todo) => todo.completed === true);
    setTodos(activeTodos);
  };
  const completedHandler = () => {
    const completedTodos = todos.filter((todo) => todo.completed === false);
    setTodos(completedTodos);
  };
  const clearHandler = () => {
    const clearTodos = todos.filter((todo) => !todo.completed);
    setTodos(clearTodos);
  };

  return (
    <div className="container-form bg">
      <div className="container-box">
        <h3 className="todoTitle">Todo List</h3>
        <div>
          <form onSubmit={submitHandler} className="container-formInput">
            <input
              value={title}
              onChange={changeHandler}
              type="text"
              placeholder="Add Todo"
              className="inputAdd"
            />
            <button className="btnTodo btnAdd">Add</button>
          </form>
          <TodoList
            todos={todos}
            deletedHandler={deletedHandler}
            toggleHandler={toggleHandler}
            clearHandler={clearHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
