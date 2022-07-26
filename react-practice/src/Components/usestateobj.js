import React from 'react'

const Usestateobj = () => {
    const[myObject,setMyObject] = React.useState({
        myName:"HARRY",
        myAge:24,
        myDegree:"CSE"
    });
    function changeObj(){
        setMyObject({...myObject,myDegree:"IT"})
    }
  return (
    <div>
      <h1>NAME:{myObject.myName} & AGE:{myObject.myAge} & Degree:{myObject.myDegree}</h1>
      <button onClick={changeObj}>click</button>
    </div>
  )
}

export default Usestateobj
