import { useState } from "react"
import { IoAddCircleOutline } from "react-icons/io5";



const Todoform = ({ addTodo }) => {

    const [val, setVal] = useState("");
    function handleAdd() {
        addTodo(val)
        setVal("")
    }

    return (
        <>

            <div className="flex mt-6 gap-3">
                <input type="text" value={val} placeholder="Enter Tasks" className="border border-1 p-2 bg-gray-200 me-2 rounded-lg" onChange={(e) => setVal(e.target.value)}


                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleAdd();
                        }
                    }}
                />

                <button className="bg-green-400 p-4 rounded-lg text-white" onClick={handleAdd}><IoAddCircleOutline /></button>
            </div>

        </>
    )
}

export default Todoform