import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive");

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button 
        onClick={() => setColor("red")}
        className="outline-none py-2 px-4 py-1 rouned-full text-white shadow-lg" 
        style={{backgroundColor:"red"}}
        >Red</button>
        <button 
        onClick={() => setColor("green")}
        className="outline-none py-2 px-4 py-1 rouned-full text-white shadow-lg" 
        style={{backgroundColor:"Green"}}
        >Green</button>
        <button 
        onClick={() => setColor("yellow")}
        className="outline-none py-2 px-4 py-1 rouned-full text-white shadow-lg" 
        style={{backgroundColor:"Yellow"}}
        >Yellow</button>
        <button 
        onClick={() => setColor("blue")}
        className="outline-none py-2 px-4 py-1 rouned-full text-white shadow-lg" 
        style={{backgroundColor:"Blue"}}
        >Blue</button>
        <button 
        onClick={() => setColor("purple")}
        className="outline-none py-2 px-4 py-1 rouned-full text-white shadow-lg" 
        style={{backgroundColor:"Orange"}}
        >Orange</button>
        <button 
        onClick={() => setColor("Olive")}
        className="outline-none py-2 px-4 py-1 rouned-full text-white shadow-lg" 
        style={{backgroundColor:"Olive"}}
        >Olive</button>
      </div>
    </div>
   </div>
  )
}

export default App
