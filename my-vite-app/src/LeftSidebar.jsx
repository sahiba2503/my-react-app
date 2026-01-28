
import "./App.css"
import logo from './assets/yahu.svg';
function LeftSidebar(){    
                    
            
    return(
        <>
        <div class="Leftsidebar">

        <div id='yahuLogo'>
        <img src={logo} alt="logo" />
        </div>
        <ul>
            <li className="TopicColorR" >LEARN HTML</li>
            <li className="TopicColorB" >LEARN CSS</li>
            <li className="TopicColorR" >LEARN SASS</li>
            <li className="TopicColorB" >LEARN Bootstrap</li>
            <li className="TopicColorR" >LEARN JavaSript</li>
            <li className="TopicColorB" >LEARN Advance.js</li>
            <li className="TopicColorR" >LEARN jQuery</li>
            <li className="TopicColorB" >LEARN PHP</li>
            <li className="TopicColorR" >LEARN HTML</li>
        </ul>
        </div>
        </>
    )
}
export default LeftSidebar;
