import React, { useState } from 'react'

const Counter = () => {
  const [counter,setCounter]=useState(0);
  
const increment=()=>{
  
  
  setCounter((counter) => counter+1);
  // console.log(counter)
};
const decrement=()=>{
  
  
  setCounter((prev) => prev+2);
  // console.log(counter)
};
// increment();
// increment();
//console.log(counter)

  return (
    <div>
    <h2>
      Count : {counter}
    </h2>

    <button onClick={increment} className='border-2 border-white bg-sky-600 hover:bg-black' > Ankita</button>
    <button onClick={decrement} className='border-2 border-white bg-sky-600 hover:bg-black' > Anjan</button>
    
    </div>
  )
  
};

export default Counter;