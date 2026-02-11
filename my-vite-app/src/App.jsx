// import { useEffect, useState } from "react";
// import LeftSidebar from "./LeftSidebar";
// import Navbar from "./Navbar"; 
// import RightSidebar from "./RightSidebar";
// import Footer from "./Footer.jsx";


// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const name = prompt("Enter your name");
//     const roll = prompt("Enter your roll number");

//     if (name && roll)
//        {      
//      setUser({ name, roll });

//     } else {
//       alert("You must enter both Name and Roll Number");
//     }
//   }, []); 

  
//   if (!user) {
//     return <h2>First Enter your deail</h2>;
//   }
//   return (
//     <>
//       <Navbar />
//       <LeftSidebar />
//       <RightSidebar />
//       <Footer />
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar"; 
import RightSidebar from "./RightSidebar";
import Footer from "./Footer.jsx";

function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && roll) {
      setIsSubmitted(true);
    } else {
      alert("Please enter both Name and Roll Number");
    }
  };

  // If not submitted, show form
  if (!isSubmitted) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Enter Details</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Enter Roll"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    );
  }

  // If submitted, show app
  return (
    <>
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <Footer />
    </>
  );
}

export default App;
