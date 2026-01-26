
// import styles from './Bye.module.css'
import {useState} from 'react'
function Likebutton(){
    const [likebtn , setLikebtn] = useState(false);
    return(
<>
  
  <h2>Please like </h2>
  <button onClick={()=>setLikebtn(!likebtn)}>{ likebtn ? "liked❤️ " :"like🤍 "}</button>
   

  </>  ) 
}
export default Likebutton