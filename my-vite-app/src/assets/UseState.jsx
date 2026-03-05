import React, { useState } from 'react'
const UseState = () => {
 const [cont , setCount] = useState(0);
 
   function increamentNumber(){
    setCount(cont +1 )
   }
   function decrementNumber(){
       setCount(cont - 1 )
   }
  return (
    <div>
     <h2 style={{textAlign:"center"}}> This is state</h2>
     <button onClick={increamentNumber} style={{marginLeft:"47%"}}> + add {cont} </button>
      <button onClick={decrementNumber} style={{marginLeft:"47%",marginTop:"2rem"}}> - sub {cont} </button>
    </div>
  )
}

export default UseState
