import "./App.jsx";
import LeftSlidebar from "./LeftSidebar";
import Navbar  from "./Navbar"; 
import  RightSidebar from './RightSidebar';
import MainContainer from './MainContainer';

function App() {
  return (
    <>
    <Navbar />
    <LeftSlidebar />
     <RightSidebar />
     <MainContainer />
    </>
  );
}

export default App;


