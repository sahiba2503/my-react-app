import "./App.jsx";
import LeftSlidebar from "./LeftSidebar";
import Navbar  from "./Navbar"; 
import  RightSidebar from './RightSidebar';
import Footer from "./Footer.jsx";
import {useEffect} from 'react'
function App() {
  // only first time will load the useEffect fun when i use []
  useEffect(()=>{
    console.log("Hello!");
  });
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


