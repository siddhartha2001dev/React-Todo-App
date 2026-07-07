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

            
            <div className="mt-6 mx-4 max-h-[420px] overflow-y-auto pr-1 space-y-2.5">

                {
                    todo.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-10 text-center border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                            <span className="text-3xl mb-2">📝</span>
                            <p className="text-slate-400 text-sm font-medium">
                                No todos yet — add your first task above
                            </p>
                        </div>
                    ) : (
                        todo.map((item) => (
                            <div
                                key={item.id}
                                className="group flex items-center justify-between gap-3 h-14 bg-gradient-to-br from-violet-50 via-indigo-50/60 to-white ring-1 ring-indigo-100 rounded-2xl px-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_14px_rgba(79,70,229,0.15)] hover:ring-indigo-300 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                
                                <div className="flex items-center gap-3 min-w-0 flex-1">
                                    <span className="shrink-0 h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-500 transition-colors" />

                                    
                                    <div className="w-36 sm:w-52 md:w-60 h-full flex items-center overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-indigo-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-indigo-300">
                                        <span className="text-slate-700 text-[15px] font-medium tracking-tight pr-2">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="hidden sm:block h-6 w-px bg-slate-100 shrink-0" />

                                
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <button
                                        title="Edit"
                                        className="flex items-center justify-center h-8 w-8 rounded-full text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                                        onClick={() => handleUpdate(item)}
                                    >
                                        <FaEdit size={14} />
                                    </button>
                                    <button
                                        title="Delete"
                                        className="flex items-center justify-center h-8 w-8 rounded-full text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                                        onClick={() => handleDel(item.id)}
                                    >
                                        <IoTrashBinSharp size={14} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )
                }

            </div>
        </>
    )
}

export default Todolist