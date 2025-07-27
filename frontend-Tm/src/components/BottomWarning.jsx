import {Link} from "react-router-dom"

export function BottomWarning({label,LinkText, to}){

    return <div className="py-2 text-sm flex justify-center font-medium">
        <div>
        {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer text-blue-700" to={to}>
            {LinkText}
        </Link>
    </div>
}