export const Todos = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>
      {todos.length === 0 ? "No Todos to display" :
        todos.map((todo) => (
          <div key={todo.sno} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.sno)}
              style={{ marginRight: "10px" }}
            />
            {todo.title} : {todo.desc}
            <button className="btn btn-sm btn-danger mx-2" onClick={() => onDelete(todo)}>Delete</button>
            <hr />
          </div>
        ))
      }
    </div>
  );
};
