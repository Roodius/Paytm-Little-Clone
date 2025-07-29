import { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import axios from "axios"

export function Users(){
    const [users , setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    //Debouncing we can add     
    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get(`http://localhost:5000/user/bulk?filter=${filter}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(res => {
            setUsers(res.data.user)
        }).catch(err => {
            console.log("Error", err);
        })
    },[filter])

    return <div className="">
        <div>
            <input onChange={(e) => {
                setFilter(e.target.value)
            }}
  className="shadow flex justify-between focus:outline-0 m-10 font-medium cursor-text focus:border-2 border-purple-700 rounded-xl w-[95%] h-10 pl-4"
  type="text"
  placeholder="search users ..."
/>

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