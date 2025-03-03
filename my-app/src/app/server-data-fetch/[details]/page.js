async function fetchuserDetails(currentid){
try{
    const apiresponse=await fetch(`https://dummyjson.com/users/${currentid}`)
    const data=await apiresponse.json()
  return data

}catch(e){
    throw new Error(e)
}
}

export default async function UserDetails({params}){
    const UserDetails=await fetchuserDetails(params.details)
    
    return(
        <div>
            <h1>User Details</h1>
            <div>
                <h3>
                    {UserDetails.firstName} {UserDetails.lastName}
                </h3>
                <p>{UserDetails.email}</p>
            </div>
        </div>
    )

}