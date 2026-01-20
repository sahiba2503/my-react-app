import { useState } from "react"
function Task(){
    let [tasks , setTasks] = useState([]);
const taskCreateSection={
    margin:"4rem",
    width:"50%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:"20px"
}
const TasklistStyle = {
listStyle:"none",
border:"1px solid black",
width:"100%",
height:"200px",
overflow:"auto",
}
const listSty ={
  border:"1px solid black",
  padding:"5px 10px",
   margin:"0px 0px 10px -40px",
   display:"flex",
   justifyContent:"space-between",
  
  }
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value;

  if (task === "") return;

  let newTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    newTasks.push(tasks[i]);
  }

  newTasks.push(task);
  setTasks(newTasks);

  input.value = "";
}

function handleKeyDown(event) {
  if (event.key === "Enter") {
    addTask();
  }
}
function updateTask(){
  const updateBtn = document.querySelectorAll('#updateBtn');
  for(let i=0; i<updateBtn.length; i++){
  alert("yes task is updated");
    }
}
function deleteTask(){
  const deleteBtn = document.querySelectorAll('#deleteBtn');
 for(let i=0; i<deleteBtn.length; i++){ 
   alert("yes task is deleted");
    }
   
}

    return<>
    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
    <div style={taskCreateSection}>
    <input  id="taskInput" placeholder=" Enter your task Name" style={{padding:"10px"}}  onKeyDown={handleKeyDown}/>
    <button style={{padding:"10px",width:"50%", margin:"0 25%",color:"red"}} onClick={addTask}>Add Task</button>
      <ul style={TasklistStyle}>
            {tasks.map((t, index) => (
         <li key={index} style={listSty}>
          <div> {t} </div>
          <div>
         <span id="updateBtn" style={{marginRight:"10px"}} onClick={updateTask}>edit</span>
         <span id="deleteBtn"  onClick={deleteTask}>delete</span>
         </div>
         </li>
       ))}
     </ul>
   </div>
    </div>   
    </>
}

export default Task
/////
// import { useState } from "react";

// function Task() {
//   const [tasks, setTasks] = useState([]);
//   const [taskInput, setTaskInput] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   const taskCreateSection = {
//     margin: "4rem",
//     width: "50%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "20px",
//   };

//   const TasklistStyle = {
//     listStyle: "none",
//     border: "1px solid black",
//     width: "100%",
//     height: "200px",
//     overflow: "auto",
//   };

//   const listSty = {
//     border: "1px solid black",
//     padding: "5px 10px",
//     margin: "0px 0px 10px -40px",
//     display: "flex",
//     justifyContent: "space-between",
//   };

//   // ✅ Add or Update Task
//   function addTask() {
//     if (taskInput === "") return;

//     if (editIndex !== null) {
//       // update task
//       const updatedTasks = [...tasks];
//       updatedTasks[editIndex] = taskInput;
//       setTasks(updatedTasks);
//       setEditIndex(null);
//     } else {
//       // add new task
//       setTasks([...tasks, taskInput]);
//     }

//     setTaskInput("");
//   }

//   // ✅ Delete Task
//   function deleteTask(index) {
//     const filteredTasks = tasks.filter((_, i) => i !== index);
//     setTasks(filteredTasks);
//   }

//   // ✅ Edit Task
//   function editTask(index) {
//     setTaskInput(tasks[index]);
//     setEditIndex(index);
//   }

//   function handleKeyDown(e) {
//     if (e.key === "Enter") addTask();
//   }

//   return (
//     <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
//       <div style={taskCreateSection}>
//         <input
//           placeholder="Enter your task"
//           style={{ padding: "10px" }}
//           value={taskInput}
//           onChange={(e) => setTaskInput(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />

//         <button
//           style={{ padding: "10px", width: "50%", color: "red" }}
//           onClick={addTask}
//         >
//           {editIndex !== null ? "Update Task" : "Add Task"}
//         </button>

//         <ul style={TasklistStyle}>
//           {tasks.map((t, index) => (
//             <li key={index} style={listSty}>
//               <div>{t}</div>
//               <div>
//                 <span
//                   style={{ marginRight: "10px", cursor: "pointer" }}
//                   onClick={() => editTask(index)}
//                 >
//                   edit
//                 </span>
//                 <span
//                   style={{ cursor: "pointer" }}
//                   onClick={() => deleteTask(index)}
//                 >
//                   delete
//                 </span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Task;

