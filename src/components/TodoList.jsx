import React, { useEffect, useState } from "react";
import TodoFilter from "./TodoList/TodoFilter";
import TodoItem from "./TodoList/TodoItem";
import TodoSearch from "./TodoList/TodoSearch";

const TodoList = ({ todos, deleteTodo, closeItem }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterTodos = () => {
    setFilteredTodos(
      todos.filter((todo) =>
        todo.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const filterTodosByAll = (e) => {
    filterTodos();
  };

  const filterTodosByOpen = (e) => {
    setFilteredTodos(todos.filter((todo) => todo.isClose === false));
  };

  const filterTodosByClose = (e) => {
    setFilteredTodos(todos.filter((todo) => todo.isClose === true));
  };

  const filterTodosByOrder = (order) => {
    let arraySorted = [...todos];
    arraySorted.sort((a, b) => {
      if (order === "asc") {
        return a.description.localeCompare(b.description);
      } else if (order === "desc") {
        return b.description.localeCompare(a.description);
      } else {
        throw new Error('Invalid order. Please specify "asc" or "desc".');
      }
    });

    setFilteredTodos(arraySorted);
  };

  const searchTodos = () => {
    if (searchQuery) {
      const timer = setTimeout(() => {
        filterTodos();
      }, 1200);
      clearTimeout(timer);
    }

    if (todos.length > 0) {
      filterTodos();
    }
  };

  useEffect(() => {
    searchTodos(); // run once to initialize data
  }, [searchQuery, todos]);

  return (
    <div className="py-4 ">
      <div className="border-t-gray-200 border-t-2 mt-5 py-5 inline-flex w-full flex-wrap items-center justify-between gap-20">
        <p>List Todo</p>

        <TodoSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchTodos={searchTodos}
        />
      </div>

      <TodoFilter
        filterTodosByAll={filterTodosByAll}
        filterTodosByOpen={filterTodosByOpen}
        filterTodosByClose={filterTodosByClose}
        filterTodosByOrder={filterTodosByOrder}
      />

      <div className="itemsWrap flex flex-col gap-3 flex-wrap">
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
