import "./App.jsx";
import LeftSlidebar from "./LeftSidebar";
import Navbar  from "./Navbar"; 
import  RightSidebar from './RightSidebar';
import MainContainer from './MainContainer';
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
     <Navbar />
    <LeftSlidebar />
     <RightSidebar />
     <MainContainer />
      <Footer />
    </>
  );
}

export default App;


