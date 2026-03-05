import React,{useRef} from 'react'

const UseRef = () => {
    const textRef = useRef();
 function updateData(){
    textRef.current.innerText= "Hellow sahiba";
 }
  return (
    <div>
      <h1 ref = {textRef} style={{textAlign:"center"}}>Hello there</h1>
      <button onClick={updateData} style={{marginLeft:"47%"}}>change      
      </button>
    </div>
  )
}

export default UseRef

