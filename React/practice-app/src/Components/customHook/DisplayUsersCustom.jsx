import React, { useState } from 'react';
import UseCustomFetch from './UseCustomFetch';
import SendLinkToCustom from './SendLinkToCustom';

const DisplayUsersCustom = () => {
    const [newUrl,setNewUrl]=useState('');
    const{users,error}=UseCustomFetch(newUrl);


    const handleClick=(url)=>{
        setNewUrl(url)
    }
    return (
        <div>
            <SendLinkToCustom sendUrl={handleClick}/>

            {error && <p>...Error</p>}


            <ul>    
            {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
                </ul>
            
        </div>
    );
}

export default DisplayUsersCustom;
