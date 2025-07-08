import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)


  // let counter = 5

  const addValue = () => {
    console.log("value added", counter );
    counter = counter + 1
    setCounter(counter)
  }
  
  const removevalue = () => {
    setCounter(counter - 1)
    console.log("value remove", counter);
    
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removevalue}
      >Remove value</button>

    </>
  )
}

export default App
