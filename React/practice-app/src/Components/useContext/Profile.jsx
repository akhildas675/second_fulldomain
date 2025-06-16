import React from 'react';
import { AppContext } from './MainContext';
import { useContext } from 'react';

const Profile = () => {
const {name,phone}=useContext(AppContext)
    return (
        <div>
            <h1>Details</h1>
            <p>Name : {name}</p>
            <p>Phone: {phone}</p>
        </div>
    );
}

export default Profile;
