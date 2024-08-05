import { useState } from 'react'

function App() {
  const [color, setColor] = useState("green")

  return (
    <div className="h-screen w-full duration-200 "
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white'>
        <div className='fixed flex flex-wrap justify-center text-black gap-3 px-3 py-2 rounded-3xl bg-white'>

          <button onClick={() => setColor("red")}
            className='outline-none px-4 rounded-3xl shadow-2xl'
            style={{ backgroundColor: "Red" }}>Red</button>
          <button onClick={() => setColor("green")}
            className='outline-none px-4 rounded-3xl shadow-2xl'
            style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("orange")}
            className='outline-none px-4 rounded-3xl shadow-2xl'
            style={{ backgroundColor: "orange" }}> Yellow </button>
          <button onClick={() => setColor("grey")}
            className='outline-none px-4 rounded-3xl shadow-2xl'
            style={{ backgroundColor: "grey" }}> grey </button>
          <button onClick={() => setColor("pink")}
            className='outline-none px-4 rounded-3xl shadow-2xl'
            style={{ backgroundColor: "pink" }}> pink </button>

        </div>
      </div>
    </div >
  )
}

export default App
