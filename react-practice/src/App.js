// import React, { useState } from 'react';
import React from 'react';
import './App.css';
// import PropsExample from './Components/PropsExample';
// import Usestateobj from './Components/usestateobj';
// import Usestatearray from './Components/usestatearray';
// import CallApi from './Components/CallApi';
// import Students from './Components/Students';
// import Func from './Components/Func';

// import Appp from './Components/Mine';
// import Print from './Components/Print';
// import Form from './Components/Form';
// import Toogle from './Components/Toogle';
// import Memoo from './Components/Memoo';

// import StateTutorial from './Components/UseState/StateTutorial';
import EffectTutorial from './Components/UseEffect/EffectTutorial';
// import MemoTutorial from './Components/UseMemo/MemoTutorial';
// import CallBackTutorial from './Components/UseCallback/CallbackTutorial';
// import RefTutorial from './Components/UseRef/RefTutorial';
// import Hoc from './Hoc';


function App() {
  // const [name,setName]=useState('harry')
  // const [name1,setName1]=useState('gautam')
  // const [name2,setName2]=useState('shanket')
  // states for props
//   const [newName,setNewName] = useState("Rajput")
  

//   //pass object in props
//   const [newObjName,setNewObjName] = useState({
//     objname: 'Haranarayan', objage:23,
//   });

//   //pass Array in Props

//  const [NewNameArr,setNewNameArr] = useState([
//     'Array harry',
//     'Array Rajput'
//   ]);

// //method as props
// const ChangeName = ()=>{
//   setNewName("Potter")
// }
  return(

    <div className='App'>
      {/* <Func/>
      <Appp/> */}
      {/* <h1 >props in react</h1>
      <Students name={name} email={"123@gmail.com"} other={{address:'udaipur', phone:"54455768"}}/>
      <Students name={name1} email={"456@gmail.com"} other={{address:'jaipur', phone:"979878768"}}/>
      <Students name={name2} email={"789@gmail.com"} other={{address:'vadodara', phone:"997543687"}}/>
      <button onClick={()=>{setName("rajput")}}>UPDATE-NAME-1</button>
      <button onClick={()=>{setName1("sharma")}}>UPDATE-NAME-2</button>
      <button onClick={()=>{setName2("yadav")}}>UPDATE-NAME-3</button> */}
      {/* <Print/> */}
      {/* <Form/> */}
      {/* <CallApi /> */}
      {/* <Toogle/> */}
      {/* <Usestatearray /> */}
      {/* <Usestateobj /> */} 
      {/* <PropsExample  */}
      {/* //props as string
      title='Harry' Age="24"
   
      //props for states or updated data
      name={newName}
      //props with method
      ChangeNameProps={ChangeName}
      //props as object
      NewObjName={newObjName}
         //props as Array
         newNameArr={NewNameArr} */}

      {/* /> */}


    {/* Hooks  */}
      {/* <Memoo /> */}

      {/* <StateTutorial /> */}
      <EffectTutorial />
      {/* <MemoTutorial/> */}
      {/* <CallBackTutorial/> */}
      {/* <RefTutorial/> */}


      {/* <Hoc /> */}





  


    </div>
  )
}


  
 
    

export default App;
