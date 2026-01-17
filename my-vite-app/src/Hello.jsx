function Hello(){

    const getName=(yourName)=>
    {
        return yourName;
    }
    function handleClick(){
        alert("button is clicked");
    }
    function handleInput(event){
        console.clear();
        console.log("value:",event.target.value)
    }
    const name = "karan"
    const name2 ="arjun"
    return(
        <>
        <h1>Hellow : {getName(name)}</h1>
         <h1>Bye: {getName(name2)}</h1>
         <button onClick={handleClick}>click</button>
         <button onClick={()=>alert("end program")}>end</button>
         <input type="text" onChange={handleInput} placeholder="Enter some things"/>      </>
    )
}
export default Hello