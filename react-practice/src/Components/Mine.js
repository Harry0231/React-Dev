import {useState} from 'react';

function Appp() {
    const [data,setData]=useState("harry")
    function updateData()
    {
      setData("rajput")
     
    }
    console.log("______");
    return (
      <div className="App">
       <h1>{data}</h1>
       <button onClick={updateData}>Update Data</button>
      </div>
    );
  }
  
  export default Appp