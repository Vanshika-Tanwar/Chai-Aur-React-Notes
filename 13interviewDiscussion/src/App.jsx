import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState(1)
  //const [multipliedVal, setMultipliedVal] = useState(1)
  let multipliedVal =  value * 5

  const multiplyfive = () => {
    //setMultipliedVal(value * 5)
    setValue(value + 1)
  }
  return (
    <>
      <h1>Main value: {value}</h1>
      <button onClick={multiplyfive}>Click to mutiply by 5</button>
      <h2>Multiplied Value: {multipliedVal}</h2>
    </>
  )
}

export default App
