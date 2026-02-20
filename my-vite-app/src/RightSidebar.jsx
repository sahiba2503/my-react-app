import HTML from "./assets/HTML.jpg"
import Poster from "./assets/poster.jpg";
import PosterB from "./assets/poster3.jpg";
import PosterC from "./assets/poster2.png"
function RightSidebar(){
    return(
    <>
    <div className="RightSidBar">
     <img src={Poster} alt="poster"  className="sideBox1"/> 
      <img src={PosterC} alt="poster"  className="sideBox1"/> 
       <img src={PosterB} alt="poster"  className="sideBox1"/> 
   <img src="" alt="" />
    </div>
    </>
    )
}
export default RightSidebar;