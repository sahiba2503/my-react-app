// import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import nameofimage from "file name" use name of the image for using image
// import viteLogo from '/vite.svg'

// import './App.css'
import Hello from "./Hello"
import Bye from "./Bye"
//first hello is the componet and second is for file name.

function App() {
  const headingStyle = {
    color:"green",
    backgroundColor:"yellow",
    fontSize:"30px",
    textAlign:"center"
  }
  return (
    <>
      <h1 style={headingStyle}>App Component</h1>
      <Hello/>
      <Bye/>
      <img src={reactLogo} width='50px'/>

    </>
  )
}

export default App
//  <App /> it means app function /component is calling.
//<component Name /> here calling  componen
//<img src={reactLogo}/> {name of the image }
//for inline styling we create a object inside  the component.