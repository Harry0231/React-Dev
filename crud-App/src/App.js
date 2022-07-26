import React,{useState,useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Table from './Components/Table';
// import { nanoid } from 'nanoid'

const getDatafromLS=()=>{
  const data = localStorage.getItem('values');
  if(data){
    return JSON.parse(data);
  }else{
    return [];
  }
}
function App() {
const[values,setValues]=useState(getDatafromLS());
// const [ key,setKey] = useState();
const [userid,setuserId]=useState('');
const [name,setName]=useState('');
const [email,setEmail]=useState('');
// const [editForm,setEditForm]=useState(false);
const handleSubmit=(e)=>{
  e.preventDefault();
  let detail={
    // key:nanoid(),
    
    userid,
    name,
    email
  }
  setValues([...values,detail]);
  setName('');
  setuserId('');
  setEmail('');
  // setKey(nanoid)
  console.log(detail)
}
const handledelete=(id)=>{
  // console.log(id);
  const newvalues = values.filter((element)=>{
    return element.userid !== id
  })
  setValues(newvalues);


}
// const handleEdit=(element,index)=>{

//   setEditForm(true);
//     setId(index);
//     setValues(element.values);
// }
useEffect(()=>{
  localStorage.setItem('data',JSON.stringify(values));
},[values])
  return (
    <div className="wrapper">
      <h1>Form</h1>
      <div className="main">
        <div className="form-container">
          <form className="form-group" onSubmit={handleSubmit}>
            <lable>Id</lable>
            <input type="number" className="form-control" placeholder="Id.." required onChange={(e)=>setuserId(e.target.value)}value={userid}></input><br/>
            <lable>Name</lable>
            <input type="text" className="form-control" placeholder="Name.." required onChange={(e)=>setName(e.target.value)}value={name}></input><br/>
            <lable>Email</lable>
            <input type="email" className="form-control" placeholder="Email.." required onChange={(e)=>setEmail(e.target.value)}value={email}></input><br/>
            <button type='submit'className='btn btn-success btn-md'>Add</button>


          </form>
        </div>
        <div className="view-container">
          <>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>USER-ID</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                <Table values={values} handledelete={handledelete}/>
              </tbody>
            </table>
          </div>
          <button className="btn btn-danger btn-md" onClick={()=>setValues([])}>Remove-All</button>
          </>
          {/* {
            values.length < 1 && <div>No Data Are Available</div>
          } */}
        </div>
      </div>
      
    </div>
  );
}

export default App;
