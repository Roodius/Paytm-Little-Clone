

export function InputBox({label, placeholder}){

    return <div className="">
        <div className="text-sm font-medium text-left py-3">
            {label}
        </div>
        <input className=" p-2 w-60 border-purple-600 focus:outline-none rounded-sm h-9" type="text" placeholder={placeholder}/>
    </div>
}