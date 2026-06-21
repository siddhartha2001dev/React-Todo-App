import { useState } from "react"


const App = () => {

  const [val, setVal] = useState('')
  const [todo, setTodo] = useState([])

  function addTodo() {
    setTodo([...todo, { title: val, id: Date.now() }])
    setVal('')
  }

  return (

    <div className="flex flex-col items-center mt-6">
      <h1 className="text-4xl font-semibold">Todo App</h1>

      <div className="flex mt-6 gap-3">
        <input type="text" value={val} placeholder="Enter Tasks" className="border border-1 p-2 bg-gray-200 me-2 rounded-lg" onChange={(e) => setVal(e.target.value)} />
        <button className="bg-green-400 p-4 rounded-lg text-white" onClick={addTodo}>Add</button>
      </div>

      <div className="mt-5 px-4 m-4">

        {
          todo.map((item) => <div key={item.id}> {item.title} <button className="bg-red-600 text-white p-2 rounded-md px-5 ">Del</button>
          </div>)
        }


      </div>

    </div>
  )
}

export default App