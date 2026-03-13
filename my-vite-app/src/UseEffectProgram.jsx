
// import { useEffect } from 'react';

// const UseEffectProgram = () => {
//   console.log("first")
//   useEffect(()=>{
//     console.log("second");
//   },[]);
//   return (
//     <div> use Effect hook
//         </div>
//   )
// }

// export default UseEffectProgram;

import { useState, useEffect } from 'react'

function UseEffectProgram({ name }) {

  const [count, setCount] = useState(-1)
  const [value, setValue] = useState("")
  const [data, setData] = useState("")

  function increment(){
    setCount(prev => prev + 1)
  }

  useEffect(() => {

    console.log("3")

    if(value === "Sahiba"){
      console.log("Hello Sahiba")
    }
    else if(data === "Shamama"){
      console.log("Hi Shamama")
    }

    // setCount(prev => prev + 1)

  }, [value, data])

  console.log("1", name)

  return (
    <div>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <input
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <div>Hello {count}</div>

      {console.log("2")}

      <button onClick={increment}>Increment</button>

    </div>
  )
}

export default UseEffectProgram