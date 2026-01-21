import Task from './Task'
 function App() 
 {   
  const isLoggedIn = true;
   if(isLoggedIn)
    {
    return <Task/>
   }
   else{
     return <h1>please log in</h1>
   }
  
}

export default App;
