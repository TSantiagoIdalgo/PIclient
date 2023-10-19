import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import Nav from './components/nav/nav'
import Register from './components/register/register'
import Login from './components/login/login'
import Main from './components/main/main'
import Error from './components/error/error'
import './App.css'

function App() {
  const token = window.localStorage.getItem('USER_INFO')
  const [mouseMovement, setMouseMove] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMove = (e) => {
      setMouseMove({
        x: e.pageX,
        y: e.pageY
      })
    }

    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [mouseMovement])

  return (
    <div className='background'>
      <div className='cursor' style={{background: `radial-gradient(circle at ${mouseMovement.x}px ${mouseMovement.y}px, rgba(79, 70, 229, 0.25), #010101 100%)`}}>
      <Nav/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='*' element={<Error/>}/>
          {token === null ? <Route path='/login' element={<Login/>}/> : null}
          {token === null ? <Route path='/register' element={<Register/>}/> : null}
        </Routes>
      </div>
    </div>
  )
}

export default App
