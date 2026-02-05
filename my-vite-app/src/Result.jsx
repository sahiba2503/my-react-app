
// import {useRef} from "react";
// function Result(){
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const rollRef = useRef(null);

//   function handleFormData(e)
//   {
//           e.preventDefault();
//     if(nameRef.current.value === null || emailRef.current.value === null || rollRef.current.value === null)
//     {
//      console.log("plese full fill correct detail");
//      return;
//     }
//     else{
//     console.log("detail", nameRef.current.value);
//     console.log("detail", emailRef.current.value);
//     console.log("detail", rollRef.current.value);
//     nameRef.current.value = "";
//      emailRef.current.value = "";
//       rollRef.current.value = "";
//       }
//   }
//   return(  
// <>
//  <div className="home">
//   <h1>MCA Semester Result </h1>
//   <form onSubmit={handleFormData}>
//   <input placeholder="Enter your name"
//   type="text"
//  ref={nameRef}
//    />
//   <input placeholder="Enter your Email"
//    type="text"
//     ref={emailRef}
//    />
//   <input placeholder="Enter your roll"
//   type="text"
//    ref={rollRef}
//     />
//   <button type="submit">Submit</button>
//   </form>
//  </div>
// </>
//   )
// }
// export default Result;

//  import {useRef} from "react";

// function Result(){
//   const nameRef = useRef();
//   const emailRef = useRef();

//   const handleSubmit = (e) =>{
//     e.preventDefault()
//     console.log("Name",nameRef.current.value);
//     console.log("Email",emailRef.current.value);
    
//   }
//   return(
//     <form onSubmit={handleSubmit}>
//       <h2>Result</h2>
//       <input type="text" ref={nameRef}  placeholder="Enter your name"/>
//       <br />
//       <input type="email"  ref={emailRef} placeholder="Enter your Email"/>
//       <br />
//       <button type="submit">submit</button>
//     </form>
//   )
// }
// export default Result;
import { useRef } from "react";

function Result() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
  };

  return (
      <div className="home">
        
    <form onSubmit={handleSubmit}>
      <h2>Result</h2>

      <input
        type="text"
        ref={nameRef}
        placeholder="Enter your name"
      />
      <br />

      <input
        type="email"
        ref={emailRef}
        placeholder="Enter your Email"
      />
      <br />

      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Result;
