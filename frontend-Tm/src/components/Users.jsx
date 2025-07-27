import { UserCard } from "./UserCard";


export function Users(){

    return <div className="">
        <div>
            <input className="shadow  flex justify-between focus:outline-0 m-10 placeholder:font-medium" type="text" placeholder="search users ..."/>
        </div>
        <UserCard name={"Roodius"}/>
    </div>
}