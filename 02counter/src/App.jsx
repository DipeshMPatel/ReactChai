import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    // //counter = counter + 1

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)                   // On Pressing |addValue| button it will increase only by one as these setcounters will be considered a single batch (React Fibre implementation for optimization...)

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)   // On Pressing |addValue| button it will increase 4 times and will not be taken as a single batch as we are taking previous state trhough call backs in setCounter and we wil get previous state only if the previous function has been completely executed.


    // if(counter < 20){                       // don't want it to go above 20
    //   setCounter(counter + 1)                         
    // }

    
    
  }

  const removeValue = () => {

    if(counter > 0){                        // don't want it to go below 0
      setCounter(counter - 1)               
    }

  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App