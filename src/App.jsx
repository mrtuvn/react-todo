import { useState, useEffect } from "react";
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

  useEffect(() => {
    //init data todo if data availabled in storage
    const todosFromLocal = localStorage.getItem("todos");
    if (todosFromLocal) {
      setTodos(JSON.parse(todosFromLocal));
    }
  }, []);

  useEffect(() => {
    // save data todos in storage

    if (todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

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

  const clearCurrentText = () => {};

  const closeItem = (closeId) => {
    // Way 1 No Work
    // const newTodos = [...todos];
    // newTodos.map((todo) =>
    //   todo.id === closeId ? { ...todo, isClose: !todo.isClose } : todo
    // );

    // setTodos(newTodos);

    // Way 2 Works
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === closeId ? { ...todo, isClose: !todo.isClose } : todo
      )
    );

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
        <TodoForm
          addItemTodo={addItemTodo}
          clearCurrentText={clearCurrentText}
        />
        <TodoList todos={todos} closeItem={closeItem} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export default App;
