import LeftSidebar from "./LeftSidebar";
import Navbar from "./Navbar"; 
import RightSidebar from "./RightSidebar";
import Footer from "./Footer.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Hello!");
   
  }, []);

  return (
    <>
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <Footer />
    </>
  );
}

export default App;
