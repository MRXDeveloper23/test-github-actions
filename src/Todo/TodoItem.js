export default function TodoItem({ todo, index }) {
  return (
    <li>
      <b>{index + 1}</b>
      <input type="checkbox"></input>
      {todo.title}
    </li>
  );
}
