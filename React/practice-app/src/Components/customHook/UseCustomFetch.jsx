import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseCustomFetch = (url) => {
    const [users,setUsers]=useState([])
    const [error,setError]=useState(null);


    useEffect(()=>{
        if(!url){
            return
        }
        const fetchUsers= async(url)=>{
            try {
                const response = await axios.get(url)
                setUsers(response.data)
            } catch (error) {
                setError(error)
            }
        }
        fetchUsers()
    })

    return {users,error}
}

export default UseCustomFetch;
