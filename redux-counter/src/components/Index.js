import React from 'react'
import { increaseValue,decreaseValue } from '../redux/action-creator'
import { useSelector, useDispatch } from 'react-redux'



const Index = () => {
    const myState = useSelector(state=>state.ourState.count)
    const disPatch= useDispatch()
    console.log("+++myState+++", myState)
  return (
    <div>
      <h1>REDUX-COUNTER</h1>
      <button onClick={()=>disPatch(increaseValue())}>INCREMENT</button>
      <p><b>{myState}</b></p>
      <button onClick={()=>disPatch(decreaseValue())}>DECREMENT</button>

    </div>
  )
}

export default Index
