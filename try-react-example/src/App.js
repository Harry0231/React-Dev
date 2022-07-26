import React, { useState } from 'react';
import './App.css';
import Profile from './Components/Profile';
import Student from './Components/Student';
import Login from './Components/Login';



function App() {

  const[name,setName] =useState('');
  const[terms,setTerms] = useState(false);
  const[option,setOption] = useState('');

  function getFormData(e)
  {
    console.log(name,terms,option);

    e.preventDefault();

  }

const[data,setData] = useState('')
const[print,setPrint] = useState("false")
function getData(val) {
    console.log(val.target.value)
    setData(val.target.value)
    setPrint(false)
}
  // const[name,setName]=useState("Anjali")
  const[status, setStatus] = useState(false)
  return (
    <div className="App">
      <Login/>
   
      <Profile/>
      <h1>FORM</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder="name" onChange={(e) => { setName(e.target.value)}}/> <br/><br/>
        <select onChange={(e) => { setOption(e.target.value)}}>
          <option>Select</option>
          <option>harry</option>
          <option>aditi</option>
          <option>anjali</option>

        </select> <br/><br/>

        <input type= "checkbox" onChange={(e) => { setTerms(e.target.value)}}/> <span>Accept term & condition</span> <br/><br/>
        <button type="submit">submit</button>


      </form> 
       {
        status? <h1>Harry</h1> : null
      }



       <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button> 
     <button onClick={() => setStatus(!status)}>Show&Hide</button>


       {
        print?
        <h1>{data}</h1>
        : null
      } 
       <h1>{data}</h1> 
       <input type="text" onChange={getData}></input>
      <button onClick={() => setPrint(true)}>Update</button> 
       <Student name={name}/>
      <button onClick={() => {setName("Aditi")}}>Update</button> 
   
    </div>
  );
}

export default App;
