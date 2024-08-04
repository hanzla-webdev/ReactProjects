import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  let names = {
    name1: "hanzla",
    name2: "hassan",
  }

  return (
    <>
      <h1 className='bg-green-500 rounded-xl m-2 p-2'>hanzla</h1>

      <Card username="react is easy" btnText="Click me--" />
      <Card username="definaltly" />
    </>
  )
}

export default App
