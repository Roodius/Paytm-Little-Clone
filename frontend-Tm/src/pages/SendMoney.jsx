import axios from "axios";
import { useState } from "react";
import {useSearchParams} from "react-router-dom"

// searchParams
export function SendMoney(){
    const [searchParams] = useSearchParams();
    const id  = searchParams.get("id")
    const name  = searchParams.get("name")
    // geting a name and id from prev filter request

    const [inputamount, setInputAmount] = useState('')
    const [buttonText, setButtonText] = useState('Initiate Transfer')

    return <div className="">   
        <div className="h-screen justify-center items-center flex flex-col  gap-20">
<span className="flex justify-center items-center text-3xl font-bold">Send Money</span>
            <div className="p-20  border-black border-2 rounded-2xl">
                <div className="flex flex-col gap-9">
                <div className="flex flex-row items-center gap-5 border-2 border-black rounded-2xl p-1 w-50 hover:border-purple-600">
            <img className="w-8 h-8 rounded-full object-cover object-center ml-2" src="src/assets/profile.jpg" alt="nature image"/><span className="text-lg">{name}</span>
             </div>
             <div>
                <span className="text-gray-600">Amount in(Rs) :</span>
             </div>
            </div>
            <div className="flex flex-col gap-9">
                <input onChange={e => {
                    setInputAmount(e.target.value);
                }} className="focus:outline-none" type="text" placeholder="Enter Amount"/>
                <button onClick={() => {
                    axios.post("http://localhost:5000/account/transfer",{
                        to:id,
                        amount:inputamount
                        
                    },{
                        headers:{
                            Authorization:`Bearer ${localStorage.getItem("token")}` 
                        }
                    }
                ).then(res => {
                    const status = res.data.message
                    if(status == "Transfer Suucessfull"){
                        setButtonText(status);
                    } 
                    setInputAmount(0);
                })
                }} className="w-80 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4  rounded-lg placeholder:font-semibold">{buttonText}</button>
            </div>
            
            </div>
        </div>
    </div>
}