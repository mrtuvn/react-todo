import React from "react";
import TodoFilter from "./TodoList/TodoFilter";
import TodoItem from "./TodoList/TodoItem";

const TodoList = ({ todos, deleteTodo, closeItem }) => {
  console.log("render todoList component");
  console.log("todoList ", todos);

  return (
    <div className="py-4 ">
      List Todo
      <TodoFilter />
      <div className="itemsWrap flex flex-col gap-2 flex-wrap">
        {todos &&
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                closeItem={closeItem}
                deleteTodo={deleteTodo}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
