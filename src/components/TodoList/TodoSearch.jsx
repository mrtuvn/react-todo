import React from "react";

const TodoSearch = ({ searchQuery, setSearchQuery }) => {
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
