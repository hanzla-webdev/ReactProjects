import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
    console.log('value added', counter)
  }

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter)
    console.log('value removed')
    if (counter <= 0) {
      setCounter(0);
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>{counter}</p>
    </>
  )
}


export default App
