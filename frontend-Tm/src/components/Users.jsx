import { useEffect, useState } from "react";
import { UserCard } from "./UserCard";
import axios from "axios"

export function Users(){
    const [users , setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/user/bulk`).then(res => {
            setUsers(res.data.user)
        })
    },[])

    return <div className="">
        <div>
            <input className="shadow  flex justify-between focus:outline-0 m-10 placeholder:font-medium" type="text" placeholder="search users ..."/>
        </div>
        <div>
            {users.map((user) => (
            <UserCard name={user}/>
        ))}    
        </div>
        
    </div>
}