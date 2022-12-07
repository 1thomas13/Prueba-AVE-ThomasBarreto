import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import { Problem1 } from './pages/problem1/Problem1'
import { Problem2 } from './pages/problem2/Problem2'
import { Problem6 } from './pages/problem6/Problem6'


const Hds1 = () => {
  return <h1>asd</h1>
}

const Menu = () => {

  const [count, setCount] = useState(0)

  return <>
    <h1>Prueba Tecnica AVE</h1>
    <h2>Thomas Barreto</h2>
    <Link className='link' to={"1"}>Ejercicio 1</Link>
    <Link className='link' to={"2"}>Ejercicio 2</Link>
    <Link className='link' to={"3"}>Ejercicio 3</Link>
    <Link className='link' to={"4"}>Ejercicio 4</Link>
    <Link className='link' to={"5"}>Ejercicio 5</Link>
    <Link className='link' to={"6"}>Ejercicio 6</Link>
    <Link className='link' to={"7"}>Ejercicio 7</Link>
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  </>
}

function App() {
  

  return (
    <>
    <div className="App">
      <div className="card">
        
        <Routes>
        <Route path='/' element={<Menu/>} />
          <Route path='/1' element={<Problem1 />} />
          <Route path='/2' element={<Problem2 />} />
          <Route path='/3' element={<Hds1 />} />
          <Route path='/4' element={<Hds1 />} />
          <Route path='/5' element={<Hds1 />} />
          <Route path='/6' element={<Problem6 />} />
          <Route path='/7' element={<Hds1 />} />
        </Routes>
        <Link to={'/'}>volver</Link>
      </div>
    </div>
    
    </>
  )
}

export default App
