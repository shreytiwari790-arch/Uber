import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import HomeNew from './pages/HomeNew'
import UserprotectedRoute from './pages/UserprotectedRoute'
import UserLogout from './pages/UserLogout'
import CaptainHome from "./pages/Captainhome"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignUp/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/home' element={
          <UserprotectedRoute>
            <HomeNew/> 
          </UserprotectedRoute>
          } />
        <Route path='/user/logout' element={
          
            <UserLogout/>
          
          } />

        <Route path='/captainhome' element={<CaptainHome />} />
      </Routes>
      
    </div>
  )
}

export default App
