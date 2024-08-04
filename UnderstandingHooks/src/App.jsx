import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5;
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log('hahah')
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);

    // the value is not changing due to fibre thinks thats its the same function runing agai anad again.Istead of this we can use the previous state of the setter mean setCounter and updates is by using puting the previous state in setcounter.
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
