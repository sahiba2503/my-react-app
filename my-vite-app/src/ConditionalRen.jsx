

const conditionalRen = () => {
    const isLoggedIn = true;
    if(isLoggedIn){
        return<h1 style={{color:"green",textAlign:"center"}}>welcome user!</h1>
    }
    else{
        return <h2 style={{color:"red",textAlign:"center"}}> please loggin!</h2>
    }

}

export default conditionalRen
