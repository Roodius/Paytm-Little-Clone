

export function Button({label}){

    return <div className="pt-6 ml-2 mr-2">
        <button className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg">
        {label}
        </button>
    </div>
}