import "./seperateSty.css";
import styles from "./Styling.module.css";
function Styling(){


return<>
<div>
<h1 style={{color:"red",textAlign:"center"}}>inline styling</h1>
<h2 className="ExternalSty">Externat Styling</h2>
<h3 className={styles.test}>css module</h3>
</div>
</>
}
export default Styling;