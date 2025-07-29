import {Button} from './Button'
import {useNavigate} from "react-router-dom"

export function UserCard({user}){
    const navigate = useNavigate(); 

    return <div className="flex flex-row justify-between items-center w-md m-10 border border-2xl p-3 rounded-xl">
         <div className="flex flex-row items-center gap-2">
            <img
      className="w-8 h-8 rounded-full object-cover object-center"
      src="src/assets/profile.jpg"
      alt="nature image"/><p className="text-lg">{user.firstName} {user.lastName}</p>
         </div>
        <Button onClick={() => {
            navigate(`/sendmoney?id=${user._id}&name=${user.firstName}`)
        }} className="text-white bg-purple-500 p-2 rounded-xl" label={"Send"}></Button>
        
    </div>
}