import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

/*

Add new Todo

Delete Todo

Update Todo

Filter Todo

Search by description (debounce)

Order by ASC or DESC

*/

function App() {
  const [todos, setTodos] = useState([]);

  const addItemTodo = (description, severity) => {
    const Item = {
      id: Date.now(),
      description: description ? description : "",
      severity: severity ? severity : "low",
      isClose: false,
    };

    setTodos((prevState) => {
      return [...prevState, Item];
    });
  };

  const closeItem = (closeId) => {
    console.log(closeId);
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === closeId ? { ...todo, isClose: !!todo.isClose } : todo
    );
    console.log("new after run", newTodos);
    setTodos(newTodos);

    // way2
    // setTodos((prevState) =>
    //   prevState.map((todo) =>
    //     todo.id === closeId ? { ...todo, isClose: true } : todo
    //   ));

    // way3
    // setTodos((prevState) => {
    //   return prevState;
    //   // prevState.map((todo) =>
    //   //   todo.id === closeId ? { ...todo, isClose: true } : todo
    //   // )
    // });
  };

  const deleteTodo = (deleteId) => {
    const newTodos = [...todos];
    const indexDelete = newTodos.findIndex((item) => item.id === deleteId);
    newTodos.splice(indexDelete, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Todo Tracker</h1>
      <div className="mx-auto p-6 max-w-[900px]">
        <TodoForm addItemTodo={addItemTodo} />
        <TodoList todos={todos} closeItem={closeItem} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export default App;
