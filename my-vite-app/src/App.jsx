import "./Index.css"
import { useState } from 'react'
import Bye from './Bye'

 function App() {
   let [count, setCount] = useState(0);

   function clickfun(){
    setCount(count + 1);
   }
   function clickfunDec(){
    setCount(count - 1)
   }
     function clickfunCl(){
    setCount(0)
   }
  const headingStyle = {
    color:"green",
    fontSize:"30px",
    textAlign:"center"
  }
   const numStyle = {
    color:"green",
    fontSize:"30px",
    textAlign:"center",
    display:"flex",
    flexDirection:"column",
    alignItem:"center",
    justifyContent:"center"
    
    }
   
    const styleButClear = {
      backgroundColor:"blue",
      color:"white",
      margin:"20px"
           
    }

  
   
  
   return (
    <>
    <div style={numStyle}>
      <h1 style={headingStyle}>Count Number</h1>
      <p className="test">This is very small program.</p>
      <h2 style={numStyle}>{count}</h2>
      <div>
        <button  onClick={clickfunDec} style={{ backgroundColor:"red",color:"white"}}>-</button>
         <button  onClick={clickfunCl} style={styleButClear}>clear</button>
         <button  onClick={clickfun} style={{ backgroundColor:"red",color:"white"}}>+</button>
         </div>
         <Bye />
        </div>
    </>
  );
}

export default App;
