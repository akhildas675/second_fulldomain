import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const FetchUsers = () => {
    const [users,setUsers]=useState([])
    const [error,setError]=useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            if(!res.ok){
                throw new Error("The fetching users failed");
                
            }
            return res.json()
        })
        .then((data)=>{
            setUsers(data)
            setError(null)
        })
        .catch((error)=>{
            setError(error)
        })
    },[])
    return (
        <div>
            <h1>Users</h1>
            {error && <p>Error:{error}</p>}

            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            
        </div>
    );
}

export default FetchUsers;
