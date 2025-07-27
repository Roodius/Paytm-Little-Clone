
export function SendMoney(){

    return <div className="">   
        <div className="h-screen justify-center items-center flex flex-col  gap-20">
<span className="flex justify-center items-center text-3xl font-bold">Send Money</span>
            <div className="p-20  border-black border-2 rounded-2xl">
                <div className="flex flex-col gap-9">
                <div className="flex flex-row items-center gap-5 border border-black rounded-2xl p-1 w-50 hover:border-purple-600 border-2">
            <img className="w-8 h-8 rounded-full object-cover object-center ml-2" src="src/assets/profile.jpg" alt="nature image"/><span className="text-lg">Roodius</span>
             </div>
             <div>
                <span className="text-gray-600">Amount in(Rs)</span>
             </div>
            </div>
            <div className="flex flex-col gap-9">
                <input className="focus:outline-none" type="text" placeholder="Enter Amount"/>
                <button className="w-80 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4  rounded-lg placeholder:font-semibold">Initiate Transfer</button>
            </div>
            
            </div>
        </div>
    </div>
}