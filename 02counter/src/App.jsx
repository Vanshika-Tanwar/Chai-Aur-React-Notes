import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0) 
  //let counter = 0
  const addValue = () => {
    //counter = counter + 1
    setCounter(counter+1)
    console.log("clicked add", counter)
  }

  const decreaseValue = () => {
    setCounter(counter-1)
    console.log("clicked decrease", counter)
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
