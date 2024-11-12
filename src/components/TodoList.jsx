import React, { useEffect, useState } from "react";
import TodoFilter from "./TodoList/TodoFilter";
import TodoItem from "./TodoList/TodoItem";
import TodoSearch from "./TodoList/TodoSearch";

const TodoList = ({ todos, deleteTodo, closeItem }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const searchTodos = () => {
    if (todos.length > 0) {
      setFilteredTodos(
        todos.filter((todo) =>
          todo.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      results = searchTodos();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, todos]);

  return (
    <div className="py-4 ">
      <div className="border-t-orange-50 py-5 inline-flex w-full flex-wrap items-center justify-between gap-20">
        <p>List Todo</p>

        <TodoSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <TodoFilter todos={todos} />

      <div className="itemsWrap flex flex-col gap-2 flex-wrap">
        <p>
          {filteredTodos.length > 1 ? "Totals" : "Total"}:{" "}
          {filteredTodos.length}
        </p>
        {filteredTodos?.length > 0 ? (
          filteredTodos.map((todo) => {
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
          <p className="my-5 text-center text-bold text-xl">
            Not found! Try with another keyword in search field.
          </p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
