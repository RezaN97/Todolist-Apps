import { useState } from "react"



const Home = () => {

    type Todo = {
        text: string;
        timestamp: string
    }

    const [task, setTask] =  useState("")
    const [todo, setTodo] = useState<Todo[]>([])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (task === " ") {
            return alert("Please Fill All Data")
        }
        
        const todoItems:Todo = {
            text: task,
            timestamp: new Date().toLocaleString(),
        } 

        setTodo([...todo, todoItems])
        setTask("")

    }


    return (
        <>
        {/* desktop */}

        <div className="hidden sm:block">
            <h1 className="font-bold">Todo List Apps</h1>
                <h3>created by Reza Nur Arifin</h3>
                <div className="w-100 h-40 rounded-3xl bg-amber-400">
                    <form onSubmit={handleSubmit} className=" p-5">
                        <label htmlFor="task" 
                            className="font-bold text-xl text-gray-800 my-2">Your Task</label>
                        <input value={task} type="text" name="task" onChange={(e) => setTask(e.target.value)} placeholder="Please fill your task.." 
                            className="bg-white w-full text-gray-800 mx-2 p-2" />
                        <button type="submit"  className="my-2">Add</button>
                    </form>

                    {/* todo list */}
                    <ul className="mt-10 space-y-2">
                        <h2 className="text-2xl font-semibold">My Task</h2>
                        {todo.map((todo, index) => (
                            <li key={index}
                                className="bg-gray-100 text-gray-800 py-2 rounded shadow">
                                <div className="flex justify-between px-2">
                                    <span>{todo.text}</span>
                                    <span className="text-sm text-gray-500">{todo.timestamp}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
                
{/* mobile screen  */}
      <div className="block sm:hidden p-2">
            <h2 className="font-normal text-[30px]">Todo List Apps</h2>
                <h3>created by Reza Nur Arifin</h3>
                <div className="w-100 h-40 rounded-3xl bg-amber-400">
                    <form onSubmit={handleSubmit} className=" p-5">
                        <label htmlFor="task" 
                            className="font-bold text-xl text-gray-800 my-2">Your Task</label>
                        <input value={task} type="text" name="task" onChange={(e) => setTask(e.target.value)} placeholder="Please fill your task.." 
                            className="bg-white w-full text-gray-800 mx-2 p-2" />
                        <button type="submit"  className="my-2">Add</button>
                    </form>

                    {/* todo list */}
                    <ul className="mt-10 space-y-2">
                        <h2 className="text-2xl font-semibold">My Task</h2>
                        {todo.map((todo, index) => (
                            <li key={index}
                                className="bg-gray-100 text-gray-800 py-2 rounded shadow">
                                <div className="flex justify-between px-2">
                                    <span>{todo.text}</span>
                                    <span className="text-sm text-gray-500">{todo.timestamp}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>

        
        </>
    )
}

export default Home