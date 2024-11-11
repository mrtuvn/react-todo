import React from "react";

const TodoFilter = () => {
  return (
    <div>
      <p>
        Filter: <span>All</span> <span>Open</span> <span>Close</span>
      </p>
      <p>
        Order By:{" "}
        <select name="sortBy">
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </p>
    </div>
  );
};

export default TodoFilter;
