

const Todolist = ({ todo, delTodo }) => {

    function handleDel(id) {
        delTodo(id)
    }
    return (

        <>

            <div className="mt-5 px-4 m-4">

                {
                    todo.map((item) => <div key={item.id}> {item.title} <button className="bg-red-600 text-white p-2 rounded-md px-5 " onClick={() => handleDel(item.id)}>Del</button>
                    </div>)
                }


            </div>
        </>
    )
}

export default Todolist