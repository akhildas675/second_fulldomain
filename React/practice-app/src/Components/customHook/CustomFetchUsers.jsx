import React from 'react';
import useCustomFetch from './UseCustomFetch';

const CustomFetchUsers = () => {

    const{data,error}=useCustomFetch('https://jsonplaceholder.typicode.com/users')

    if(error) return <p>Error:{error}</p>
    return (
        <div>

            <h1>Users</h1>

            <ul>
                {data.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
            
        </div>
    );
}

export default CustomFetchUsers;
