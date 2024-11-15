import React from "react";

const TodoFilter = ({
  filterTodosByAll,
  filterTodosByOpen,
  filterTodosByClose,
  filterTodosByOrder,
}) => {
  return (
    <div className="my-2 border-none">
      <p className="mb-5 inline-flex flex-wrap gap-2 items-center">
        Filter:
        <button className="item-status" onClick={() => filterTodosByAll()}>
          All
        </button>
        <button className="open-status" onClick={() => filterTodosByOpen()}>
          Open
        </button>
        <button className="close-status" onClick={() => filterTodosByClose()}>
          Closed
        </button>
      </p>
      <p className="my-2">
        Order By:{" "}
        <select
          className="p-2 ms-2"
          name="sortBy"
          onChange={(e) => {
            filterTodosByOrder(e.target.value);
          }}
        >
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </p>
    </div>
  );
};

export default TodoFilter;
