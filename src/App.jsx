import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      alert( count.toString() + ' dapat dibagi dengan 10');
    }
  }, [count]);

  return (
    <> 
      <h1 className="text-3xl font-bold p-10">
        Counter Demo
      </h1>
      <h1 className='text-3xl pb-10'>
        {count}
      </h1>
      <div className="space-x-6">
        <button onClick={() => setCount((count) => count - 1)} className="">
          -
        </button>
        <button onClick={() => setCount((count) => 0)} className=''>
          reset
        </button>
        <button onClick={() => setCount((count) => count + 1)} className=''>
          +
        </button>
      </div>
    </>
  )
}

export default App
