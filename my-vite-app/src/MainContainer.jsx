
import HTML from "./assets/HTML.jpg"


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
                <img src={HTML} alt="subjectName" />
                 <img src={HTML} alt="subjectName" />
                  <img src={HTML} alt="subjectName" />
                   <img src={HTML} alt="subjectName" />
                    <img src={HTML} alt="subjectName" />
                     <img src={HTML} alt="subjectName" />
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
                <img src={HTML} alt="subjectName" />
                 <img src={HTML} alt="subjectName" />
                  <img src={HTML} alt="subjectName" />          
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
                <img src={HTML} alt="subjectName" />
                <p>Ribbon Style 18</p>
                <p>👁️</p>
                </div>
                 <div className="codelablBox">
                <img src={HTML} alt="subjectName" />
                <p>Counter Style 302</p>
                <p>👁️</p>
                </div>
                <div className="codelablBox">
                <img src={HTML} alt="subjectName" />
                <p>Pricing Table Style 322</p>
                <p>👁️</p>
                </div>
              </div>
             </div>
        
        </>
    )
}
