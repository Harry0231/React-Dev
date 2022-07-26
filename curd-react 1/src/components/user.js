import React from 'react'
import './user.css'

const User = ({id,email,name,username,onDelete}) => {

    const handleDelete = () => {
        onDelete(id);
    }

    // const handleEdit = () => {
    //     onDelete(id);
    // }

    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span>{username}</span>
            <span>
        
                <button onClick={handleDelete}>delete</button>
                {/* <button onClick={handleEdit}>edit</button> */}
               
            </span>
        </div>
    )
}

export default User
