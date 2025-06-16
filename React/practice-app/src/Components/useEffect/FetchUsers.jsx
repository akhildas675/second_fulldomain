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
                throw new Error('Failed to fetch users')
            }
            return res.json()
        })
        .then((data)=>{
            setUsers(data)
            setError(false)
        })

        .catch((err)=>{
            setError(err.message)
        });

    },[])

    if(error) return <p>Error:{error}</p>
    return (
        <div>
            <h1>Users List</h1>

            <ul>
                {users.map((user)=>{
                    return (
                    <li key={user.id}>
                        Name: {user.name} , Email:{user.email}
                    </li>

                    )
                })}
            </ul>
            
        </div>
    );
}

export default FetchUsers;
