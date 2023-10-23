import { Routes, Route } from 'react-router-dom'
import { usePosition } from './hooks/app/usePosition'
import { useState } from 'react'
import Nav from './components/nav/nav'
import Register from './components/register/register'
import Login from './components/login/login'
import Main from './components/main/main'
import Error from './components/error/error'
import Activities from './components/activities/activities'
import AddActivity from './components/activities/addActivity/addActivity'
import Countries from './components/countries/countries'
import Country from './components/countries/country/country'
import './App.css'

function App() {
  const token = window.localStorage.getItem('USER_INFO')
  const [search, setSearch] = useState('')
  const { X, Y } = usePosition()

  return (
    <div className='background'>
      <div className='cursor' style={{background: `radial-gradient(circle at ${X}px ${Y}px, rgba(79, 70, 229, 0.25), #010101 100%)`}}>
      <Nav search={search} setSearch={setSearch}/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='*' element={<Error/>}/>
          {token === null ? <Route path='/login' element={<Login/>}/> : null}
          {token === null ? <Route path='/register' element={<Register/>}/> : null}
          {token !== null ? <Route path='/addActivity' element={<AddActivity/>}/> : null}
          {token !== null ? <Route path='/activities' element={<Activities/>}/> : null}
          {token !== null ? <Route path='/countries' element={<Countries search={search}/>}/> : null}
          <Route path='/country/:id' element={<Country/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
