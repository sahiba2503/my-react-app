import {useState} from 'react'
function LikeUnlikeBtn(){
    const [likebt , setLikebt] = useState(false);
    const [unlikebt , setUnlikebt] = useState(false);
    return(
<>
  
  <h2>Please click any one </h2>
  <button onClick={()=>setLikebt(!likebt)}>
    { likebt ? "👍 like " :"👍🏻like "}
    </button>

   <button onClick={()=>setUnlikebt(!unlikebt)}>
    { unlikebt ? "Un like 👎" :" Un like 👎🏻" }
    </button>
   

  </>  ) 

}
export default LikeUnlikeBtn