import { useState } from "react";

function StoreStudentData() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  function addStudent() {
    let newArray = students.concat(name); 
    setStudents(newArray);
    setName("");
  }

  return (
    <div>
      <h2>Student List</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button onClick={addStudent}>Add</button>

      {students.map((s, index) => (
        <p key={index}>{s}</p>
      ))}
    </div>
  );
}

export default StoreStudentData;
