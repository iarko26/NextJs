'use client'
import { useSearchParams } from "next/navigation"


export default function Page(){
const searchParams=useSearchParams();
console.log(searchParams)
console.log(searchParams.get('categories'),searchParams.get('page'));

    return(
        <h1>
           Product Page 
        </h1>
    )
}