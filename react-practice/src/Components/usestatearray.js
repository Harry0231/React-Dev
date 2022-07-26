import React, {useState} from 'react'

const Usestatearray = () => {
    const bioData = [
        {
            id:0,myName:'harry',age:24
        },
        {
            id:1,myName:'harit',age:20
        } ,
        {
            id:2,myName:'singh',age:22
        }
    ]
    // console.log(bioData)
    const[array,setArray] = useState(bioData)
    function clearArray(){
        setArray([]);

    }
  return (
    <div>
     { array.map((curr)=> {
        return <h1 key={curr.id}>  NAME:{curr.myName} & AGE:{curr.age}</h1>
     })}
     <button onClick={clearArray}>Clear</button>
    </div>
  )
}

export default Usestatearray
