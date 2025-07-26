import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"



export const Signup = () => {

    return <div className="bg-white">
        <div>
            <div>
                <Heading/>
                <SubHeading/>
                <InputBox/>
                <InputBox/>
                <InputBox/>
                <div>
                <Button />
                </div>
                <BottomWarning/>
            </div>
        </div>
    </div>
}
