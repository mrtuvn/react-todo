import React, { useState, useEffect } from "react";

const TodoSearch = ({ todos }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchTodos = () => {
    if (searchQuery !== "") {
      return todos.filter((item) =>
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return todos;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      results = searchTodos();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <input
      className="shadow appearance-none border rounded py-2 px-3 text-gray-700"
      placeholder="Search by description"
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
    />
  );
};

export default TodoSearch;
