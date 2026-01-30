import "./App.css";
import subject1 from "./assets/advanvejs.svg";
import subject2 from "./assets/bootstrap4.svg";
import subject3 from "./assets/css.svg";
import subject4 from "./assets/html.svg";
import subject5 from "./assets/sass.svg";
import subject6 from "./assets/javascript.svg";

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
                <img src={subject1} alt="subjectName" />
                 <img src={subject2} alt="subjectName" />
                  <img src={subject3} alt="subjectName" />          
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
                <img src={subject4} alt="subjectName" />
                <p>Ribbon Style 18</p>
                <p>👁️</p>
                </div>
                 <div className="codelablBox">
                <img src={subject5} alt="subjectName" />
                <p>Counter Style 302</p>
                <p>👁️</p>
                </div>
                <div className="codelablBox">
                <img src={subject6} alt="subjectName" />
                <p>Pricing Table Style 322</p>
                <p>👁️</p>
                </div>
              </div>
             </div>
        
        </>
    )
}
