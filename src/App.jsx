 import React, { useState } from 'react'
 import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount,incrementAsync } from './Store/reducers/CounterSlice';
 
 const App = () => {
  const {value} = useSelector((state)=>state.counter) //whole store
  // let [count,setCount] = useState(0)
  const dispatch = useDispatch();  // needed for action dispatch
   return (
     <div className='m-auto container p-10 mt-5 bg-red-100'>
      
      <h1 className='text-center text-3xl font-bold mb-5 text-red-300'> Value : {value}</h1>
    <div className='text-center'>
      <button onClick={()=>dispatch(increment())} className='border rounded bg-blue-500 px-4 py-2'>Increment</button>
      <button onClick={()=>dispatch(decrement())} className='border rounded bg-blue-500 px-4 py-2'>Decrement</button>
    
    
    <button onClick={()=>dispatch(incrementAsync(5))} className='border rounded bg-blue-500 px-4 py-2'>Increment by 5</button>
    </div>
     </div>
   )
 }
 
 export default App