import React, { useState , useEffect} from 'react'
import './Form.css';


function CallApi() {
 

const[data,setData]=useState([])
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
            result.json().then((response)=>{
                // console.log("result",response);
                setData(response);
            })
        })
    },[])
    console.log(data);
  return (
    <div className='App'>
      <h1>API-CALL</h1>
      <input type="text" placeholder="Search..." ></input><br/><br/>
      <table border={1}  align="center">
        <tr>
            <td>User-Id</td>
            <td>Id</td>
            <td>Title</td>
            <td>Completed</td>
        </tr>
        
             {
                
                data.map((item)=>
                <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed.toString()}</td>
                </tr>
                )
            }
        
      </table>
    </div>
  )
}

export default CallApi
