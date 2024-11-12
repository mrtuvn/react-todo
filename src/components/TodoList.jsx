import React, { useEffect, useState } from "react";
import TodoFilter from "./TodoList/TodoFilter";
import TodoItem from "./TodoList/TodoItem";
import TodoSearch from "./TodoList/TodoSearch";

const TodoList = ({ todos, deleteTodo, closeItem }) => {
  return (
    <div className="py-4 ">
      <div className="border-t-orange-50 py-5 inline-flex w-full flex-wrap items-center justify-between gap-20">
        <p>List Todo</p>

        <TodoSearch todos={todos} />
      </div>

      <TodoFilter todos={todos} />

      <div className="itemsWrap flex flex-col gap-2 flex-wrap">
        {todos?.length > 0 ? (
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                closeItem={closeItem}
                deleteTodo={deleteTodo}
              />
            );
          })
        ) : (
          <p>Not found! Try with another keyword.</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
