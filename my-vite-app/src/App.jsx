import { useState } from 'react'
function App() {
   let [count, setCount] = useState(0);
   function clickfun(){
    setCount(count + 1);
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
  
   
  
   return (
    <>
    <div style={numStyle}>
      <h1 style={headingStyle}>Count Number</h1>
      <h2 style={numStyle}>{count}</h2>
        <button  onClick={clickfun}>click</button>
        </div>
    </>
  );
}

export default App;
