import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../Slice/FetchSlice';

const FetchUser = () => {
    const {users,error,isLoading}=useSelector((state)=>state.userData)
    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch])


    return (
        <div>

            {error && <p>...Error</p>}

            {isLoading && <p>....isLoading</p>}

            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
            ))}
            </ul>

            
        </div>
    );
}

export default FetchUser;
