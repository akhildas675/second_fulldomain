import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseCustomFetch = (url) => {
    const [users,setUsers]=useState([])
    const [error,setError]=useState(null);


    useEffect(()=>{
        if(!url){
            return
        }
        const fetchUsers= async()=>{
            try {
                const res = await axios.get(url)
                setUsers(res.data)
            } catch (error) {
                setError(error)
            }
        }
        fetchUsers()
    },[url])

    return {users,error}
}

export default UseCustomFetch;
