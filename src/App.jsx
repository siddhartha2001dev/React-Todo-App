// import { useState } from "react"


// const App = () => {

//   const [val, setVal] = useState('')
//   const [todo, setTodo] = useState([])

//   function addTodo() {

//     if (val.trim() === "") {
//       alert("Please enter task");
//       return
//     }

//     setTodo([...todo, { title: val, id: Date.now() }])
//     setVal('')
//   }

//   return (

//     <div className="flex flex-col items-center mt-6">
//       <h1 className="text-4xl font-semibold">Todo App</h1>

//       <div className="flex mt-6 gap-3">
//         <input type="text" value={val} placeholder="Enter Tasks" className="border border-1 p-2 bg-gray-200 me-2 rounded-lg" onChange={(e) => setVal(e.target.value)} />
//         <button className="bg-green-400 p-4 rounded-lg text-white" onClick={addTodo}>Add</button>
//       </div>

//       <div className="mt-5 px-4 m-4">

//         {
//           todo.map((item) => <div key={item.id}> {item.title} <button className="bg-red-600 text-white p-2 rounded-md px-5 ">Del</button>
//           </div>)
//         }


//       </div>

//     </div>
//   )
// }

// export default App








//page distribution
// import { useEffect, useState } from "react"
// import Todoform from "./Components/Todoform";
// import Todolist from "./Components/Todolist";
// import toast, { Toaster } from "react-hot-toast";




// const App = () => {
//   const [todo, setTodo] = useState(() => {
//     const savedTodos = localStorage.getItem('todos');
//     return savedTodos ? JSON.parse(savedTodos) : []
//   })


//   //Add Todo Function
//   function addTodo(val) {
//     if (val.trim() === "") {
//       alert("Please enter task");
//       return
//     }
//     setTodo([...todo, { title: val, id: Date.now() }])
//     toast.success("Todo added successfully.....");
//   }


//   //Del Todo Function
//   function delTodo(id) {
//     setTodo(todo.filter((item) => item.id !== id))
//     toast.success("Todo deleted successfully.....")
//   }


//   //useEffect
//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todo));
//   }, [todo]);

//   return (

//     <div className="flex flex-col items-center mt-6">
//       <Toaster position="top-center" />
//       <h1 className="text-4xl font-semibold">Todo App</h1>

//       <Todoform addTodo={addTodo} />
//       <Todolist todo={todo} delTodo={delTodo} />
//     </div>
//   )
// }

// export default App










//components and model implimentation
import { useEffect, useState } from "react"
import Todoform from "./Components/Todoform";
import Todolist from "./Components/Todolist";
import toast, { Toaster } from "react-hot-toast";
import DeleteModal from "./Components/DeleteModal";
import UpdateModal from "./Components/UpdateModal";




const App = () => {
  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : []
  })


  //Initial state hooks for del modal operation
  const [delModal, setDelModal] = useState(false);
  const [todoToDel, setTodoToDel] = useState(null);

  //Initial state hooks for del modal operation
  const [editModal, setEditModal] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);





  //Del Section

  //delTodoModal
  function handleDelModal(id) {
    setDelModal(true);
    setTodoToDel(id)
  }

  //cancelDel 
  function cancelDel() {
    setDelModal(false);
    setTodoToDel(null);
  }

  //Delete Todo
  function confirmDel() {
    setTodo(todo.filter((item) => item.id !== todoToDel));
    setDelModal(false);
    setTodoToDel(null);
    toast.success("Todo deleted successfully...")
  }







  //Edit Section

  //Edit Modal
  function handleEditModal(todo) {
    setEditModal(true);
    setTodoToEdit(todo)
  }


  //Edit cancel modal
  function cancelEdit() {
    setEditModal(false);
    setTodoToEdit(null)
  }


  //Confirm Edit 
  function confirmEdit(newTitle) {
    setTodo(todo.map((todo)=>todo.id ? {title: newTitle}: todo));
    setEditModal(false);
    setTodoToEdit(null)
    toast.success("Todo updated successfully....")
  }




  //Add Todo Function
  function addTodo(val) {
    if (val.trim() === "") {
      alert("Please enter task");
      return
    }
    setTodo([...todo, { title: val, id: Date.now() }])
    toast.success("Todo added successfully.....");
  }



  //useEffect
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todo));
  }, [todo]);

  return (

    <div className="flex flex-col items-center mt-6">
      <Toaster position="top-center" />
      <h1 className="text-4xl font-semibold">Todo App</h1>

      <Todoform addTodo={addTodo} />

      {/* //For Components rendering */}
      <Todolist todo={todo} delTodo={handleDelModal} editTodo={handleEditModal} />

      {/* //For Props conditional props passing */}
      {delModal && <DeleteModal cancelDel={cancelDel} confirmDel={confirmDel} />}
      {editModal && <UpdateModal cancelEdit={cancelEdit} currentValue={todoToEdit.title} confirmEdit={confirmEdit}/>}

    </div>
  )
}

export default App



