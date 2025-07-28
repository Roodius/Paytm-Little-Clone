import { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import axios from "axios"

export function Users(){
    const [users , setUsers] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get('http://localhost:5000/user/bulk',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(res => {
            setUsers(res.data.user)
        }).catch(err => {
            console.log("Error", err);
        })
    },[])

    return <div className="">
        <div>
            <input className="shadow  flex justify-between focus:outline-0 m-10 placeholder:font-medium" type="text" placeholder="search users ..."/>
        </div>
            <div>
  {Array.isArray(users) && users.length > 0 ? (
    users.map((user, i) => (
      <div key={i}><UserCard user={user} /></div>
    ))
  ) : (
    <div>No users found</div>
  )}
</div>
    </div>
}