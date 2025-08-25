import React from 'react';

import { fetchUsers } from '../Slice/UsersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const UsersFetch = () => {
    const {data,isLoading,error}=useSelector((state)=>state.users)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])

    if(isLoading) return <h2>Data is Loading</h2>
    if(error) return <h2>Error:{error}</h2>


    return (
        <div>

            <ul>
                {data.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            
        </div>
    );
}

export default UsersFetch;
