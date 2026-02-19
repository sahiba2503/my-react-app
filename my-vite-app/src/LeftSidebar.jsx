
import "./App.css"
import Learncss from "./Learncss";
import Learnhtml from "./Learnhtml";
import Learnsass from "./Learnsass";
import Home from "./Home"
import {BrowserRouter, Routes, Route} from "react-router-dom";
function LeftSidebar(){                    
            
    return(
        <BrowserRouter>
         <div className='Leftsidebar'>
        <ul>

      <a href="/learnHtml">LEARN HTML</a>
       <a href="/learnCss">LEARN CSS</a>
        <a href="/learnSass">LEARN SASS</a>   
        </ul>    
     </div>
    
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/learnHtml" element={<Learnhtml />} />
        <Route path="/learnCss" element={<Learncss />} />
        <Route path="/learnSass" element={<Learnsass />} />
        </Routes>
             </BrowserRouter>

        
    )
}
export default LeftSidebar;
