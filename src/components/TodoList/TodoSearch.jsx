import React, { useEffect } from "react";

const TodoSearch = ({ searchQuery, setSearchQuery }) => {
  useEffect(() => {}, [searchQuery]);

  return (
    <input
      className="shadow appearance-none border rounded py-2 px-3 text-gray-700"
      placeholder="Search by description"
      value={searchQuery}
      onChange={(e) => {
        //setTimeout(() => {
        setSearchQuery(e.target.value);
        //searchTodos();
        //}, 2000);
      }}
    />
  );
};

export default TodoSearch;
