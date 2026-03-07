

// import LeftSidebar from "./LeftSidebar";
// import Navbar from "./Navbar"; 
// import RightSidebar from "./RightSidebar";
// import Footer from "./Footer.jsx";
import Styling from "./Styling.jsx"
 import UseState from "./assets/UseState.jsx";
 import UseRef from "./UseRef.jsx";
import { useEffect } from "react";
import Useprop from "./Useprop";
import ConditionalRen from "../ConditionalRen.jsx";
function App() {
  
   useEffect(()=>{
    console.log("componet loaded");
    alert("component is loaded")
   
   },[]

   );
  
  
    return (
    <>
      {/* <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <Footer /> */}
      
      <Styling />
      <UseState />
       <UseRef />
       <Useprop />
       <ConditionalRen />
    </>
  );
}

 export default App;
//[] means run only once
