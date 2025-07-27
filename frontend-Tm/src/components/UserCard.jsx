

export function UserCard({name}){

    return <div className="flex flex-row justify-between items-center w-md m-10 border border-2xl p-3 rounded-xl">
        {name}
        <button className="text-white bg-purple-500 p-2 rounded-xl">Send Money</button>
    </div>
}