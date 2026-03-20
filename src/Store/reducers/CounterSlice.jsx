import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: { //reducer
    increment: (state) => { //action
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => { //this is reducer funtion  old state + action = new state
         console.log(action)
        state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

 export const incrementAsync = (amount)=>(dispatch)=>{
          setTimeout(()=>{
          dispatch(incrementByAmount(amount))
          },2000)
 }


export default counterSlice.reducer //counterReducer

//steps
// create store 
// wrap app under Provider 
// create slice
// resister reducer in store