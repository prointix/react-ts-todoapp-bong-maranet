import React, { useState } from "react";
import { Filter, TodoListType } from "./types";

const TodoList: React.FC<TodoListType> = (props) => {
  const [filter, setFilter] = useState<Filter>(Filter.All);

  const filteredTodos = props.todos.filter((todo) => {
    if (filter === Filter.Active) {
      return todo.completed === false;
    } else if (filter === Filter.Completed) {
      return todo.completed === true;
    }
    return true;
  });

  const totalActive = props.todos.filter(
    (todo) => todo.completed === false
  ).length;

  return (
    <>
      {filteredTodos.map((todo) => {
        return (
          <div>
            <div className="container-list">
              <label
                className={
                  !todo.completed
                    ? "label-list"
                    : "label-list label-line-through"
                }
              >
                {todo.title}
              </label>
              <button
                onClick={() => props.toggleHandler(todo.id)}
                className={
                  !todo.completed ? "btnTodo btnDone" : "btnTodo btnNotDone"
                }
              >
                {!todo.completed ? "Done" : "Not Done"}
              </button>
              <button
                className="btnTodo btnRemove"
                onClick={() => props.deletedHandler(todo.id)}
              >
                Remove
              </button>
            </div>
            <hr style={{ margin: 0 }} />
          </div>
        );
      })}
      <div className="container-list">
        <div className="bottom-list">
          <label>
            {totalActive} item
            {totalActive === 0 || totalActive === 1 ? "" : "s"} left
          </label>
        </div>
        <div className="bottom-list">
          <button
            className={`pd-button ${filter === Filter.All ? "active" : ""}`}
            onClick={() => setFilter(Filter.All)}
          >
            All
          </button>
          <button
            className={`pd-button ${filter === Filter.Active ? "active" : ""}`}
            onClick={() => {
              setFilter(Filter.Active);
            }}
          >
            Active
          </button>
          <button
            className={`pd-button ${
              filter === Filter.Completed ? "active" : ""
            }`}
            onClick={() => setFilter(Filter.Completed)}
          >
            Completed
          </button>
        </div>
        <div className="bottom-list">
          <button className="btnClear" onClick={() => props.clearHandler()}>
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
