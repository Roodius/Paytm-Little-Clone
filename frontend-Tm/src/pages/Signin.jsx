import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";


export  function Signin(){

    

    return <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="bg-white w-[30%] h-[80%] rounded-lg p-6">
                <div className="justify-center flex">
                    <Heading label={"Sign In"}/>    
                    </div>
                    <SubHeading label={"Enter Your Information to signin"}/>
                <div className="pl-4">
                    <InputBox label={"Username"} placeholder={"Matheo"}/>
                    <InputBox label={"Password"} placeholder={"******"}/>
                </div>
                <div className="">
                    <Button label={"Sign up"}/>
                </div>
                    <BottomWarning label={"Existing Account ?"} LinkText={"Sing Up"} to={"/signup"}/>
            </div>
        </div>
}