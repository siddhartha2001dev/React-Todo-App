
import { IoTrashBinSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";


const Todolist = ({ todo, delTodo, editTodo }) => {

    function handleDel(id) {
        delTodo(id)
    }

    function handleUpdate(todo) {
        editTodo(todo)
    }


    return (

        <>

            <div className="mt-5 px-4 m-4">

                {
                    todo.map((item) => <div key={item.id}> {item.title}
                        <button className="bg-white p-2 rounded-md px-5 border-2 border-solid" onClick={() => handleUpdate(item)}><FaEdit /></button>
                        <button className="bg-red-600 text-white p-2 rounded-md px-5 " onClick={() => handleDel(item.id)}><IoTrashBinSharp /></button>
                    </div>)

                }


            </div>
        </>
    )
}

export default Todolist