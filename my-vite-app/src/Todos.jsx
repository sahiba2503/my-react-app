import { useState } from "react";

function Todos() {
  const [task, setTask] = useState(""); 
  const [tasks, setTasks] = useState([]);   
  const [editIndex, setEditIndex] = useState(null); 

 
  const handleAddOrUpdate = () => {
    if (task === "") return;

    if (editIndex === null) {
      setTasks([...tasks, task]);
    } else {
       const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    }

    setTask("");
  };
  const handleDelete = (index) => {
  let newTasks = []; 

  for (let i = 0; i < tasks.length; i++) {
    if (i !== index) {
      newTasks.push(tasks[i]);
    }
  }

  setTasks(newTasks); 
};
  
  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple To Do App</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAddOrUpdate}>
        {editIndex === null ? "Add Task" : "Update Task"}
      </button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleEdit(index)}>Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;