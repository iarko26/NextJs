import Link from "next/link"

async function fetchListOfUsers(){
try{
const apiresponse=await fetch("https://dummyjson.com/users")
.then(response=>response.json())
return apiresponse.users
}catch(error){ 
    throw new Error(error) 
}
}

export default async function ServerSideDataFetching(){
    const ListOfUsers=await fetchListOfUsers()
    // console.log(ListOfUsers)
    return(
        <div>
            <h1>Server Side Data Fetching</h1>
            <ul>
                {
                   ListOfUsers && ListOfUsers.length>0
                   ?ListOfUsers.map((user,index)=>(
                       <li key={index} className="mt-5 cursor-pointer">
                        <Link href={`/server-data-fetch/${user.id}`}>
                            {user.firstName}
                        </Link>
                       </li>
                   )):<li>No Users Found</li>
                }
            </ul>
        </div>
    )
}