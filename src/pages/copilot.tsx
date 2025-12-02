import { useState } from "react";

function TodoApp() {
  const [task, setTask] = useState("");        // input value
  const [todos, setTodos] = useState<string[]>([]); // list of tasks

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    if (task.trim() === "") return; // ignore empty input

    setTodos([...todos, task]); // add new task to list
    setTask(""); // clear input
  };

  return (
    <div className="flex flex-col items-center p-6">
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          className="border rounded px-3 py-2 w-64"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      {/* Todo List */}
      <ul className="mt-4 space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="bg-gray-100 px-3 py-2  text-black rounded shadow"
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
