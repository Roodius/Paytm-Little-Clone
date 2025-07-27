import { Link } from "react-router-dom"

export function UserCard({name}){

    return <div className="flex flex-row justify-between items-center w-md m-10 border border-2xl p-3 rounded-xl">
         <div className="flex flex-row items-center gap-2">
            <img
      className="w-8 h-8 rounded-full object-cover object-center"
      src="src/assets/profile.jpg"
      alt="nature image"/><span className="text-lg">{name}</span>
         </div>
        <Link className="text-white bg-purple-500 p-2 rounded-xl" to={"/sendmoney"}>Send Money</Link>
        
    </div>
}