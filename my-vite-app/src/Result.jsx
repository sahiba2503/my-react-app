
import {useRef} from "react";
function Result(){
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const rollRef = useRef(null);

  function handleFormData(e)
  {
          e.preventDefault();
    if(nameRef.current.value === null || emailRef.current.value === null || rollRef.current.value === null)
    {
     console.log("plese full fill correct detail");
     return;
    }
    else{
    console.log("detail", nameRef.current.value);
    console.log("detail", emailRef.current.value);
    console.log("detail", rollRef.current.value);
    nameRef.current.value = "";
     emailRef.current.value = "";
      rollRef.current.value = "";
      }
  }
  return(  
<>
 <div className="home">
  <h1>MCA Semester Result </h1>
  <form onSubmit={handleFormData}>
  <input placeholder="Enter your name"
  type="text"
 ref={nameRef}
   />
  <input placeholder="Enter your Email"
   type="text"
    ref={emailRef}
   />
  <input placeholder="Enter your roll"
  type="text"
   ref={rollRef}
    />
  <button type="submit">Submit</button>
  </form>
 </div>
</>
  )
}
export default Result;
