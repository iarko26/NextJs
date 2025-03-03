"use client"

import { useEffect, useState } from "react"
import useSWR from "swr"
//useEffect
//useSWR
//loading state
const fetcher = (...args) => fetch(...args).then(res => res.json())
export default function ClientSideDataFetching(){
    // const [loading,setLoading]=useState(false)
    // const [users,setusers]=useState([])
    // async function fetchListOfUsers(){
    //     try
    //     {
    //         const response=await fetch("https://dummyjson.com/users")
    //         const data=await response.json()
    //         if(data?.users){
                
    //             setusers(data.users)
    //             setLoading(false)

    //         }
       
    //     }
    //     catch(e){
    //         console.log(e)
    //         setusers([])
    //         setLoading(false)
    //     }
    // }

    // useEffect(()=>{
    //     setLoading(true)
    //     fetchListOfUsers()

    // },[])

    const { data, error, isLoading } = useSWR("https://dummyjson.com/users", fetcher)
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return(
        <div>
            <h1>Client Side Data Fetching</h1>
            {
                   data && data?.users.length>0
                   ?data?.users.map((user,index)=>(
                       <li key={index} className="mt-5 cursor-pointer">
                        
                            {user.firstName}
                       
                       </li>
                   )):<li>No Users Found</li>
                }


        </div>
    )
}