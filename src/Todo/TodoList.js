import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} index={index} key={todo.id} />
      ))}
    </ul>
  );
}
