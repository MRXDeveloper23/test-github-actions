import "./App.css";
import TodoList from "./Todo/TodoList";

function App() {
  const styles = {
    p: {
      fontSize: "20px",
      color: "red",
    },
    container: {
      width: "80%",
      margin: "50px auto",
    },
  };
  let todos = [
    {
      id: 1,
      title: "JS",
      completed: false,
    },
    {
      id: 2,
      title: "NodeJS",
      completed: false,
    },
    {
      id: 3,
      title: "React.JS",
      completed: false,
    },
  ];
  return (
    <div style={styles.container}>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
