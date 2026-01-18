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

function addTask()
{
const input = document.getElementById("taskInput");
   const task = input.value;
    if (task === "") return;
      let newTasks = tasks.slice(); //sort code is for copy old array in new array.we can also use for loop and push element one by one.
   newTasks.push(task);
   setTasks(newTasks);

    input.value = "";
     // return;// method will never be return jsx only componet return jsx.
                }
     function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }
    return<>
    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
    <div style={taskCreateSection}>
    <input  id="taskInput" placeholder=" Enter your task Name" style={{padding:"10px"}}  onKeyDown={handleKeyDown}/>
    <button style={{padding:"10px",width:"50%", margin:"0 25%",color:"red"}} onClick={addTask}>Add Task</button>
<ul style={{listStyle:"none"}}>
            {tasks.map((t, index) => (
         <li key={index} style={{marginRight:"70px"}}>{t}</li>
       ))}
     </ul>
   </div>
    </div>   
    </>
}

export default Task
