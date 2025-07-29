import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export  function Signin(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buttonText, setButtonText] = useState("Sign in")
    return <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="bg-white w-[30%] h-[80%] rounded-lg p-6">
                <div className="justify-center flex">
                    <Heading label={"Sign In"}/>    
                    </div>
                    <SubHeading label={"Enter Your Information to signin"}/>
                <div className="pl-4">
                    <InputBox onChange={e => {
                        setUsername(e.target.value)
                    }} label={"Username"} placeholder={"Matheo"}/>
                    <InputBox onChange={e => {
                        setPassword(e.target.value)
                    }} label={"Password"} placeholder={"******"}/>
                </div>
                <div className="">
                    <Button onClick={() =>{
                        axios.put("http://localhost:5000/user/signin", {
                            username,
                            password
                        }).then(res => {
                            const status = res.data.Done
                            if(status){
                                setButtonText("Signined")
                            }
                        }).catch(err => {
                            if(err){
                                navigate("/signup")
                            }
                        }) 
                        
                    }} label={buttonText}/>
                </div>
                    <BottomWarning label={"Existing Account ?"} LinkText={"Sing Up"} to={"/signup"}/>
            </div>
        </div>
}