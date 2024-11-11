import React, { useEffect } from "react";

const TodoForm = ({ addItemTodo }) => {
  const [description, setDescription] = React.useState("");
  const [severity, setSeverity] = React.useState("");
  console.log("run into TodoForm component");

  useEffect(() => {
    console.log("render TodoForm component"); /** only run once */
  }, []);

  return (
    <div>
      <label htmlFor="descriptionField">Description</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="descriptionField"
        name="descriptionField"
        placeholder="Describe your thoughts"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <label htmlFor="severityField">Severity</label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="severityField"
        name="severityField"
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
      >
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <p>
        <button
          className="text-right inline-flex p-2 btn btn-add mt-5 ml-auto flex-end items-end"
          onClick={(e) => addItemTodo(description, severity)}
        >
          Add Item
        </button>
      </p>
    </div>
  );
};

export default TodoForm;
