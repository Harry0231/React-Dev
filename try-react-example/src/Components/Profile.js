import React, {useState} from 'react'

function Profile() {
    const[login, setLogin]=useState(2)
  return (
    <div>
        {/* else if condition */}
      {login===1? <h1>user 1</h1> : login===2? <h1>user 2</h1>: <h1>user 3</h1>}

    </div>
  )
}

export default Profile
