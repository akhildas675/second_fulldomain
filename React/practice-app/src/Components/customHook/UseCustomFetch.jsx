import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseCustomFetch = (url) => {
   const [users,setUsers]=useState([])
   const [error,setError]=useState(null)


   useEffect(()=>{
    const fetchUsers= async ()=>{
        if(!url){
            return
        }
        try {
            const res = await axios.get(url)
            setUsers(res.data)
        } catch (error) {
            setError(error)
        }
    }
    fetchUsers()
   })

   return {users,error}
}

export default UseCustomFetch;
