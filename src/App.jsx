import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import { Menu } from './pages/components/Menu'
import { Problem1 } from './pages/problem1/Problem1'
import { Problem2 } from './pages/problem2/Problem2'
import { Problem3and5 } from './pages/problem3and5/Problem3and5'
import { Problem6 } from './pages/problem6/Problem6'
import { Problem8 } from './pages/problem8/Problem8'


function App() {
  
  return (
    <>
    <div className="App">
      <div className="card">
        
        <Routes>
        <Route path='/' element={<Menu/>} />
          <Route path='/1' element={<Problem1 />} />
          <Route path='/2' element={<Problem2 />} />
          <Route path='/3' element={<Problem3and5 />} />
          <Route path='/5' element={<Problem3and5 />} />
          <Route path='/6' element={<Problem6 />} />
          <Route path='/8' element={<Problem8 />} />
        </Routes>
        <Link to={'/'}>volver</Link>
      </div>
    </div>
    
    </>
  )
}

export default App
