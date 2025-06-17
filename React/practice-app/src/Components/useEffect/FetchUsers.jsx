
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
                throw new Error('Fetch users failed')
            }
            return res.json()
        })
        .then((data)=>{
            setUsers(data)
            setError(null);
        })
        .catch((err)=>{
            setError(err.message)
        });
    },[])

    if(error) return <p>Error: {error}</p>
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user)=>(
                    <ul key={user.id}>
                        <li>Name:{user.name}, Email:{user.email   }</li>
                        
                    </ul>
                ))}
            </ul>
        </div>
    );
}

export default FetchUsers;
