import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"



export const Signup = () => {

    return <div className="bg-slate-300 h-screen flex justify-center items-center">
        <div className="bg-white w-[30%] h-[80%] rounded-lg p-6">
            <div className="justify-center flex">
                <Heading label={"Sign Up"}/>    
                </div>
                <SubHeading label={"Enter Your Information to create an Account"}/>
            <div className="pl-4">
                <InputBox label={"First Name"} placeholder={"John"}/>
                <InputBox label={"Last Name"} placeholder={"Matheo"}/>
                <InputBox label={"Password"} placeholder={"******"}/>
            </div>
            <div className="">
                <Button label={"Sign up"}/>
            </div>
                <BottomWarning label={"Alerady have an account ?"} LinkText={"Sing in"} to={"/signin"}/>
        </div>
    </div>
}
