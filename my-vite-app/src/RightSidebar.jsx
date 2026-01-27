import yahuposter from "./assets/sidelaravel.jpg"
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