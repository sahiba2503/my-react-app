import './App.css'
function Navbar(){
    return(
        <>
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
             <span>HOME</span>
              <span>CODE PROJECTS</span>
               <span>CODE LAB</span>
                <span>INTERVIEW QUESTIONS</span>
                 <span>FREE TEMPLATES</span>
                  <span>KEY SORTCUTS</span>
                      </div>
          </div>
          </>
          
    )
    
}
export default Navbar;