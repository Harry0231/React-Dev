// import React,{useState,useEffect} from 'react'
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import Table from './Components/Table';

// const getDatafromLS=()=>{
//   const data = localStorage.getItem('values');
//   if(data){
//     return JSON.parse(data);
//   }else{
//     return [];
//   }
// }
// function App() {
// const[values,setValues]=useState(getDatafromLS());
// const [id,setId]=useState('');
// const [name,setName]=useState('');
// const [email,setEmail]=useState('');
// const [editForm,setEditForm]=useState(false);
// const[saves,setSaves]=useState(name);

// const handleSubmit=(e)=>{
//   e.preventDefault();
//   let detail={
//     id,
//     name,
//     email
//   }
//   setValues([...values,detail]);
//   setName('');
//   setId('');
//   setEmail('');
  
// }
// // console.log(values)
// const handledelete=(id)=>{
//   // console.log(id);
//   const newvalues = values.filter((element)=>{
//     return element.id !== id
//   })
//   setValues(newvalues);


// }
// const handleEdit=(element,index)=>{
// // console.log(element);
// //   setEditForm(true);
//   //   setId(index);
//   // let detail={
//   //   id,
//   //   name,
//   //   email
//   // }
//   // setValues([...values,detail]);
//   console.log(id);
//   setId(element.id);
//    setName(element.name);   
//   setEmail(element.email);  
// }
// function save(){
//   console.log(saves);


  
// }
// useEffect(()=>{
//   localStorage.setItem('data',JSON.stringify(values));
// },[values])
//   return (
//     <div className="wrapper">
//       <h1>Form</h1>
//       <div className="main">
//         <div className="form-container">
//           <form className="form-group" onSubmit={handleSubmit}>
//             <lable>Id</lable>
//             <input type="number" className="form-control" placeholder="Id.." required onChange={(e)=>setId(e.target.value)}value={id}></input><br/>
//             <lable>Name</lable>
//             <input type="text" className="form-control" placeholder="Name.." required onChange={(e)=>setName(e.target.value)}value={name}></input><br/>
//             <lable>Email</lable>
//             <input type="email" className="form-control" placeholder="Email.." required onChange={(e)=>setEmail(e.target.value)}value={email}></input><br/>
//             <button type='submit'className='btn btn-success btn-md'>Add</button><br/><br/>
//           <button onClick={save} className='btn btn-success btn-md'>Save</button>

            




//           </form>
//         </div>
//         <div className="view-container">
//           {values.length>0&&<>
//           <div className="table-responsive">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>E-mail</th>
//                   <th>Delete</th>
//                   <th>Update</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <Table values={values} handledelete={handledelete} handleEdit={handleEdit} />
//               </tbody>
//             </table>
//           </div>
//           <button className="btn btn-danger btn-md" onClick={()=>setValues([])}>Remove-All</button>
//           </>}
//           {
//             values.length < 1 && <div>No Data Are Available</div>
//           }
//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default App;
    