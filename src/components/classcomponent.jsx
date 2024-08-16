import React, { useState } from 'react'

const Classcomponent = () => {
    // question number 10
    let [count,setCount] = useState(0)
    
    function Incre(){
     setCount(count+1)
    }
    function Decre(){
        setCount(count-1)
    }
    function Resett(){
        setCount(count=0)
    }
  return (
    <>
      <p placeholder="Please enter text here">Counter:{count}</p>
      <button onClick={Incre}>increment</button>
      <button onClick={Decre}>decrement</button>
      <button onClick={Resett}>reset</button>
    </>
  )
}

export default Classcomponent;

