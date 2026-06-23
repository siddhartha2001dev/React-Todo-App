import { useState } from "react"


const Todoform = ({ addTodo }) => {

    const [val, setVal] = useState("");
    function handleAdd() {
        addTodo(val)
        setVal("")
    }
    
    return (
        <>

            <div className="flex mt-6 gap-3">
                <input type="text" value={val} placeholder="Enter Tasks" className="border border-1 p-2 bg-gray-200 me-2 rounded-lg" onChange={(e) => setVal(e.target.value)} />

                <button className="bg-green-400 p-4 rounded-lg text-white" onClick={handleAdd}>Add</button>
            </div>

        </>
    )
}

export default Todoform