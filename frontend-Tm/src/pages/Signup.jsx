import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"


export const Signup = () => {
    const [firstName ,setFirstName] = useState("");
    const [lastName ,setLastName] = useState("");
    const [password ,setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [label, setLabel] = useState("Sign up");

    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="bg-white w-[30%] h-[90%] rounded-lg ">
            <div className="justify-center flex">
                <Heading label={"Sign Up"}/>    
                </div>
                <SubHeading label={"Enter Your Information to create an Account"}/>
            <div className="pl-4">
                <InputBox onChange={e => {
                    setFirstName(e.target.value);
                }} label={"First Name"} placeholder={"John"}/>
                <InputBox onChange={e => {
                    setLastName(e.target.value)
                }} label={"Last Name"} placeholder={"Matheo"}/>
                <InputBox onChange={e => {
                    setUsername(e.target.value)
                }} label={"Username"} placeholder={"username"}/>
                <InputBox onChange={e => {
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"******"}/>
            </div>
            <div className="">
                <Button onClick={async () => {
                    const res = await axios.post("http://localhost:5000/user/signup",{
                        username,
                        firstName,
                        lastName,
                        password
                    })
                    localStorage.setItem("token",res.data.token)
                    // localStorage.removeItem("token") 
                    if(res) {setLabel("Signup Completed")}
                }} label={label}/>
            </div>
                <BottomWarning label={"Alerady have an account ?"} LinkText={"Sing in"} to={"/signin"}/>
        </div>
    </div>
}
