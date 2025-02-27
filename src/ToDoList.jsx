import { useState } from "react";

function ToDoItem({todo, onDelete}) {
    return (
        <li className="flex items-center justify-between border-2 border-black rounded-md p-3 hover:bg-gray-50">
            <span className="text-base break-words flex-1">{todo.text}</span>
            <button onClick={() => onDelete(todo.id)}
            className="ml-2 p-2 border-black border-2 font-semibold bg-red-500 hover:bg-red-600 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-red-800 text-white rounded-md flex items-center justify-center"
            >
                <i className="fas fa-trash-alt text-sm"></i>
            </button>
        </li>
    )
}

function ToDoList() {
    const [todos, setTodos] = useState([]);
    const [toDoInput, setToDoInput] = useState("");

    const handleAddToDo = () => {
        if(toDoInput.trim() === "") {
            return
        }

        const task = {
            id: Date.now(),
            text: toDoInput
        }

        setTodos([...todos, task]);
        setToDoInput("");
    }

    const handleDeleteToDo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <>
            <div className="min-h-screen bg-yellow-200 flex flex-col justify-center items-center p-4">
                <div className="w-full max-w-md mx-auto">
                    <h1 className="text-3xl sm:text-4xl uppercase font-bold mb-6 sm:mb-8 text-center">ToDo List</h1>

                    <div className="flex flex-col sm:flex-row gap-2 mb-6">
                        <input
                        className="w-full border-black border-2 p-2.5 focus:outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:bg-violet-100 rounded-md"
                        placeholder="Tambah tugas baru..." value={toDoInput} onChange={(e) => setToDoInput(e.target.value)}
                        />
                        <button className="h-12 border-black border-2 p-2.5 font-semibold bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md flex items-center justify-center whitespace-nowrap"
                        onClick={handleAddToDo}>
                        <i className="fas fa-plus mr-1"></i> Tambah
                        </button>
                    </div>

                    <div className="w-full border-black border-2 rounded-md hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-shadow bg-white p-4">
                        <h2 className="text-xl font-bold border-b-2 border-black pb-2 mb-4">Daftar Tugas ({todos.length} tugas tersedia)</h2>

                        {todos.length === 0 ? (
                            <p className="text-gray-500 text-center py-4">Belum ada tugas. Tambahkan tugas baru!</p>
                        ) : (
                            <ul className="space-y-3">
                            {todos.map((todo) => (
                                <ToDoItem key={todo.id} todo={todo} onDelete={handleDeleteToDo}/>
                            ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div> 
        </>
    )
}

export default ToDoList;