import axios from "axios";
import { useEffect,useState } from "react";

const useCustomFetch=(url)=>{
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);


    useEffect(()=>{
        const fetchUsers=async ()=>{
            try {
                const res=await axios.get(url)
                setData(res.data)
                setError(null)
            } catch (error) {
                setError(error.message)
            }

        }

        fetchUsers()
    },[url])


    return {data,error}
}

export default useCustomFetch