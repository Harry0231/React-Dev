import React, {useState} from 'react'

function Toogle() {
    const[myname,setMyname] = useState("Harry Potter")
    function ChangeName(){
        let a = myname;
        (a === "Harry Potter")?
        setMyname("Harry Rajput") : setMyname("Harry Potter");
    }


  return (
    <div>
      <h1>My name is:-  { myname }</h1>
      <button className='btn-primary'onClick={ChangeName}>Change-Me</button>
    </div>
  )
}

export default Toogle
