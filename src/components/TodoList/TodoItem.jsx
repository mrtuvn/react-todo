import React from "react";
import clsx from "clsx";
const TodoItem = ({ todo, deleteTodo, closeItem }) => {
  return (
    <div className="flex flex-col">
      <div className="itemHead">
        <span className="itemId">{todo && todo.id}</span>
        <span
          className="itemStatus item-status"
          style={{ backgroundColor: "#ccc" }}
        >
          {todo.isClose ? "close" : "open"}
        </span>
      </div>
      <div className="itemBody flex flex-col flex-wrap">
        <div className="itemContent">
          <p className="text-description ">{todo && todo.description}</p>
          <p className="prority item-status">{todo && todo.severity}</p>
        </div>
        <div className="actions ml-auto">
          <button
            className={clsx("closeAction btn btn-close ")}
            disabled={todo.isClose}
            onClick={(e) => closeItem(todo.id)}
          >
            Close
          </button>
          <button
            className="deleteAction btn btn-delete"
            onClick={(e) => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
