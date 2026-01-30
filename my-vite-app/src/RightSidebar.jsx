import yahuposter from "./assets/poster2.png"
import yahuPosters from "./assets/yahuPosters.png"

function RightSidebar(){
    return(
    <>
    <div className="RightSidBar">
     <img src={yahuposter} alt="poster"  className="sideBox1"/> 
      <img src={yahuPosters} alt="poster"  className="sideBox1"/> 
   <img src="" alt="" />
    </div>
    </>
    )
}
export default RightSidebar;