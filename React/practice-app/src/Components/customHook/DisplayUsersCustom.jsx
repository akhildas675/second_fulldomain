import React, { useState } from 'react';
import UseCustomFetch from './UseCustomFetch';
import SendLinkToCustom from './SendLinkToCustom';

const DisplayUsersCustom = () => {
    const[newUrl,setUrl]=useState(null)
    const{users,error}=UseCustomFetch(newUrl)


    const handleChange=(newUrl)=>{
        setUrl(newUrl)
    }





    if(error) return <p>Error:{error}</p>
    return (
        <div>


            <SendLinkToCustom sendLink={handleChange}/>


            <h1>Users</h1>

            <ul>
                {users.map((user)=>(
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>



            
        </div>
    );
}

export default DisplayUsersCustom;
