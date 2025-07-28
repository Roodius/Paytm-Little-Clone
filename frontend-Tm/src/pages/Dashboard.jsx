import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import {ErrorBoundary} from "react-error-boundary" 

export  function Dashboard(){

    return <div>
        <Appbar/>
        <div className="m-8">
            <Balance balance={"8,900"}/>
            <ErrorBoundary fallback={<p>Something went wrong</p>}><Users/></ErrorBoundary>
        </div>
    </div>
}
