import {useState} from 'react'
 function Choicebtn(){
    const[state, setState] = useState(null);
    return(
        <>
        <br></br>
        <br></br>
        <button onClick={()=>setState("LIke")}>
            {state === "LIke" ? "👍" :"👍🏻"}
        </button>
        <button onClick={()=>setState("UnLIke")}>
            {state === "UnLIke" ? "👎" :"👎🏻"}
        </button>
        </>
    )
    
 }
 export default Choicebtn;