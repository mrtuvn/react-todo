import React from "react";
import TodoFilter from "./TodoList/TodoFilter";
import TodoItem from "./TodoList/TodoItem";

const TodoList = ({ todos, deleteTodo, closeItem }) => {
  console.log("inside todoList", todos);

  return (
    <div className="py-4 ">
      List Todo
      <TodoFilter />
      <div className="itemsWrap flex flex-col gap-2 flex-wrap">
        {todos &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              closeItem={closeItem(todo.id)}
              deleteTodo={deleteTodo(todo.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
