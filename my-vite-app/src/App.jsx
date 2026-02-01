import "./App.jsx";
import LeftSlidebar from "./LeftSidebar";
import Navbar  from "./Navbar"; 
import  RightSidebar from './RightSidebar';
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
     <Navbar />
    <LeftSlidebar />
     <RightSidebar />
       <Footer />
    </>
  );
}

export default App;


