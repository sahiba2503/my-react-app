
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from"./Home"
import Template from"./Template"
import Sortcuts from "./Sortcuts"
import Codelab from"./Codelab"
import Interviewquestions  from "./Interviewquestions"
export default function Navbar(){
   return(
    <BrowserRouter>
    <div className='naveContainer'>
         <div className='navBg'>
             <div id='searchSection'>
             <input placeholder='Search Courses'></input>
             <button >SEARCH</button>
             </div>
        
         <div className='navLogos'>
             <a className='navLogo' >❤️</a>
             <a className='navLogo'>✌️</a>
             <a className='navLogo'>🤍</a>
             <button>Login</button>
             <button>Signup</button>
         </div>
         </div>
          <div className='secondNav'>
     <a href="/">HOME</a>
      <a href="/sortcuts">KEY SORTCUTS</a>
       <a href="/template">FREE TEMPLEATE</a>
       <a href="/codelab">CODE LAB</a>           
          <a href="/interviewquestion">INTERVIEW QUESTION</a>
    </div>
    </div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/sortcuts" element={<Sortcuts />} />
       <Route path="/template" element={<Template />} />
       <Route path="/codelab" element={<Codelab />} />
        <Route path="/interviewquestion" element={<Interviewquestions />} />
     </Routes>
            </BrowserRouter>
    )
    }