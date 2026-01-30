import "./App.css";
import subject1 from "./assets/advanvejs.svg";
import subject2 from "./assets/bootstrap4.svg";
import subject3 from "./assets/css.svg";
import subject4 from "./assets/html.svg";
import subject5 from "./assets/sass.svg";
import subject6 from "./assets/javascript.svg";

import subject01 from "./assets/download (1).jpg";
import subject02 from "./assets/download (2).jpg";
import subject03 from "./assets/download (3).jpg";
import subject04 from "./assets/download (4).jpg";
import subject05 from "./assets/download.jpg";
import subject06 from "./assets/images (1).jpg";


export default function MainContainer(){
    return(
        <>
        <div className="home">
            <div>
        <div className="mainHeading">
        <h1>Course</h1>  
        <div className="mainResponsivBtn">   
        <span className="chenge">1</span>
         <span className="chenge">2</span>
           </div> 
         </div>

            <hr></hr>
            <div className="Maincontainer">
                <img src={subject1} alt="subjectName" />
                 <img src={subject2} alt="subjectName" />
                  <img src={subject3} alt="subjectName" />
                   <img src={subject4} alt="subjectName" />
                    <img src={subject5} alt="subjectName" />
                     <img src={subject6} alt="subjectName" />
            </div>
            </div>

            <div>
            <div className="mainHeading">
        <h1>New Projects</h1>  
        <div className="mainResponsivBtn">   
        <span className="chenge">1</span>
         <span className="chenge">2</span>
           </div> 
         </div>
          <hr></hr>
          <div className="Record">           
                <img src={subject01} alt="subjectName" />
                 <img src={subject02} alt="subjectName" />
                  <img src={subject03} alt="subjectName" />          
          </div>
         </div>

         <div>
        <div className="mainHeading">
        <h1>CSSS Codelab</h1>  
        <button>View All</button>
         </div>
              </div>
              <hr></hr>
              <div className="cssCodelabl">
                <div className="codelablBox">
                <img src={subject04} alt="subjectName" />
                <p>Ribbon Style 18</p>
                <p>👁️</p>
                </div>
                 <div className="codelablBox">
                <img src={subject05} alt="subjectName" />
                <p>Counter Style 302</p>
                <p>👁️</p>
                </div>
                <div className="codelablBox">
                <img src={subject06} alt="subjectName" />
                <p>Pricing Table Style 322</p>
                <p>👁️</p>
                </div>
              </div>
             </div>
        
        </>
    )
}
