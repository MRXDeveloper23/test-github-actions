export default function TodoItem({ todo, index }) {
  return (
    <li>
      <b>{index + 1}</b>
      <input
        type="checkbox"
        onChange={(id) => onChange(id)}
      ></input>
      {todo.title}
    </li>
  );
}
