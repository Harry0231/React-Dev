import React, { useState} from 'react'
import './Form.css';
import validator from 'validator'



function Form() {
    
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[tnc,setTnc]=useState(false)
    const[gender,setGender]=useState("")
    const[nameErr,setNameErr]=useState(false)
    const[passErr,setPassErr]=useState(false)
    const [emailError, setEmailError] = useState('')

    function getFormData(e){
        console.log(name,email,password,gender,tnc);
        e.preventDefault()  
    }
    function nameHandler(e){
        let item=e.target.value;
        if(item.length<3){
            setNameErr(true)
        
        }else{
            setNameErr(false)

        }
        setName(item);

    }
    function passHandler(e){
        let item=e.target.value;
        if(item.length<3){

            setPassErr(true)
        
        }else{
            setPassErr(false)

        }
        setPassword(item);

    }

    function EmailHandler(e){
        let item = e.target.value
  
    if (validator.isEmail(item)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
    setEmail(item)
  }
  
    
  return (
    <div className='App'>
        <h1>Form</h1>
        <form onSubmit={getFormData} >
        <label>{nameErr ? <span id='clrr'>name not valid</span>:""}</label><br />
        <input type="text" placeholder='name' onChange={nameHandler}></input> <br /> <br />
        {emailError ? <span id='clrr'>Email not valid</span>:""} <br/>
        <input type="email" placeholder="email" onChange={EmailHandler}></input> <br /> <br />
        {passErr ? <span id='clrr'>password not valid</span>:""} <br/>
        <input type="password" placeholder="password" onChange={passHandler}></input> <br /> <br />

        <select onChange={(e)=>setGender(e.target.value)}><br /> <br />
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>   
        </select><br /> <br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms And Conditions</span><br /> <br />
        <button type="submit">Submit</button>

        </form>


        
    </div>
  )
}

export default Form
