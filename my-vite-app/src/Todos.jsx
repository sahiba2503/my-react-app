import { useState } from "react";

function Todos() {
  const [inputTask, setInputTask] = useState("");      // input value
  const [tasks, setTasks] = useState([]);    // inputTask list
  const [editIndex, setEditIndex] = useState(null); // which inputTask is editing

  // Add or Update inputTask
  const handleAddOrUpdate = () => {
    if (inputTask === "") return;

    if (editIndex === null) {
      // ADD new inputTask
      setTasks([...tasks, inputTask]);
    } else {
      // UPDATE existing inputTask
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = inputTask;
      setTasks(updatedTasks);
      setEditIndex(null);
    }

    setInputTask(""); // clear input
  };

  // Delete inputTask
  const handleDelete = (index) => {
  let newTasks = []; // empty list

  // go through each inputTask
  for (let i = 0; i < tasks.length; i++) {
    // if (i !== index)  {  newTasks.push(tasks[i]); // add all tasks except the one to delete }
    if( i == index){
        continue
    }
    else{
        newTasks.push(tasks[i]);
    }
  }

  setTasks(newTasks); // update the inputTask list
};
  // Edit inputTask
  const handleEdit = (index) => {
    setInputTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ padding: "20px"}}>
      <h2> To Do App</h2>
      <input
        type="text"
        placeholder="Enter inputTask"
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
      />
{/* setInputTask(e.target.value) -> what ever user enter inside the input box react set that's value inside InputTask with the help of setInputTask method  . e like a messenger or event*/}
{/* e.target.value = “Give me the text written inside the input box” User typed Hello then  e.target.value = "Hello" */}
  {/* setInputTask(e.target.value) “Whenever the user types something,  take that text and save it inside inputTask.” */}

      <button onClick={handleAddOrUpdate}>{editIndex === null ? "Add Task" : "Update Task"}</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}
            <button onClick={() => handleEdit(index)}>Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;