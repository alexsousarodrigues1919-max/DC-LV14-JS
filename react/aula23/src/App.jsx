import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MeuPrimeiroComponente from './components/MeuPrimeiroComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MeuPrimeiroComponente />
      <h1>Vite + React</h1>
    </>
  )
}

export default App
