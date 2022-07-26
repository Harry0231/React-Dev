import React, {useState} from 'react'

function Login() {
    const[user, setUser]=useState('');
    const[paswords, setPaswords]=useState('');
    const[UserErr,setUserErr]=useState(false);


    function loginHandle(e)
    {
        e.preventDefault();

    }
    function userHandler(e)
    {
        let item = e.target.value.length;
        if(item.length<3)
        {
            setUserErr(true)
        }
        console.log(e.target.value.length)

    }
  return (
    <div>
        <h1>Login</h1>
       <form onSubmit={loginHandle}>
       <input type="text" placeholder="Enter your id" onChange={userHandler}/>{UserErr? <span>not valid</span>: null}
       <br/><br/>
        <input type="text" placeholder="Enter your password"/>
        <br/> <br/>

        <button type = "submit">LOGIN</button>
       </form>

      
    </div>
  )
}

export default Login
