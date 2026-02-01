
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from"./Home"
import About from"./About"
import Contact from "./Contact"
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
     <a href="/">Home</a>
     <a href="/about">About</a>
     <a href="/contact">Contact</a>
</div>
    </div>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
     </Routes>
            </BrowserRouter>
    )
    }