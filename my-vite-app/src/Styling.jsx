
function Styling(){
    const lastName = "parveen"
    const fullName = "sahiba Parveen"
function getName(){
        return "Sahiba";
    }
    function getLastName(){
        return lastName;
    }
    // function with parameter
    //   function getFullName(fullName){
    //     return fullName;
    // }
    // Arrow function with parameter
     const getFullName=(fullName)=>{
        return fullName;
    }
    function EventHandle(){
        alert("button was clicked");
    }

return<>
<div>
    <h1 style={{color:"green",textAlign:"center"}}>Function and Event </h1>
<h1 style={{textAlign:"center"}}>good morning</h1>
<h2 style={{textAlign:"center",color:"red"}}>Hello {getName()}</h2>
<h2 style={{textAlign:"center"}}>Hello {getLastName()}</h2>
<h2 style={{textAlign:"center",color:"blue"}}>Hello {getFullName(fullName)}</h2>
<button style={{marginLeft:"47%"}} onClick={EventHandle}> click me </button>
</div>
</>
}
export default Styling;