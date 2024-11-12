import React from "react";
import clsx from "clsx";
const TodoItem = ({ todo, deleteTodo, closeItem }) => {
  return (
    <div className="flex flex-col border rounded-md">
      <div className="itemHead p-4">
        <span className="itemId">{todo && todo.id}</span>
        <span
          className={clsx("itemStatus bg-[#ccc] item-status ms-2", {
            "close-status": todo.isClose,
            "open-status": !todo.isClose,
          })}
        >
          {todo.isClose ? "closed" : "open"}
        </span>
      </div>
      <div className="itemBody flex flex-col flex-wrap p-4 pt-0">
        <div className="itemContent">
          <p className="text-description mb-3 max-w-prose ">
            {todo && todo.description}
          </p>
          Severity:{"  "}
          <span className="prority item-status max-w-fit p-1">
            {todo && todo.severity}
          </span>
        </div>
        <div className="actions ml-auto mt-4">
          <button
            className={clsx("closeAction btn btn-close", {
              "opacity-60": todo.isClose,
            })}
            disabled={todo.isClose}
            onClick={(e) => closeItem(todo.id)}
          >
            Close
          </button>
          <button
            className="deleteAction btn btn-delete ms-2"
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
