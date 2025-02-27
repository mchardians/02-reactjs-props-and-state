import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);  
  
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
        <h1 className='text-5xl font-bold mb-8'>Hitungan: {count}</h1>
        <button className='bg-zinc-700 hover:bg-zinc-900 font-bold py-2 px-4 border border-white rounded mb-8' onClick={handleClick}>Tambah</button>      
    </div>
  )
}

export default Counter
