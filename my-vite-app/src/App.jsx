



import Styling from "./Styling.jsx"
 import UseState from "./assets/UseState.jsx";
 import UseRef from "./UseRef.jsx";
import { useEffect } from "react";
import Useprop from "./Useprop";
import ConditionalRen from "./ConditionalRen.jsx";
import StoreStudentData from "./storeStudentData.jsx";
import UseProps from "./Useprops.js";
function App() {
  
   useEffect(()=>{
    console.log("componet is loaded");
    
   
   },[]

   );
  
  
    return (
    <>
      
      
      <Styling />
      <UseState />
       <UseRef />
       <Useprop />
       <ConditionalRen />
       <StoreStudentData />
       <UseProps />
</>)
}
 export default App;
//[] means run only once
