



import Styling from "./Styling.jsx"
 import UseState from "./assets/UseState.jsx";
 import UseRef from "./UseRef.jsx";
import { useEffect } from "react";
import Useprop from "./Useprop";
import ConditionalRen from "./ConditionalRen.jsx";
import StoreStudentData from "./storeStudentData.jsx";
import Useprops from "./Useprops.jsx";
import UseEffectProgram from "./UseEffectProgram.jsx";
import ReactRouter from "./ReactRouter.jsx";

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
       <Useprops />
       <UseEffectProgram />
       <ReactRouter />
</>)
}
 export default App;
//[] means run only once
