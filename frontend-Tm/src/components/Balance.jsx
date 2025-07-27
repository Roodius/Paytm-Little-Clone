

export function Balance({balance}){

    return <div className="ml-2 font-semibold text-2xl">
        Your Balance Rs. <span className="text-green-600 text-center">{balance}</span>
    </div>
}